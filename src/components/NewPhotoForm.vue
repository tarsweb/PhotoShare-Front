<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-sheet v-if="!isLoading" class="align-center" width="500">
        <v-btn
          icon="mdi-close"
          @click="$emit('close')"
          position="absolute top-0 right-0"
          variant="text"
        />
        <h1>Add New Photo</h1>
        <v-card flat class="mx-auto px-6 py-8" width="500">
          <v-form v-model="form" @submit.prevent="onSubmit">
            <v-text-field
              v-model="formData.title"
              :readonly="isLoading"
              label="Title"
              :rules="rules['title']"
              placeholder="Enter title"
              :clearable="!isLoading"
              variant="outlined"
              prepend-inner-icon="mdi-pencil-outline"
              required
            />
            <v-text-field
              v-model="formData.description"
              :readonly="isLoading"
              :rules="rules['description']"
              placeholder="Enter description"
              label="Description"
              multi-line
              :clearable="!isLoading"
              variant="outlined"
              prepend-inner-icon="mdi-pencil-outline"
              required
            />

            <div class="d-flex flex-column justify-center my-4">
              <v-img
                :src="imageUrl"
                width="50px"
                height="50px"
                class="mx-auto my-4"
                lazy-src="https://picsum.photos/id/11/10/6"
              >
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <!-- <v-file-input v-if="!formData.file"
                  v-model="formData.file"
                  :readonly="isLoading"
                  :rules="rules['file']"
                  label="File photo"
                  :clearable="!isLoading"
                  prepend-icon="mdi-camera"
                  hide-input
                  class="mx-auto my-auto"
                  @update:model-value="onFileChange"
                /> -->

                    <!-- <v-progress-circular
                  
                  indeterminate
                  color="grey-lighten-5"
                /> -->
                  </div>
                </template>
              </v-img>
            </div>
            <v-file-input
              v-model="formData.file"
              :readonly="isLoading"
              :rules="rules['file']"
              label="File photo"
              :clearable="!isLoading"
              prepend-icon="mdi-camera"
              @update:model-value="onFileChange"
              required
            />
            <!-- <v-select
            v-model="formData.tags"
            :items="tags"
            :readonly="isLoading"
            item-title="name"
            item-value="id"
            label="Tags"
            multiple
            chips
            clearable
            density="comfortable"
            prepend-inner-icon="mdi-tag"
          /> -->
            <v-text-field
              v-model="formData.tags"
              :readonly="isLoading"
              label="Tags"
              placeholder="Enter tags"
              :clearable="!isLoading"
              variant="outlined"
              prepend-inner-icon="mdi-tag"
            />
            <!-- <v-autocomplete
              v-model="formData.tags"
              :items="tags"
              :readonly="isLoading"
              item-title="name"
              item-value="id"
              label="Tags"
              multiple
              chips
              clearable
              density="comfortable"
              prepend-inner-icon="mdi-tag"/> -->
            <v-btn
              :disabled="!form"
              :loading="isLoading"
              block
              color="success"
              size="large"
              type="submit"
              prepend-icon="mdi-upload"
            >
              Upload
            </v-btn>
          </v-form>
        </v-card>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { createPhoto } from "@/services/apiPhoto";
import { getTags } from "@/services/apiTag";

const emit = defineEmits(["close"]);

const form = ref(false);

const formData = ref({
  title: "",
  description: "",
  file: null,
  tags: [],
});

const isLoading = ref(false);

const tags = ref([]);

const imageUrl = ref(null);

watchEffect( async () => {
  isLoading.value = true;
  // tags.value = await getTags();
  isLoading.value = false;
});

const createImage = (file) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    imageUrl.value = e.target.result;
  };

  reader.readAsDataURL(file);
};

const onFileChange = (file) => {
  if (!file) {
    imageUrl.value = null;
    return;
  }

  createImage(file);
};

const onSubmit = async (event) => {
  if (!form.value) return;

  isLoading.value = true;

  createPhoto(getDataForPhoto())
    .then((response) => {
      event.target.reset();
      emit("close");
    })
    .catch((e) => {})
    .finally(() => {
      isLoading.value = false;
    });
};

const getDataForPhoto = () => {
  const res = new FormData();
  res.append("title", formData.value.title);
  res.append("description", formData.value.description);
  res.append("file", formData.value.file);
  if (formData.value.tags.length) res.append("tags", formData.value.tags);
  // res.append("tags", ["test"]);

  return res;
};

const rules = {
  title: [(v) => !!v || "Title is required"],
  description: [(v) => !!v || "Description is required"],
  file: [(v) => !!v.length || "File is required"],
};
</script>
