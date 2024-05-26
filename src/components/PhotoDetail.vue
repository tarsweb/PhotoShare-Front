<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
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
              
              <!-- <span>{{ photo?.owner }}</span> -->
            </v-tooltip>
          </template>
          <v-chip v-for="tag in photo?.tags" :key="tag">{{ tag }}</v-chip>
          <v-card-item>
            <v-img
              :src="photo.secure_url"
              :alt="photo.title"
              width="250px"
              height="300px"
            ></v-img>
            <v-card-text class="text-h5">
              {{ photo?.description }}
            </v-card-text>
          </v-card-item>
          <v-card-item>
            <v-list-item v-for="comment in photo?.comments" :key="comment">
              <v-list-item-title>{{ comment }}</v-list-item-title>
            </v-list-item>
          </v-card-item>

          <v-card-actions>
            <v-btn
              color="primary"
              variant="outlined"
            >
             Details
            </v-btn>
            <v-btn>
              Make transformation
            </v-btn>
          </v-card-actions>
        </v-card>
       
        {{ photo }}
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import useCurrentUser from "@/composables/useCurrentUser";
import { getPhoto } from "@/services/apiPhoto";

const { user } = useCurrentUser();

defineProps({
  photo: {
    type: Object,
    required: true,
  },
  // isLoading: Boolean
});

// const currentPhoto = ref(props.photo);

const isLoading = ref(false);
</script>
