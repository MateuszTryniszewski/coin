<template>
   <q-layout view="lHh lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn @click="toggleLeftDrawer" flat dense round icon="menu" aria-label="Menu" />

        <q-toolbar-title>
          Coinbook
        </q-toolbar-title>
        <q-btn dense flat round icon="settings" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      elevated
      class="bg-grey-1"
      side="left" >
      <q-list class="h-nav">
        <MenuSide
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay elevated>
      <!-- drawer content -->
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="lt-sm bg-grey-8 text-white">
      <q-tabs>
        <q-route-tab v-for="link in essentialLinks"
          :key="link.title"
          :icon="link.icon"
          :to="link.link"
          :label="link.title"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import MenuSide from 'components/MenuSide';
import { defineComponent, ref } from 'vue';

const linksList = [
  {
    title: 'Home',
    icon: 'roofing',
    link: '/',
  },
  {
    title: 'Przychody',
    icon: 'receipt_long',
    link: 'profits',
  },
  {
    title: 'Koszty',
    icon: 'shopping_bag',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Inne',
    icon: 'assignment',
    link: 'https://chat.quasar.dev',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuSide,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>
