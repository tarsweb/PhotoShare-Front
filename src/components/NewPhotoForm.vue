<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1>New Photo</h1>
      <v-card flat class="mx-auto px-6 py-8" width="500">
        <v-form v-model="form" @submit.prevent="onSubmit">
          <v-text-field
            v-model="formData.title"
            :readonly="isLoading"
            label="Title"
          />
          <v-text-field label="Description" v-model="formData.description" />
          <v-file-input label="File input" v-model="formData.file"/>
          <v-select />
          <v-btn
            :disabled="!form"
            :loading="isLoading"
            block
            color="success"
            size="large"
            type="submit"
          >
            Save
          </v-btn>
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { createPhoto } from "@/services/apiPhoto";

const form = ref(false);

const formData = ref({
  title: "",
  description: "",
  file: "",});

const isLoading = ref(false);

const onSubmit = async () => {
  console.log("submit");

  isLoading.value = true;

  createPhoto(getDataPhoto())

  isLoading.value = false;
};

const getDataPhoto = () => {
  console.log("getDataPhoto");

  const res = new FormData();
  res.append("title", formData.value.title);
  res.append("description", formData.value.description);
  res.append("file", formData.value.file);
  // res.append("tags", ["test"]);

  return res;
};
</script>
