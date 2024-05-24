<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import useCurentUser from './composables/useCurrentUser';

useCurentUser().getCurrentUser();

</script>
