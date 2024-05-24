<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-sheet v-if="!isLoading" class="align-center">
        <!-- <v-row align="center" justify="center" dense>
          <v-col cols="1" md="3">
            <v-card v-for="photo in photos" :key="photo.id">
              <v-img :src="photo.secure_url" height="200px"></v-img>
              <v-card-title>{{ photo.title }}</v-card-title>
            </v-card>
          </v-col>
        </v-row> -->

        <v-data-iterator :items="photos" :items-per-page="6">
          <template v-slot:default="{ items }">
            <v-row>
              <v-col
                v-for="item in items"
                :key="item.id"
                cols="auto"
                class="mx-auto my-12"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card
                    lg="4"
                    :elevation="14"
                    :title="item.raw.title"
                    v-bind:="props"
                  >
                    <template v-slot:append>
                      <v-avatar size="32">
                        <v-img
                          v-if="item.raw.owner.avatar"
                          :alt="item.raw.owner.username"
                          :src="item.raw.owner.avatar"
                        ></v-img>
                        <span v-else class="text-h5">{{
                          item.raw.user?.username
                        }}</span>
                      </v-avatar>
                    </template>

                    <v-card-text>
                      <div class="px-4 mb-2">
                        <v-chip v-for="tag in item.raw.tags" :key="tag.id">
                          {{ tag.name }}
                        </v-chip>
                      </div>
                    </v-card-text>

                    <v-card-item>
                      <v-img
                        :src="item.raw.secure_url"
                        :alt="item.raw.title"
                        width="250px"
                        height="300px"
                      ></v-img>
                      <v-expand-transition>
                        <!-- <v-card
                          v-show="show"
                          class="position-absolute w-100"
                          height="100%"
                          style="bottom: 0"
                        >
                          <v-card-text class="pb-0">
                            <p class="text-h4">Origin</p>

                            <p class="text-medium-emphasis">
                              late 16th century (as a noun denoting a place where
                              alms were distributed): from medieval Latin
                              eleemosynarius, from late Latin eleemosyna ‘alms’,
                              from Greek eleēmosunē ‘compassion’

                              {{ item.raw.description }}
                            </p>
                          </v-card-text>

                          <v-card-actions class="pt-0">
                            <v-btn
                              color="teal-accent-4"
                              text="Close"
                              variant="text"
                              @click="show = false"
                            ></v-btn>
                          </v-card-actions>
                        </v-card> -->
                      </v-expand-transition>
                    </v-card-item>

                    <v-card-text>
                      <div class="d-flex">
                        <v-rating
                          :model-value="3"
                          color="amber"
                          density="compact"
                          size="small"
                          half-increments
                          readonly
                        ></v-rating>
                        <v-spacer></v-spacer>
                        <div class="text-grey ms-4">
                          <v-badge
                            color="green"
                            :content="item.raw.comments.length"
                          >
                            <v-icon small>mdi-comment</v-icon>
                          </v-badge>
                          <!-- <span class="text-body-2 ms-1">{{ item.raw.comments.length}}</span> -->
                        </div>
                      </div>
                    </v-card-text>

                    <!-- <v-spacer></v-spacer> -->

                    <v-card-actions>
                      <!-- <v-spacer></v-spacer> -->

                      <v-btn
                        color="medium-emphasis"
                        icon="mdi-heart"
                        size="small"
                      ></v-btn>

                      <v-btn
                        color="medium-emphasis"
                        icon="mdi-bookmark"
                        size="small"
                      ></v-btn>

                      <v-btn
                        color="medium-emphasis"
                        icon="mdi-share-variant"
                        size="small"
                      ></v-btn>

                      <v-spacer></v-spacer>

                      <!-- <v-btn color="orange-lighten-2" text="Explore"></v-btn> -->

                      <v-btn
                        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                        @click="show = !show"
                      ></v-btn>
                    </v-card-actions>
                    <v-overlay
                      :model-value="isHovering"
                      class="align-center justify-center"
                      contained
                    >
                      <v-card class="text-center">
                        <v-card-text>
                          <p class="text-h4">{{ item.raw.description }}</p>
                        </v-card-text>
                      </v-card>
                      <v-btn variant="flat" @click="owerlay = true">See more info</v-btn>
                    </v-overlay>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </template>
          <template v-slot:footer="{ pageCount, prevPage, nextPage, setPage }">
            <!-- <div class="mt-10"> -->
            <v-pagination
              :length="pageCount"
              :total-visible="5"
              rounded="circle"
              @update:model-value="setPage"
              @prev="prevPage"
              @next="nextPage"
            ></v-pagination>
            <!-- </div> -->
          </template>
        </v-data-iterator>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  isLoading: Boolean,
  photos: Array,
  owerlay: Boolean
});

const router = useRouter();

const show = ref(false);

const openPhoto = (id) => {
  console.log(id);
  router.push({ name: "PhotoDetail", params: { photo_id: id } });
};

const onFocus = () => {
  console.log("focus");
  show.value = true;
};
</script>
