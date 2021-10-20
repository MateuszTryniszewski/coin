<template>

  <nav id="nav">
      <router-link to="/"> <VIcon name="home" class="icon" scale="1.6" /> </router-link> |
      <router-link to="/expenses">
        <VIcon name="regular/credit-card" class="icon" scale="1.6" />
      </router-link>  |
      <router-link to="/przychody">
        <VIcon name="coins" class="icon" scale="1.6" />
      </router-link>
    </nav>

</template>

<script>
import 'vue-awesome/icons';
import VIcon from 'vue-awesome/components/Icon';

export default {
  name: 'Menu',

  components: {
    VIcon,
  },
};
</script>

<style>

</style>
