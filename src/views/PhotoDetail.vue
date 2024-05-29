<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <PhotoDetail v-if="!isLoading" :photo="photo" @updateData="updateData" />
      <v-skeleton-loader
        v-else
        class="mx-auto border"
        max-height="auto"
        type="card, avatar, article, actions"
      ></v-skeleton-loader>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { provide, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import useCurrentUser from "@/composables/useCurrentUser";
import { getPhoto } from "@/services/apiPhoto";

const { user } = useCurrentUser();

import PhotoDetail from "@/components/PhotoDetail.vue";

const route = useRoute();

const id = route.params.photo_id;

const isLoading = ref(false);

const photo = ref(null);
const transformations = ref([]);

provide("transformations", transformations);

const getDataPhoto = async (id) => {
  isLoading.value = true;

  getPhoto(id)
    .then((imageData) => {
      photo.value = imageData;
      transformations.value = imageData.transformations;
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      isLoading.value = false;
    });
};

const updateData = () => {
  getDataPhoto(id);
};

watchEffect(async () => {
  getDataPhoto(id);
});
</script>
