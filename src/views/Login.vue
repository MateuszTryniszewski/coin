<template>
  <div class="login test">
    <transition name="slide" mode="out-in" appear>
      <keep-alive>
        <LoginComponent v-if="IsAccount" />
        <Register v-else />
      </keep-alive>
    </transition>
    <button @click="IsAccount = !IsAccount" class="button button--span" >
      {{ IsAccount ? 'Zarejestruj' : 'Powrót do logowania'}}
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from '@/components/LoginComponent.vue';
import Register from '@/components/RegisterComponent.vue';

export default {
  name: 'Home',
  components: {
    LoginComponent,
    Register,
  },
  data() {
    return {
      IsAccount: true,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
.login {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  place-items: center;
  background-image:linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%),
   url('../assets/background.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>
