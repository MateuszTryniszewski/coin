<template>
   <div v-for="(row, index) in rows" :key="index"
    class="row q-py-sm"
    style="border-bottom: 1px solid #ccc">
    <div class="col-2 row justify-center q-pt-xs">
      <q-icon class="q-mr-sm"
        :name="row.category.icon"
        :color="row.category.color"
        size="md" />
    </div>
    <div class="col-10">
      <div class="row">
        <span class="col-8 text-bold q-pb-sm">{{ row.name }}</span>
        <div class="col-4 row justify-end items-start q-pr-sm">
          <q-btn flat rounded dense icon="o_edit" size="md" color="secondary" />
           <q-btn flat rounded dense icon="o_delete" size="md" color="negative"/>
        </div>
      </div>
      <div class="row">
        <div class="column col-5">
          <span class="text-grey-9">{{ row.data }}</span>
          <span class="text-grey-9" style="font-size: 0.8rem;">{{ row.category.name }}</span>
        </div>
        <div class="column col-7 items-end q-pr-md" >
          <span class="text-grey-9" style="font-size: 0.8rem;">Kwota</span>
          <span class="text-bold text-primary">{{ row.kwota }} PLN</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainViewer',
  props: {
    rows: {
      type: Object,
    },
  },
});
</script>
