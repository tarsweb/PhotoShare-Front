<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1>User Data</h1>
      <PhotosList :photos="photos" :isLoading="isLoading" />
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { getUserPhotos } from "@/services/apiUser";

const isLoading = ref(false);

const photos = ref([]);

const getDataPhotos = async () => {
  const res = await getUserPhotos();
  photos.value = res.data;
  console.log(res.data);
};

watchEffect(async () => {
  isLoading.value = true;

  getDataPhotos();

  isLoading.value = false;
});
</script>
