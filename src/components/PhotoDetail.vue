<template>
  <v-sheet v-if="!isLoading" class="align-center">
    <v-card :title="photo?.title">
      <template v-slot:append>
        <v-tooltip location="bottom">
          <template v-slot:activator="{ props }">
            <v-avatar size="64" v-bind="props">
              <v-img
                v-if="photo?.owner?.avatar"
                :alt="photo?.owner?.username"
                :src="photo?.owner?.avatar"
              ></v-img>
              <span v-else class="mt-1">{{ photo?.owner?.username }}</span>
            </v-avatar>
          </template>

          <v-card-title>{{ photo?.owner?.username }}</v-card-title>
        </v-tooltip>
      </template>
      <template v-slot:prepend>
        <v-rating
        :model-value="avereage_rating"
        color="amber"
        density="compact"
        half-increments
        readonly
      />
      </template>
      <v-card-text v-if="photo?.tags">
        <div class="px-4 mb-2">
          <v-chip v-for="tag in photo?.tags" :key="tag.id" class="mr-2">
            {{ tag.name }}
          </v-chip>
        </div>
      </v-card-text>
      <v-card-item>
        <v-img
          :src="photo?.secure_url"
          :alt="photo?.title"
          width="300px"
          height="300px"
        ></v-img>
        <v-card-text>
          {{ photo?.description }}
        </v-card-text>
      </v-card-item>
      <v-card-actions>
        <v-dialog v-if="user?.id === photo?.owner?.id">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              variant="outlined"
              color="green"
              text="Make transformation"
            ></v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <PhotoTransformForm
              :photo_id="photo?.id"
              @close="isActive.value = false"
            />
          </template>
        </v-dialog>
        <v-spacer></v-spacer>
        <v-rating
          v-if="isAuth"
          v-model="raiting"
          color="amber"
          density="compact"
          @update:model-value="onUpdateRaiting"
        ></v-rating>
        <!-- <v-btn color="primary" variant="outlined"> Details </v-btn> -->
        <!-- <v-btn variant="outlined" color="green"> Make transformation </v-btn> -->
      </v-card-actions>
    </v-card>
    <CommentsSet :photo_id="photo?.id" />
    {{ photo }}
  </v-sheet>
</template>

<script setup>
import { computed, onMounted, ref, toRef, watchEffect } from "vue";
import useCurrentUser from "@/composables/useCurrentUser";
import { getRating, setRating, getAVGRating } from "@/services/apiRating";

import CommentsSet from "./CommentsSet.vue";
import PhotoTransformForm from "@/components/PhotoTransformForm.vue";

const { isAuth, user } = useCurrentUser();

const props = defineProps({
  photo: {
    type: Object,
    required: true,
  },
  // isLoading: Boolean
});

const photo = toRef(props, "photo");
const raiting = ref(0);
const avereage_rating = ref(0);

const isLoading = ref(false);

// watchEffect(async () => {
//   isLoading.value = true;
//   comments.value = await getComments(photo.id);
//   isLoading.value = false;
// });

onMounted(async () => {
  if (isAuth.value) {
    getRating(photo.value.id)
      .then((result) => {
        raiting.value = result;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getAVGRating(photo.value.id)
    .then((result) => {
      avereage_rating.value = result;
    })
    .catch((error) => {
      console.log(error);
    });
});

const onUpdateRaiting = async (value) => {
  setRating(photo.value.id, value)
    .then((result) => {
      getAVGRating(photo.value.id).then((result) => {
        avereage_rating.value = result;
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
