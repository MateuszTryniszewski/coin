<template>
  <div>
    <span class="form__title">Koszty</span>
    <div v-for="(item, index) in data" :key="index">
      <ListItemComponent :item="item" @remove="remove($event)"/>
    </div>
  </div>
</template>

<script>
import ListItemComponent from './ListItemComponent.vue';

export default {
  name: 'ListComponent',

  components: {
    ListItemComponent,
  },

  data() {
    return {
      data: [
        {
          id: 1,
          title: 'Wyjaz na narty w góry ze znajomymi do białki tatrzańskiej',
          date: '21-04-2022',
          amount: 1358635.85,
          category: {
            name: 'podróże',
            icon: 'regular/map',
            class: 'text-primary',
          },
        },
        {
          id: 2,
          title: 'Paliwo volvo',
          date: '21-06-2022',
          amount: 165.85,
          category: {
            name: 'car',
            icon: 'car',
            class: 'text-secondary',
          },
        },
        {
          id: 3,
          title: 'Jedzenie na mieście',
          date: '21-10-2022',
          amount: 35,
          category: {
            name: 'podróże',
            icon: 'utensils',
            class: 'text-red',
          },
        },
        {
          id: 4,
          title: 'Przykładowy długi tytuł sdf saf sdf',
          date: '21-02-2022',
          amount: 1234.85,
          category: {
            name: 'podróże',
            icon: 'regular/images',
            class: 'text-green',
          },
        },
      ],
    };
  },
  methods: {
    remove(id) {
      this.data = this.data.filter((item) => item.id !== id);
    },
  },

};
</script>

<style lang="scss">

</style>
