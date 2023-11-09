<template>
  <div class="loginBlock">
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent>
        <v-text-field v-model="login" :rules="rules" label="Login" />
        <v-text-field type="password" v-model="pass" :rules="rules" label="Pass" />
        <v-btn color="red" type="submit" block class="mt-2" @click="enterAsAdmin">Войти как админ</v-btn>
        <v-btn color="amber" type="submit" block class="mt-2" @click="enterAsUser">Войти как юзер</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
<script lang="ts">
import router from '@/routes';
import { defineComponent } from 'vue'

export default defineComponent({
  name: "LoginView",
  data: () => ({
    login: '' as string,
    pass: '' as string,
    rules: [
      (value: string) => {
        if (value) return true

        return 'You must enter a valid value.'
      },
    ],
    users: [
      {
        name: "Gurgen",
        surname: "Melkonyan",
        gmail: "gurgenmelqonyan601@gmail.com",
        login: "gurgenmelqonyan601@gmail.com",
        pass: "123456",
        role: "Admin",
      },
      {
        name: "Dima",
        surname: "Bogdanov",
        gmail: "dherherherth@gmail.com",
        role: "User",
      },
      {
        name: "Gurgen",
        surname: "Melkonyan",
        gmail: "gurgenmelqonyan601@gmail.com",
        role: "Admin",
      },
    ]
  }),
  methods: {
    enterAsAdmin: function () {
      localStorage.setItem("userType", "admin");
      localStorage.setItem("isAuth", "true");
      router.push('/');
    },
    enterAsUser: function () {
      localStorage.setItem("userType", "user")
      localStorage.setItem("isAuth", "true");
      router.push('/');
    }
  },

})
</script>
<style>
.loginBlock {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>