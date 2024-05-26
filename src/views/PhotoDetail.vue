<template>
  <PhotoDetail :photo="photo" />
</template>

<script setup>
import { onMounted, ref, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import useCurrentUser from "@/composables/useCurrentUser";
import { getPhoto } from "@/services/apiPhoto";

const { user } = useCurrentUser();

import PhotoDetail from "@/components/PhotoDetail.vue";

const route = useRoute();

const id = route.params.photo_id;

const isLoading = ref(false);

const photo = ref({});

// const getDataPhoto = async (id) => {
//   const imageData = await getPhoto(id);
//   photo.value = imageData;
// };

watchEffect( async () => {
  
  // isLoading.value = true;

  getPhoto(id).then((imageData) => {
    photo.value = imageData;
    // isLoading.value = false;

    console.log("PhotoDetail", photo.value);
  });

  // isLoading.value = false;
});
</script>
