<template>
  <div class="card">
    <form class="card__form" @submit.prevent>
      <span class="form__title">Logowanie</span>
      <section class="form__section">
        <label class="label" for="email">Email</label>
        <input v-model="email" class="input" type="email"
          name="email" id="email" placeholder="email"/>
      </section>
      <section class="form__section">
        <label class="label" for="password">Hasło</label>
        <input v-model="password" class="input" type="password" name="password" id="password"
          placeholder="password" />
      </section>
      <button id="signin" @click="login" class="button button--primary">Zaloguj</button>
      <section>
        <span>{{ error }}</span>
      </section>
    </form>
  </div>
</template>

<script>
import { auth } from '../firebase';

export default {
  name: 'LoginComponent',

  data() {
    return {
      auth,
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        this.error = null;
        await auth.signInWithEmailAndPassword(this.email, this.password)
          .then((data) => {
            const { email, uid } = data.user;
            this.$store.dispatch('setUser', { email, uid });
            this.$router.push('/');
          });
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>

<style>

</style>
