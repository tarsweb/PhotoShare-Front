<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-card flat class="mx-auto px-6 py-8" width="500">
        <v-btn icon="mdi-close" @click="$emit('close')" position="absolute top-0 right-0" variant="text"/>
        <v-card-title class="text-h6 mb-4"> Reset password </v-card-title>
        <v-form v-model="form" @submit.prevent="onSubmit">
          <v-text-field
            v-model.trim="formData.new_password"
            :readonly="isLoading"
            :type="isPasswordVisible ? 'text' : 'password'"
            :rules="rules['password']"
            :append-inner-icon="isPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="isPasswordVisible = !isPasswordVisible"
            prepend-inner-icon="mdi-lock-outline"
            class="mb-4"
            :clearable="!isLoading"
            autocomplete="on"
            variant="outlined"
            density="compact"
            label="New password"
            placeholder="Enter your new password"
          />
          <v-text-field
            v-if="!isPasswordVisible"
            v-model.trim="formData.confirm_password"
            :readonly="isLoading"
            type="password"
            :rules="rules['password']"
            prepend-inner-icon="mdi-lock-outline"
            class="mb-4"
            :clearable="!isLoading"
            autocomplete="on"
            variant="outlined"
            density="compact"
            label="Confirm password"
            placeholder="Confirm your new password"
          />
          <v-btn
            :disabled="!form"
            :loading="isLoading"
            block
            color="success"
            size="large"
            type="submit"
          >
            Send
          </v-btn>
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { resetPassword } from "@/services/apiUser";

const emit = defineEmits(["close"]);

const form = ref(false);

const formData = ref({
  new_password: "",
  confirm_password: "",
});

const isPasswordVisible = ref(false);

const isLoading = ref(false);

const onSubmit = async (event) => {
  if (form.value) {

    isLoading.value = true;

    //send backend
    resetPassword({
      new_password: formData.value.new_password,
      confirm_password: !isPasswordVisible.value
        ? formData.value.confirm_password
        : formData.value.new_password,
    })
      .then((response) => {
        console.log("response", response);
        event.target.reset();
        emit("close");
        // router.push({ name: "Home" });
      })
      .catch((e) => {
        // isError.value = true;
      })
      .finally(() => {
        isLoading.value = false;
      });

    
  }
};

const rules = {
  password: [
    (v) => !!v || "Password is required",
    (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
  ],
};
</script>
