<template>
    <PhotoDetail :photo="photo" :isLoading="isLoading" />
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from 'vue-router';
import useCurrentUser from "@/composables/useCurrentUser";
import { getPhotos } from "@/services/apiPhoto";

const { user } = useCurrentUser();

import PhotoDetail from "@/components/PhotoDetail.vue";

const route = useRoute();

const id = route.params.photo_id;

const isLoading = ref(false);

const photo = ref(null);

const getDataPhoto = async (id) => {
  const res = await getPhotos();
  photo.value = res.data;
  console.log(res.data);
};

watchEffect(async () => {
  isLoading.value = true;

  getDataPhoto(id);

  isLoading.value = false;
});

</script>