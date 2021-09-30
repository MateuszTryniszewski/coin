<template>
  <div>
    <div class="row" v-for="(item, index) in data" :key="index">
      <div class="row__icon">
        <VIcon :name="item.category.icon"
          :class="item.category.class || ''" class="icon" scale="1.5" />
      </div>
      <div class="row__title">
        <div>
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div class="row__side">
        <div class="side__date">
          <span>{{ item.date }}</span>
        </div>
        <div class="side__amount" >
          <span class="text-primary">{{ item.amount }} PLN</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons';
import VIcon from 'vue-awesome/components/Icon';

export default {
  name: 'ListItemComponent',

  components: {
    VIcon,
  },

  props: {
    data: {
      type: Array,
      require: true,
    },
  },

  data() {
    return {
    };
  },

  methods: {
  },
  created() {
  },
};
</script>

<style lang="scss">
.row {
  display: grid;
  grid-template-columns: 50px 1fr auto;
  border-bottom: 1px solid $border;
  padding: 10px 10px 10px 0px;

  .row__icon {
    justify-content: center;

    .icon {
    }
  }
  .row__title {
    text-align: left;
  }
  .row__side {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .side__date,
    .side__amount {
      font-size: 0.8rem;
    }
  }
}

</style>
