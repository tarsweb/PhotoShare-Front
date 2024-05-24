<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-toolbar v-if="isAuth">
        <v-spacer></v-spacer>
        <v-btn type="button" @click="overlay = !overlay" prependIcon="mdi-plus"> Add photo</v-btn>
      </v-toolbar>
      <router-view />
      <h1>Photos</h1>
      <PhotosList :photos="photos" :isLoading="isLoading" :owerlay="overlay" />
    </v-responsive>
  </v-container>
  <v-overlay v-model="overlay" scrim="black">
    <NewPhotoForm />
  </v-overlay>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import useCurrentUser from "@/composables/useCurrentUser";
import { getPhotos } from "@/services/apiPhoto";
import PhotosList from "@/components/PhotosList.vue";
import NewPhotoForm from "@/components/NewPhotoForm.vue";


const { isAuth } = useCurrentUser();

const isLoading = ref(false);

const photos = ref([]);

const overlay = ref(false);

const getDataPhotos = async () => {
  const res = await getPhotos();
  photos.value = res.data;
  console.log(res.data);
};

watchEffect(async () => {
  isLoading.value = true;

  getDataPhotos();

  isLoading.value = false;
});
</script>
