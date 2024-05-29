<template variant="outlined">
  <v-sheet class="align-center">
    <v-snackbar
      v-model="isError"
      location="right top"
      color="error"
      transition="slide-x-transition"
      eager
      vertical
      :offset="'10000'"
    >
      {{ error?.text }}
      <template v-slot:actions>
        <v-btn variant="text" @click="isError = false"> Close </v-btn>
      </template>
    </v-snackbar>
    <v-card-title class="text-left">{{ title }}</v-card-title>
    <v-form v-model="form" variant="outlined" @submit.prevent="onSubmit">
      <v-textarea
        v-model.trim="formData.comment"
        label="Comment"
        variant="outlined"
        placeholder="Enter comment"
        :disabled="isLoading"
        :rules="rules['comment']"
        rows="2"
      ></v-textarea>
      <div class="d-flex">
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!form"
          :loading="isLoading"
          color="success"
          size="large"
          type="submit"
          prepend-icon="mdi-send"
          >Send
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref, toRefs } from "vue";
import { createComment, updateComment } from "@/services/apiComment";

const props = defineProps({
  title: String,
  photo_id: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["sendComment"]);

const form = ref(false);
const isLoading = ref(false);

const isError = ref(false);
const error = ref(null);

const formData = ref({ comment: "" });

const { photo_id } = toRefs(props, "photo_id");

const onSubmit = async (event) => {
  if (!form.value) return;

  isLoading.value = true;

  //send backend
  createComment({
    comment: formData.value.comment,
    photo_id: photo_id.value,
  })
    .then((result) => {
      event.target.reset();
      emit("sendComment");
    })
    .catch((e) => {
      isError.value = true;
      error.value = {
        type: "error",
        title: "Error",
        text:
          e?.response?.data?.message || e?.response?.data?.detail || e.message,
      };
    })
    .finally(() => {
      isLoading.value = false;
    });
};

const rules = {
  comment: [(v) => !!v || "Comment is required"],
};
</script>
