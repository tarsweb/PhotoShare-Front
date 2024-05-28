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
          </v-card-item>
          <v-card-actions>
            <v-btn color="primary" variant="outlined"> Details </v-btn>
            <v-btn> Make transformation </v-btn>
          </v-card-actions>
        </v-card>
        <CommentsSet :photo_id="photo?.id"/>
      </v-sheet>
   
</template>

<script setup>
import { computed, ref, toRef, watchEffect } from "vue";
import useCurrentUser from "@/composables/useCurrentUser";

import CommentsSet from "./CommentsSet.vue";

const { user } = useCurrentUser();

const props = defineProps({
  photo: {
    type: Object,
    required: true,
  },
  // isLoading: Boolean
});

const photo = toRef(props, "photo");

const comments= computed(() => {
  return props?.photo?.comments;
});

const isLoading = ref(false);

// watchEffect(async () => {
//   isLoading.value = true;
//   comments.value = await getComments(photo.id);
//   isLoading.value = false;
// });

</script>
