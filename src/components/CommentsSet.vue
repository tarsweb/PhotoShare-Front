<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1>Comments</h1>
      <v-data-iterator :items="comments" :items-per-page="5">
        <template v-slot:default="{ items }">
          <template v-for="item in items" :key="item.id">
            <v-card variant="outlined" class="my-2" сolor="primary">
              <template v-slot:prepend>
                <v-avatar size="32">
                  <v-img
                    v-if="item.raw.user.avatar"
                    :src="item.raw.user.avatar"
                    :alt="item.raw.user.username"
                  />
                </v-avatar>
                <span class="ms-4">{{ item.raw.user.username }}</span>
              </template>
              <template v-slot:append>
                <v-chip color="primary">
                  {{ getDateFormat(item.raw.created_at) }}</v-chip
                >
              </template>
              <v-card-text>
                <v-textarea
                  v-model="item.raw.comment"
                  variant="outlined"
                  :rows="getCountRow(item.raw.comment)"
                  disabled
                  no-resize
                ></v-textarea>
              </v-card-text>
            </v-card>
          </template>
        </template>
        <template v-slot:footer="{ pageCount, prevPage, nextPage, setPage }">
          <v-pagination
            v-if="comments?.length && pageCount > 1"
            :length="pageCount"
            :total-visible="5"
            rounded="circle"
            @update:model-value="setPage"
            @prev="prevPage"
            @next="nextPage"
          ></v-pagination>
        </template>
      </v-data-iterator>
      <div>
        <v-divider class="my-4"></v-divider>
        <CommentForm
          :title="'Add comment'"
          :photo_id="photo_id"
          @sendComment="handleSendComment"
        />
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
// import CommentForm from "./CommentForm.vue";
import { getComments } from "@/services/apiComment";

const props = defineProps({
  photo_id: {
    type: Number,
    required: true,
  },
});

const comments = ref([]);
const isLoading = ref(false);

const getDataComments = async () => {
  isLoading.value = true;
  const getDataComments = await getComments(props.photo_id);
  comments.value = getDataComments;
  isLoading.value = false;
};

watchEffect(async () => {
  getDataComments();
});

const getDateFormat = computed(() => {
  return (date) => {
    const dataTime = date.split(".")[0].split("T");
    return dataTime[0] + " " + dataTime[1];
  };
});

const getCountRow = computed(() => {
  return (comments) => {
    if (comments.length < 80) return 1;
    return Math.floor(comments.length / 80);
  };
});

const handleSendComment = async () => {
  getDataComments();
};
</script>
