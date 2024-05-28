<template>
  <v-container>
    <v-responsive class="align-center text-center fill-height">
      <h1>Transform</h1>
      <v-card>
        
        <v-card-item class="d-flex flex-column">
          <v-img
            :src="imageUrl"
            width="50px"
            height="50px"
            class="mx-auto my-4"
            lazy-src="https://picsum.photos/id/11/10/6"
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height"></div>
            </template>
          </v-img>
        <!-- </v-card-item>
      
    <v-card-item> -->
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-btn
            type="button"
            :disabled="!form"
            :loading="isLoading"
            block
            color="success"
            size="large"
            prepend-icon="mdi-upload"
            @click="onPreview"
          >
            Preview
          </v-btn>
  
          <v-btn
            type="submit"
            :disabled="!form"
            :loading="isLoading"
            block
            color="success"
            size="large"
            prepend-icon="mdi-upload"
          >
            Upload
          </v-btn>

        <v-text-field
          v-model.trim="formData.radius"
          :readonly="isLoading"
          :clearable="!isLoading"
          :rules="rules['radius']"
          placeholder="Enter radius"
          class="mb-2"
          variant="outlined"
          density="compact"
          label="Radius"
        />

        <v-text-field
          v-model.trim="formData.angle"
          :readonly="isLoading"
          :clearable="!isLoading"
          :rules="rules['angle']"
          placeholder="Enter angle"
          class="mb-2"
          variant="outlined"
          density="compact"
          label="Angle"
        />

        <v-text-field
          v-model.trim="formData.aspect_ratio"
          :readonly="isLoading"
          :clearable="!isLoading"
          :rules="rules['aspect_ratio']"
          placeholder="Enter aspect ratio"
          class="mb-2"
          variant="outlined"
          density="compact"
          label="Aspect ratio"
        />

        <v-text-field
          v-model.trim="formData.crop"
          :readonly="isLoading"
          :clearable="!isLoading"
          :rules="rules['crop']"
          placeholder="Enter crop"
          class="mb-2"
          variant="outlined"
          density="compact"
          label="Crop"
        />

        <v-text-field
          v-model.trim="formData.background"
          :readonly="isLoading"
          :clearable="!isLoading"
          :rules="rules['background']"
          placeholder="Enter background"
          class="mb-2"
          variant="outlined"
          density="compact"
          label="Background"
        />

        <v-text-field
          v-model.trim="formData.width"
          :readonly="isLoading"
          :clearable="!isLoading"
          :rules="rules['width']"
          placeholder="Enter width"
          class="mb-2"
          variant="outlined"
          density="compact"
          label="Width"
        />

        <v-text-field
          v-model.trim="formData.height"
          :readonly="isLoading"
          :clearable="!isLoading"
          :rules="rules['height']"
          placeholder="Enter height"
          class="mb-2"
          variant="outlined"
          density="compact"
          label="Height"
        />

        <v-text-field
          v-model.trim="formData.border"
          :readonly="isLoading"
          :clearable="!isLoading"
          :rules="rules['border']"
          placeholder="Enter border"
          class="mb-2"
          variant="outlined"
          density="compact"
          label="Border"
        />

        <v-text-field
          v-model.trim="formData.gravity"
          :readonly="isLoading"
          :clearable="!isLoading"
          :rules="rules['gravity']"
          placeholder="Enter gravity"
          class="mb-2"
          variant="outlined"
          density="compact"
          label="Gravity"
        />

        <v-text-field
          v-model.trim="formData.opacity"
          :readonly="isLoading"
          :clearable="!isLoading"
          :rules="rules['opacity']"
          placeholder="Enter opacity"
          class="mb-2"
          variant="outlined"
          density="compact"
          label="Opacity"
        />

        <v-text-field
          v-model.trim="formData.quality"
          :readonly="isLoading"
          :clearable="!isLoading"
          :rules="rules['quality']"
          placeholder="Enter quality"
          class="mb-2"
          variant="outlined"
          density="compact"
          label="Quality"
        />

        <v-text-field
          v-model.trim="formData.transformation"
          :readonly="isLoading"
          :clearable="!isLoading"
          :rules="rules['transformation']"
          placeholder="Enter transformation"
          class="mb-2"
          variant="outlined"
          density="compact"
          label="Transformation"
        />

        <v-text-field
          v-model.trim="formData.zoom"
          :readonly="isLoading"
          :clearable="!isLoading"
          :rules="rules['zoom']"
          placeholder="Enter zoom"
          class="mb-2"
          
          variant="outlined"
          density="compact"
          label="Zoom"
        />

      </v-form>
     </v-card-item>
    </v-card> 
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import {
  createTransformedPhoto,
  saveTransformedPhoto,
} from "@/services/apiPhoto";

const emit = defineEmits(["close"]);

const props = defineProps({
  photo_id: Number,
//   isActive: Boolean,
});

const imageUrl = ref("");

const form = ref(false);

const formData = ref({
  radius: "20:80",
  angle: -20,
  aspect_ratio: "1.5",
  crop: "fit",
  background: "red",
  width: 200,
  height: 200,
  border: "5px_solid_red",
  gravity: "north",
  opacity: 30,
  quality: "80",
  transformation: "vignette_angle",
  zoom: "1.2",
});

const isLoading = ref(false);

const rules = {
  radius: [(v) => !!v || "Radius is required"],
  angle: [(v) => !!v || "Angle is required"],
  aspect_ratio: [(v) => !!v || "Aspect ratio is required"],
  crop: [(v) => !!v || "Crop is required"],
  background: [(v) => !!v || "Background is required"],
  width: [(v) => !!v || "Width is required"],
  height: [(v) => !!v || "Height is required"],
  border: [(v) => !!v || "Border is required"],
  gravity: [(v) => !!v || "Gravity is required"],
  opacity: [(v) => !!v || "Opacity is required"],
  quality: [(v) => !!v || "Quality is required"],
  transformation: [(v) => !!v || "Transformation is required"],
  zoom: [(v) => !!v || "Zoom is required"],
};

const onPreview = async () => { 
  createTransformedPhoto(props.photo_id, getTransformData()).then((data) => {
    console.log(data);
    imageUrl.value = data;
    // emit("close");
   }).catch((e) => {
    console.log(e);
   })
};

const onSubmit = () => {
  console.log(formData.value);
};

const getTransformData = () => {
  return Object.entries(formData.value).reduce(
    (acc, [k, v]) => (!!v ? ((acc[k] = v), acc) : acc),
    {}
  );
};
</script>
