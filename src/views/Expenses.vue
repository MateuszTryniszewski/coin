<template>
  <div class="container">
    <header class="header">
    <button v-if="userLoggedIn" @click="logout">wyloguj</button>
    <button v-if="AddNewItem"
      @click="back"
      class="float-button">
      <VIcon name="chevron-left" class="icon" scale="1.2" />
    </button>
  </header>
  <main>
    <transition name="slide" mode="out-in" appear>
      <ListComponent v-if="!AddNewItem" @update="edit($event)"></ListComponent>
      <AddItemComponent v-if="AddNewItem"
        :item="item"
        :isExisting="isExisting"
      >
      </AddItemComponent>
    </transition>
    <button v-if="!AddNewItem"
      @click="AddNewItem = !AddNewItem"
      class="float-button">
      <VIcon name="plus" class="icon" scale="1.2" />
    </button>
  </main>
  <footer>
    <Menu />
  </footer>
  </div>
</template>

<script>
import ListComponent from '@/components/ListComponent.vue';
import 'vue-awesome/icons';
import VIcon from 'vue-awesome/components/Icon';
import AddItemComponent from '@/components/AddItemComponent.vue';
import Menu from '../components/Menu.vue';
import { auth } from '../firebase';

export default {
  name: 'Expenses',

  components: {
    ListComponent,
    Menu,
    VIcon,
    AddItemComponent,
  },

  data() {
    return {
      AddNewItem: false,
      isExisting: false,
      item: {
        title: null,
        amount: null,
        date: new Date(),
        category: null,
      },
    };
  },
  computed: {
    userLoggedIn() {
      return this.$store.getters.currentUserLoggedIn;
    },
  },
  methods: {
    edit(event) {
      console.log('edit event', event);
      this.item = event;
      this.isExisting = true;
      this.AddNewItem = !this.AddNewItem;
    },
    back() {
      this.item = {
        title: null,
        amount: null,
        date: new Date(),
        category: null,
      };
      this.isExisting = false;
      this.AddNewItem = !this.AddNewItem;
    },
    logout() {
      auth.signOut().then(() => {
        this.$store.dispatch('setUser', null);
        this.$router.push('/login');
      });
    },
  },

};
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: flex-end;
    padding: 15px;
  }
  .float-button {
    background: $primary;
    color: $light;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    position: absolute;
    bottom: 50px;
    right: 20px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  }
  .float-button:hover {
    background: darken($primary, 5%);
  }
  .float-button:after {
    content: "";
    background: darken($primary, 35%);
    display: block;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    opacity: 0%;
    transition: all 0.4s;
  }
  .float-button:active:after {
    opacity: 50%;
    width: 0px;
    height: 0px;
    left: 50%;
    top: 50%;
    transition: 0s
  }
</style>
