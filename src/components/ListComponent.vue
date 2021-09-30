<template>
    <div>
      <ListItemComponent :data="data"/>
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
          title: 'Wyjaz na narty w góry ze znajomymi do białki tatrzańskiej',
          date: '21.0.2022',
          amount: 1358635.85,
          category: {
            name: 'podróże',
            icon: 'regular/map',
            class: 'text-primary',
          },
        },
        {
          title: 'Paliwo volvo',
          date: '21.0.2022',
          amount: 165.85,
          category: {
            name: 'car',
            icon: 'car',
            class: 'text-secondary',
          },
        },
        {
          title: 'Jedzenie na mieście',
          date: '21.0.2022',
          amount: 35,
          category: {
            name: 'podróże',
            icon: 'utensils',
            class: 'text-red',
          },
        },
        {
          title: 'Przykładowy długi tytuł sdf saf sdf',
          date: '21.0.2022',
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

};
</script>

<style lang="scss">

</style>
