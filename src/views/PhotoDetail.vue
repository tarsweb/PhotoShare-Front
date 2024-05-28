<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <PhotoDetail v-if="!isLoading" :photo="photo" />
      <v-skeleton-loader v-else
          class="mx-auto border"
          max-height="auto"
          type="card, avatar, article, actions"
        ></v-skeleton-loader>
    </v-responsive>
  </v-container>

</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import useCurrentUser from "@/composables/useCurrentUser";
import { getPhoto } from "@/services/apiPhoto";

const { user } = useCurrentUser();

import PhotoDetail from "@/components/PhotoDetail.vue";

const route = useRoute();

const id = route.params.photo_id;

const isLoading = ref(false);

const photo = ref(null);

// const getDataPhoto = async (id) => {
//   const imageData = await getPhoto(id);
//   photo.value = imageData;
// };

watchEffect(async () => {
  isLoading.value = true;

  getPhoto(id)
    .then((imageData) => {
      photo.value = imageData;
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      isLoading.value = false;
    });
});
</script>
