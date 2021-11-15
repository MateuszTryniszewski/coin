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
       <section class="form__section">
        <label class="label" for="date">date</label>
        <input v-model="item.date" class="input" type="date" name="date" id="date"/>
      </section>
      <button id="signin" v-if="!isExisting"
        @click="add(item)" class="button button--primary">Add</button>
      <button id="signin" v-else @click="edit(item)" class="button button--primary">Edit</button>
    </form>
  </div>
</template>

<script>
import Api from '../api/api';

export default {
  name: 'AddItemComponent',

  components: {
  },
  props: {
    item: {
      type: Object,
      default() {
        return {
          title: null,
          amount: null,
          date: new Date(),
          category: null,
        };
      },
    },
    isExisting: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
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
      const promise = new Api('expenses', null, item).create();
      promise
        .then((res) => {
          console.log('res', res);
        })
        .catch((err) => {
          console.log('err', err);
        });
      console.log('add', promise, item);
    },
  },

};
</script>

<style lang="scss">

</style>
