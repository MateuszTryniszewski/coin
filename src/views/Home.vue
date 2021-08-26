<template>
<div class="container">
  <header class="header">
    <button v-if="userLoggedIn" @click="logout">wyloguj</button>
  </header>
  <main> <p>test</p></main>
  <footer>
    <Menu />
  </footer>
</div>
</template>

<script>
// @ is an alias to /src
import Menu from '../components/Menu.vue';
import { auth } from '../firebase';

export default {
  name: 'Home',
  components: {
    Menu,
  },
  data() {
    return {
    };
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
.container {
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
}
</style>
