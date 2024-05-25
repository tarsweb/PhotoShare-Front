<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1>Photos</h1>
      <PhotosList :photos="photos" :isLoading="isLoading" />
      <v-fab v-if="isAuth"
        extended
        prepend-icon="mdi-plus"
        text="Add photo"
        variant="tonal"
        color="success"
        app
        absolute
        @click="overlay = true"
      >
      </v-fab>
    </v-responsive>
  </v-container>
  <v-overlay v-model="overlay" scrim="black">
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

  getDataPhotos();

  isLoading.value = false;
});
</script>
