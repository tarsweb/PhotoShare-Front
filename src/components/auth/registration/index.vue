<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-sheet class="fill-height pa-12" rounded>
        <v-snackbar
          v-model="isError"
          location="right top"
          color="error"
          transition="slide-x-transition"
          eager
          vertical
          :offset="'10000'"
        >
          <!-- <div class="text-subtitle-1 pb-2">
            {{ Error.title }}
          </div> -->
          {{ error?.text }}
          <template v-slot:actions>
            <v-btn variant="text" @click="isError = false"> Close </v-btn>
          </template>
        </v-snackbar>
        <v-card flat class="mx-auto px-6 py-8" max-width="344">
          <v-form v-model="form" @submit.prevent="onSubmit">
            <v-text-field
              v-model.trim="formData.username"
              :readonly="isLoading"
              :rules="rules['name']"
              type="text"
              placeholder="Your name"
              class="mb-2"
              :clearable="!isLoading"
              variant="outlined"
              density="compact"
              label="Username"
            />
            <v-text-field
              v-model.trim="formData.email"
              :readonly="isLoading"
              :rules="rules['email']"
              type="email"
              placeholder="Email address"
              class="mb-2"
              :clearable="!isLoading"
              variant="outlined"
              density="compact"
              label="Email"
              prepend-inner-icon="mdi-email-outline"
            />
            <v-text-field
              v-model.trim="formData.password"
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
              label="Password"
              placeholder="Enter your password"
            />
            <v-btn
              :disabled="!form"
              :loading="isLoading"
              block
              color="success"
              size="large"
              type="submit"
            >
              Register
            </v-btn>
          </v-form>
        </v-card>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import useAuth from "@/composables/useAuth";
import useCurentUser from "@/composables/useCurrentUser";

const router = useRouter();

const { signUp } = useAuth();
const { isLoading, error } = useCurentUser();

const form = ref(false);

// for test
// const formData = ref({ username: "Test", email: "user@example.com", password: "testpass" });
const formData = ref({ username: "", email: "", password: "" });

const isError = ref(false);

const isPasswordVisible = ref(false);

const onSubmit = async () => {
  if (form.value) {
    //send backend
    signUp(getFormData())
      .then(() => {
        router.push({ name: "Home" });
      })
      .catch((e) => {
        isError.value = true;
      });
  }
};

const rules = {
  name: [
    (value) => {
      if (!value) return "Name is required";
      return true;
    },
  ],
  email: [
    (value) => {
      if (!value) return "Email is required";
      return true;
    },
  ],
  password: [
    (value) => {
      if (!value) return "Password is required";
      return true;
    },
  ],
};

const getFormData = () => {
  // console.log(Object.entries(formData.value).reduce((acc, [k, v]) => (!!v ? (acc[k]=v, acc) : acc), {}));
  return Object.entries(formData.value).reduce(
    (acc, [k, v]) => (!!v ? ((acc[k] = v), acc) : acc),
    {}
  );
};
</script>
