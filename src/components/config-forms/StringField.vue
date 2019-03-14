<template>
  <v-text-field :value="item.value" v-on:input="updateValue" :label="item.name"></v-text-field>
</template>

<script>
  export default {
    name: 'string-field',
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