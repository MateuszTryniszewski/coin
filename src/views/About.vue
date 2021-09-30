<template>
  <div class="container">
    <header class="header">
    <button v-if="userLoggedIn" @click="logout">wyloguj</button>
  </header>
  <main>
    <span>Title - About</span>
    <ListComponent></ListComponent>
  </main>
  <footer>
    <Menu />
  </footer>
  </div>
</template>

<script>
import ListComponent from '@/components/ListComponent.vue';
import Menu from '../components/Menu.vue';
import { auth } from '../firebase';

export default {
  name: 'About',

  components: {
    ListComponent,
    Menu,
  },

  computed: {
    userLoggedIn() {
      return this.$store.getters.currentUserLoggedIn;
    },
  },
  methods: {
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
</style>
