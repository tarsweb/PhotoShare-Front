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
          width="250px"
          height="300px"
        ></v-img>
        <v-card-text class="text-h5">
          {{ photo?.description }}
        </v-card-text>
        <v-rating
          :model-value="photo?.average_rating"
          color="amber"
          density="compact"
          half-increments
          readonly
        ></v-rating>
      </v-card-item>
      <v-card-actions>
        <v-dialog max-width="500" style="">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              color="surface-variant"
              text="Make transformation"
              variant="flat"
            ></v-btn>
          </template>

          <template v-slot:default="{ isActive }" style="overflow-y: auto !important;">
            <PhotoTransformForm :photo_id="photo?.id" />
            <!-- <v-card title="Dialog">
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  text="Close Dialog"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card> -->
          </template>
        </v-dialog>
        <!-- <v-btn color="primary" variant="outlined"> Details </v-btn> -->
        <!-- <v-btn variant="outlined" color="green"> Make transformation </v-btn> -->
      </v-card-actions>
    </v-card>
    <CommentsSet :photo_id="photo?.id" />
    {{ photo }}
  </v-sheet>
</template>

<script setup>
import { computed, ref, toRef, watchEffect } from "vue";
import useCurrentUser from "@/composables/useCurrentUser";

import CommentsSet from "./CommentsSet.vue";
import PhotoTransformForm from "@/components/PhotoTransformForm.vue"

const { user } = useCurrentUser();

const props = defineProps({
  photo: {
    type: Object,
    required: true,
  },
  // isLoading: Boolean
});

const photo = toRef(props, "photo");

const isLoading = ref(false);

// watchEffect(async () => {
//   isLoading.value = true;
//   comments.value = await getComments(photo.id);
//   isLoading.value = false;
// });
</script>
