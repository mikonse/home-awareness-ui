<template>
  <int-field
      v-if="item.type === 'int'"
      :item="item"
      v-on:update="updateValue"
  ></int-field>
  <string-field
      v-else-if="item.type === 'str'"
      :item="item"
      v-on:update="updateValue"
  ></string-field>
  <bool-field
      v-else-if="item.type === 'bool'"
      :item="item"
      v-on:update="updateValue"
  ></bool-field>
  <choice-field
      v-else-if="item.type === 'choice'"
      :item="item"
      v-on:update="updateValue"
  ></choice-field>
  <tuple-list-field
      v-else-if="item.type === 'tuple_list'"
      :item="item"
      v-on:update="updateValue"
  ></tuple-list-field>
</template>

<script>
  import IntField from "./IntField";
  import BoolField from "./BoolField";
  import TupleListField from "./TupleListField";
  import StringField from "./StringField";
  import ChoiceField from "./ChoiceField";

  export default {
    name: 'config-field',
    components: {
      IntField,
      BoolField,
      TupleListField,
      StringField,
      ChoiceField
    },
    props: ['item'],
    data: () => ({}),
    methods: {
      updateValue(newItem) {
        this.$emit('update', newItem);
      }
    }
  }
</script>