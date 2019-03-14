<template>
  <v-switch color="primary" v-model="item.value" :label="item.name"></v-switch>
</template>

<script>
  export default {
    name: 'bool-field',
    props: ['item'],
    data: () => ({}),
    watch: {
      value: function(value) {
        this.item.value = value;
        this.$emit('update', this.item);
      }
    }
  }
</script>