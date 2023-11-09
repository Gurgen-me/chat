<template>
  <v-app id="inspire">
    <template v-if="this.$route.name == 'Login' || this.$route.name == 'NotFound'">
      <router-view />
    </template>
    <template v-else>
      <v-navigation-drawer v-model="drawer"
  
  >
    <v-list>
      <v-list-item
        prepend-avatar="{{ img }}"
        title="{{name}}"
        subtitle="{{ gmail }}"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <router-link to="/"><v-list-item prepend-icon="mdi-home">Home</v-list-item></router-link>
      <router-link to="/profile"><v-list-item prepend-icon="mdi-account">Профиль</v-list-item></router-link>
      <router-link to="/chat"><v-list-item prepend-icon="mdi-message">Чат</v-list-item></router-link>
      <router-link to="/help"><v-list-item prepend-icon="mdi-help">Проблема</v-list-item></router-link>
      <v-spacer></v-spacer>
      <router-link to="/login" @click="logout">Выйти</router-link>
    </v-list>
</v-navigation-drawer>

      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>{{this.$route.name}}</v-app-bar-title>
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </template>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  components: {
    
  },
  mounted() {
        this.checkAuth();
    },
    methods: {
        checkAuth: function () {
            if (localStorage.getItem("isAuth") != 'true') {
                this.$router.replace('/login')
            }
        },
        logout: function () {
          localStorage.setItem('userType', '');
          localStorage.setItem('isAuth', '');
        }
    },
  data() {
    return {
      drawer: true
    }
  },
})
</script>
<style>
nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

nav a {
  font-weight: bold;
  color: #2c2c2c;
  text-decoration: none;
}
</style>