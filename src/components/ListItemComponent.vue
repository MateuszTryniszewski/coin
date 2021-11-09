<template>
  <div>
    <div class="row">
      <div class="row__icon">
        <VIcon :name="item.category && item.category.icon || 'car'"
          :class="item.category && item.category.class || ''" class="icon" scale="1.5" />
      </div>
      <div class="row__title">
        <div>
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div class="row__buttons">
        <button @click="edit(item.uid)" class="button-icon text-primary">
          <VIcon name="edit" class="icon" scale="1.2" />
        </button>
        <button @click="remove(item.uid)" class="button-icon text-red">
          <VIcon name="regular/trash-alt" class="icon" scale="1.2" />
        </button>
      </div>
      <div class="row__date">
        <span>{{ item.data }}</span>
      </div>
      <div class="row__amount" >
        <span class="text-primary">{{ item.amount }} PLN</span>
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
    item: {
      type: Object,
      require: true,
    },
  },

  data() {
    return {
    };
  },

  methods: {
    edit(id) {
      console.log('listitem edit', id);
      this.$emit('edit', id);
    },
    remove(id) {
      console.log('uid', id);
      this.$emit('remove', id);
    },
  },
  created() {
  },
};
</script>

<style lang="scss">
.row {
  display: grid;
  border-bottom: 1px solid $border;
  padding: 10px 10px 10px 0px;
  grid-template-columns: 50px 1fr 1fr 1fr auto;
  grid-template-rows: auto;
  grid-template-areas:
    "icon title title title buttons"
    "icon category . amount amount";

  .row__icon {
    grid-area: icon;
    justify-content: center;

    .icon {
    }
  }
  .row__title {
    grid-area: title;
    text-align: left;
    margin-bottom: 5px;
    color: $dark;
  }
  .row__date,
  .row__amount {
    font-size: 0.8rem;
  }
  .row__amount {
    grid-area: amount;
    text-align: right;
  }
  .row__date {
    grid-area: category;
    text-align: left;
  }
  .row__buttons {
    grid-area: buttons;
    margin-bottom: 5px;
  }
}

</style>
