<template>
  <v-text-field :value="item.value" v-on:input="updateValue" :label="item.name" mask="#####"></v-text-field>
</template>

<script>
  export default {
    name: 'int-field',
    props: ['item'],
    data: () => ({}),
    methods: {
      updateValue(event) {
        this.item.value = parseInt(event);
        this.$emit('update', this.item);
      }
    }
  }
</script>