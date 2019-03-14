<template>
  <v-layout row>
    <v-flex sm6>
      <v-card>
        <v-card-title class="title font-weight-bold">Tracked Users</v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile
              v-for="user in tracked"
              :key="user.name"
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="user.name"></v-list-tile-title>
              <v-list-tile-sub-title>Since {{ formatDate(user.time) }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import api from '../api'
  import moment from 'moment'

  export default {
    data: () => ({
      tracked: []
    }),
    methods: {
      formatDate(timestamp) {
        return moment.unix(timestamp).format("DD/MM/YYYY HH:MM:SS")
      }
    },

    created() {
      api.get('tracking')
          .then(response => {
            this.tracked = response.data
          })
    }
  }

</script>