<template>
  <q-page class="flex-columns justify-around">
    <MainViewer :rows="rows" />
  </q-page>
</template>

<script>
import { ref } from 'vue';
import MainViewer from '../components/MainViewer';

const rows = [
  {
    name: 'Długi tytuł paliwo kupione w górach',
    data: '2021-07-23',
    category: {
      name: 'samochód',
      icon: 'o_toys',
      color: 'orange',
    },
    kwota: 1234575.43,
  },
  {
    name: 'Lunch',
    data: '2021-07-23',
    category: {
      name: 'jedzenie',
      icon: 'restaurant',
      color: 'red',
    },
    kwota: 1234575.43,
  },
  {
    name: 'Nowe meble do domu',
    data: '2021-07-23',
    category: {
      name: 'mieszkanie',
      icon: 'o_home',
      color: 'green',
    },
    kwota: 1234575.43,
  },
  {
    name: 'bilety',
    data: '2021-07-23',
    category: {
      name: 'samochód',
      icon: 'o_toys',
      color: 'orange',
    },
    kwota: 1234575.43,
  },
];

export default {
  name: 'Profits',

  components: {
    MainViewer,
  },

  setup() {
    return {
      filter: ref(''),
      rows,
    };
  },
};
</script>

<style>

</style>
