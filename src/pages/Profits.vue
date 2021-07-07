<template>
<q-page class="flex-columns justify-around">
  <!-- <h2 class="self-start q-ml-md">Przychody</h2> -->
    <div class="q-pa-md">
    <q-table
      :grid="$q.screen.lt.sm"
      title="Przychody"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Szukaj">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</q-page>
</template>

<script>
import { ref } from 'vue';

const columns = [
  {
    name: 'tytul',
    required: true,
    label: 'Tytuł',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'kategoria', align: 'center', label: 'Kategoria', field: 'kategoria', sortable: true,
  },
  {
    name: 'data', label: 'Data', field: 'data', sortable: true,
  },
  {
    name: 'kwota', label: 'Kwota', field: 'kwota',
  },
];

const rows = [
  {
    name: 'Frozen Yogurt',
    data: 159,
    kategoria: 6.0,
    kwota: 24,
  },
  {
    name: 'Ice cream sandwich',
    data: 237,
    kategoria: 9.0,
    kwota: 37,
  },
  {
    name: 'Eclair',
    data: 262,
    kategoria: 16.0,
    kwota: 23,
  },
  {
    name: 'Cupcake',
    data: 305,
    kategoria: 3.7,
    kwota: 67,
  },
  {
    name: 'Gingerbread',
    data: 356,
    kategoria: 16.0,
    kwota: 49,
  },
];

export default {
  name: 'Profits',

  setup() {
    return {
      filter: ref(''),
      columns,
      rows,
    };
  },
};
</script>

<style>

</style>
