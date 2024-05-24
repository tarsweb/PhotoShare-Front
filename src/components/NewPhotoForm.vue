<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1>New Photo</h1>
      <v-card flat class="mx-auto px-6 py-8" max-width="auto">
          <v-form v-model="form" @submit.prevent="onSubmit">
            <v-text-field 
            v-model="formData.title"
            :readonly="isLoading"
            label="Title" />
            <v-text-field label="Description" />
            <v-file-input label="File input" />
            <v-select 
            />
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

const form = ref(false);

const formData = ref({});

const isLoading = ref(false);


const onSubmit = () => {
  console.log("submit");
};
</script>
