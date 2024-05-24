<template>
  <v-app-bar flat prominent>
    <v-btn type="button" :to="{name : 'Home'}">Home</v-btn> 
    <v-btn type="button" :to="{name : 'About'}">About</v-btn>
    <!-- <v-app-bar-nav-icon> </v-app-bar-nav-icon> -->
    <v-spacer />
    <userMenu v-if="isAuthenticated" />
    <authNav v-else />
  </v-app-bar>
</template>

<script setup>
import useCurentUser from "@/composables/useCurrentUser";

const { isAuth : isAuthenticated } = useCurentUser();

import { inject } from "vue";
// import { useAuthStore } from "@/store/auth";

// const authStore = useAuthStore()

import userMenu from "@/components/usermenu";
import authNav from "@/components/authnav"


// const isAuthenticated = inject('authData')

</script>
