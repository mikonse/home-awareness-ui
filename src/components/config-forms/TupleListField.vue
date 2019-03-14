<template>
  <v-list>
    <v-list-tile>
      <h3>{{ item.name.replace("_", " ") }}</h3>
    </v-list-tile>
    <v-list-tile
        v-for="(value, index) in item.value"
        :key="index"
    >
      <template
          v-if="editing == index"
      >
        <v-list-tile-content>
          <v-layout
              row
              pt-3
          >
            <v-flex
                pr-4
                v-for="index in Number(item.n_elems)"
                :key="index"
            >
              <v-text-field v-model="value[index - 1]" :label="item.elem_names[index - 1]"></v-text-field>
            </v-flex>
          </v-layout>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-icon @click="finishEditing()" color="green">done</v-icon>
        </v-list-tile-action>
      </template>
      <template
          v-else
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ value[0] }}</v-list-tile-title>
          <v-list-tile-sub-title
              v-for="index in Number(item.n_elems - 1)"
              :key="index"
          >
            {{ value[index] }}
          </v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-icon @click="editItem(index)" color="gray">edit</v-icon>
        </v-list-tile-action>

        <v-list-tile-action>
          <v-icon @click="removeItem(index)" color="red">delete</v-icon>
        </v-list-tile-action>
      </template>
    </v-list-tile>

    <v-list-tile
        v-if="adding"
    >
      <v-list-tile-content>
        <v-layout
            row
            pt-3
        >
          <v-flex
              pr-4
              v-for="index in Number(item.n_elems)"
              :key="index"
          >
            <v-text-field v-model="addingValue[index - 1]" :label="item.elem_names[index - 1]"></v-text-field>
          </v-flex>
        </v-layout>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-icon @click="addItem()" color="green">done</v-icon>
      </v-list-tile-action>

      <v-list-tile-action>
        <v-icon @click="adding=false" color="red">close</v-icon>
      </v-list-tile-action>
    </v-list-tile>

    <v-list-tile>
      <v-layout justify-center>
        <v-list-tile-action>
          <v-btn @click="adding=true" fab outline small dark color="success">
            <v-icon>add</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-layout>
    </v-list-tile>
  </v-list>
</template>

<script>
  export default {
    name: 'tuple-list-field',
    props: ['item'],
    methods: {
      editItem(index) {
        this.editing = index;
      },
      finishEditing() {
        this.editing = -1;
      },
      removeItem(index) {
        this.item.value.splice(index, 1);
      },
      addItem() {
        if (this.adding && this.addingValue[0] !== "" && this.addingValue[1] !== "") {
          this.item.value.push(this.addingValue);
          this.addingValue = ["", ""];
          this.adding = false;
        }
      }
    },
    data: () => ({
      editing: -1,
      adding: false,
      addingValue: ["", ""]
    })
  }
</script>