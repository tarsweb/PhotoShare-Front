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
        <v-row class="justify-center">
          <v-col cols="7" class="d-flex">
            <v-img
              :src="photo?.secure_url"
              :alt="photo?.title"
              width="300px"
              height="300px"
              class="mx-auto my-4"
              lazy-src="https://picsum.photos/id/11/10/6"
            ></v-img>
          </v-col>
          <v-col v-if="transformations?.length" cols="5" class="d-flex">
            <v-divider vertical class="mx-4"></v-divider>
            <v-sheet class="d-flex flex-column" width="100%">
              <v-badge
                color="green"
                :content="transformations.length"
                class="d-flex justify-center align-center my-6 mt-4"
                inline
              >
                <h3 class="text-center">Transformations</h3>
              </v-badge>

              <v-carousel
                v-if="transformations?.length"
                :show-arrows="transformations?.length > 1"
                height="300px"
                hide-delimiter-background
                hide-delimiters
              >
                <v-carousel-item
                  v-for="transformation in transformations"
                  :key="transformation.id"
                  class="align-center text-center fill-height cursor-pointer"
                  height="150px"
                  position="relative"
                >
                  <v-dialog>
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-img
                        :src="transformation.secure_url"
                        :alt="transformation.title"
                        v-bind="activatorProps"
                        pointer="true"
                      ></v-img>
                      <v-img
                        v-bind="activatorProps"
                        :src="transformation?.qr_code?.secure_url"
                        :alt="transformation.title"
                        width="64"
                        height="64"
                        class="position-absolute top-0 right-0 fill=white"
                      ></v-img>
                    </template>
                    <template v-slot:default="{ isActive }">
                      <v-container class="fill-height">
                        <v-responsive class="align-center text-end">
                          <v-sheet class="mx-auto" max-width="500px">
                            <v-img
                              :src="transformation?.qr_code?.secure_url"
                              :alt="transformation.title"
                              style="background-color: white"
                            />
                            <v-btn
                              variant="outlined"
                              color="green"
                              text="Close"
                              class="mx-4 my-6"
                              @click="isActive.value = false"
                            ></v-btn>
                          </v-sheet>
                        </v-responsive>
                      </v-container>
                    </template>
                  </v-dialog>
                </v-carousel-item>
                <v-carousel-controls class="d-flex justify-center">
                </v-carousel-controls>
              </v-carousel>
            </v-sheet>
          </v-col>
        </v-row>

        <v-card-text>
          {{ photo?.description }}
        </v-card-text>
      </v-card-item>
      <v-card-actions>
        <v-dialog v-if="user?.email === photo?.owner?.email">
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
              @addTransformation="
                isActive.value = false;
                handleUpdateData();
              "
            />
          </template>
        </v-dialog>
        <v-spacer></v-spacer>
        <v-rating
          v-if="isAuth && photo?.owner?.email !== user?.email"
          v-model="raiting"
          color="amber"
          density="compact"
          @update:model-value="onUpdateRaiting"
        ></v-rating>
      </v-card-actions>
    </v-card>
    <CommentsSet :photo_id="photo?.id" />
  </v-sheet>
</template>

<script setup>
import { computed, inject, onMounted, ref, toRef, watchEffect } from "vue";
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

const emit = defineEmits(["updateData"]);

const photo = toRef(props, "photo");
const transformations = inject("transformations");

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

const handleUpdateData = () => {
  console.log("handleUpdateData");
  emit("updateData");
};
</script>
