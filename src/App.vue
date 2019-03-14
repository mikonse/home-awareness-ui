<template id="app">
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        app
    >
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Smart Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list dense>
        <v-divider></v-divider>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Me Home</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :to="{name: 'home'}" flat>Home</v-btn>
        <v-btn :to="{name: 'tracking'}" flat>Tracking</v-btn>
        <v-btn :to="{name: 'config'}" flat>Settings</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer
        app
        absolute
        dark
        class="justify-center"
    >
      &copy; {{ new Date().getFullYear() }}—<strong>mikonse</strong>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false
    })
  }
</script>