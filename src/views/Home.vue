<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1>Photos</h1>
      <PhotosList :photos="photos" :isLoading="isLoading" />
      <teleport v-if="isAuth" to="#app">
        <v-fab
          extended
          prepend-icon="mdi-plus"
          text="Add photo"
          variant="tonal"
          color="success"
          app
          style="position: sticky; bottom: 20px; right: 20px"
          @click="overlay = true"
        >
        </v-fab>
      </teleport>
    </v-responsive>
  </v-container>
  <v-overlay
    v-model="overlay"
    scrim="black"
    style="overflow-y: auto !important"
  >
    <NewPhotoForm @close="overlay = false" />
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
  const dataPhotos = await getPhotos();
  photos.value = dataPhotos;
};

watchEffect(async () => {
  isLoading.value = true;

  console.log("Home", overlay.value);

  getDataPhotos();

  isLoading.value = false;
});
</script>
