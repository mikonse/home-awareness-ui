<template>
  <v-layout column>
    <v-flex color="primary" mb-3>
      <h1 class="primary--text">Settings</h1>
    </v-flex>
    <!--<p>{{modules}}</p>-->
    <v-flex
        mb-3
        v-for="(module, moduleName) in modules"
        :key="moduleName"
    >
      <v-card>
        <v-card-title class="title font-weight-bold">{{ moduleName }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <config-field
              v-for="item in module"
              :key="item.name"
              :item="item"
              v-on:update="item = $event"
          ></config-field>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex align-self-end>
      <v-btn @click="saveConfig()" color="success">Save</v-btn>
    </v-flex>

    <v-snackbar
        v-model="snackbar"
        :timeout="3000"
        :top="true"
    >
      {{ snackMessage }}
      <v-btn
          color="pink"
          flat
          @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
  import api from '../api'
  import ConfigField from "./config-forms/ConfigField";

  export default {
    components: {
      ConfigField
    },
    methods: {
      saveConfig() {
        api.post('config', this.modules)
            .then(() => {
              this.snackMessage = 'Saved successfully!';
              this.snackbar = true;
            })
            .catch(() => {
              this.snackMessage = 'Saving failed!';
              this.snackbar = true;
            })
      }
    },
    data: () => ({
      modules: [],
      snackbar: false,
      snackMessage: ''
    }),
    created() {
      api.get('config')
          .then(response => {
            this.modules = response.data;
          })
          .catch(() => {
            this.snackMessage = 'Could not load modules!';
            this.snackbar = true;
          })
    }
  }
</script>