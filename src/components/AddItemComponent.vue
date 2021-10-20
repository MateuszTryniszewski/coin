<template>
  <div>
    <form class="card__form" @submit.prevent>
      <span class="form__title">Add</span>
      <section class="form__section">
        <label class="label" for="title">title</label>
        <input v-model="item.title" class="input" type="title"
          name="title" id="title" />
      </section>
      <section class="form__section">
        <label class="label" for="amount">amount</label>
        <input v-model="item.amount" class="input" type="number" name="amount" id="amount" />
      </section>
      <section class="form__section">
        <label class="label" for="category">category</label>
        <select v-model="item.category" class="input" type="category" name="category"
          id="category"
          placeholder="category">
          <option v-for="(category, index) in categories"
          :key="index"
          :value="category.id">
            {{ category.name }}
          </option>
          </select>
      </section>
      <button id="signin" @click="add(item)" class="button button--primary">Add</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'AddItemComponent',

  components: {
  },

  data() {
    return {
      item: {
        title: null,
        amount: null,
        date: new Date(),
        category: null,
      },
      categories: [
        {
          id: 1,
          name: 'Podróże',
          icon: 'regular/images',
          class: 'text-green',
        },
        {
          id: 2,
          name: 'Mieszkanie',
          icon: 'home',
          class: 'text-green',
        },
        {
          id: 3,
          name: 'Samochód',
          icon: 'car',
          class: 'text-green',
        },
        {
          id: 4,
          name: 'Jedzenie',
          icon: 'utensils',
          class: 'text-green',
        },
        {
          id: 5,
          name: 'Inne',
          icon: 'box-open',
          class: 'text-green',
        },
      ],
    };
  },
  methods: {
    add(item) {
      console.log('add', item);
      this.item = {
        title: null,
        amount: null,
        date: new Date(),
        category: null,
      };
    },
  },

};
</script>

<style lang="scss">

</style>
