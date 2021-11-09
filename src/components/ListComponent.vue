<template>
  <div class="flex">
    <span class="form__title">Koszty</span>
    <div v-for="(item, index) in data" :key="index">
      <ListItemComponent :item="item" @edit="edit($event)" @remove="remove($event)"/>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import ListItemComponent from './ListItemComponent.vue';
import Api from '../api/api';

export default {
  name: 'ListComponent',

  components: {
    ListItemComponent,
  },

  data() {
    return {
      data: [],
      item: {},
    };
  },
  methods: {
    remove(id) {
      console.log('funkcja id', id);
      const item = new Api('expenses', id).delete();
      item
        .then((data) => {
          this.data.filter((removeItem) => removeItem.uid !== id);
          console.log('data', data);
        })
        .catch((error) => {
          console.log('remove error', error);
        });
    },

    edit(id) {
      console.log('listcomponent, edit', id, this.data.find((item) => item.uid === id));
      // this.item = this.data.find((item) => item.uid === id);
      this.$emit('update', this.data.find((item) => item.uid === id));
    },

    async fetchData() {
      const message = new Api('expenses').getAll();
      message.then((doc) => {
        this.data = doc.docs.map((item) => ({
          uid: item.id,
          title: item.data().title,
          amount: item.data().amount,
          data: dayjs(item.data().date.seconds * 1000).format('DD/MM/YYYY'),
          category: item.data().category,
        }));
      })
        .catch((e) => {
          console.log('e', e);
        });
    },
  },
  mounted() {
    this.fetchData();
  },

};
</script>

<style lang="scss">
.flex {
  display: flex;
  flex-direction: column;
}
</style>
