<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="300" src="@/assets/logo.svg" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Photo Shape</h1>

      <div class="text-body-1 font-weight-light">All photos are yours</div>

      <v-divider class="my-4"></v-divider>

      <v-btn
        class="my-2"
        color="primary"
        href="https://rest-api-kbuhantsev-ca83d110.koyeb.app/docs"
        min-width="164"
        outlined
        target="_blank"
        >REST API Docs
      </v-btn>
      <div class="d-flex align-center justify-center">
      <v-btn
        class="my-2"
        color="primary"
        href="https://github.com/kbuhantsev/PhotoShare"
        min-width="164"
        outlined
        target="_blank"
        >Get it on GitHub
      </v-btn>


      </div>

      <!-- <v-divider class="my-4"></v-divider>


      <v-btn type="button" @click="TestCreate">TestCreate</v-btn> -->
    </v-responsive>
  </v-container>
</template>

<script setup>
import { createPhoto } from "@/services/apiPhoto";

const TestCreate = async () => {
  console.log("TestCreate");

  const formData = new FormData();
  formData.append("title", "test");
  formData.append("description", "test");
  formData.append("file", "test");
  formData.append("tags", ["test"]);
  const res = await create_photo(formData);
};
</script>
