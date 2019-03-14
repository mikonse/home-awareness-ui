<template>
  <v-select
    :items="item.choices"
    :label="item.name.replace('_', ' ')"
    :value="item.value"
    v-on:input="updateValue"
  ></v-select>
</template>

<script>
  export default {
    name: 'choice-field',
    props: ['item'],
    data: () => ({}),
    methods: {
      updateValue(event) {
        this.item.value = event;
        this.$emit('update', this.item);
      }
    }
  }
</script>