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
          </div>  -->
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
              :rules="rules['login']"
              type="email"
              placeholder="Email address"
              prepend-inner-icon="mdi-email-outline"
              class="mb-2"
              :clearable="!isLoading"
              variant="outlined"
              density="compact"
              label="E-mail"
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
              Sign In
            </v-btn>
          </v-form>

          <v-btn
            variant="text"
            :to="{ name: 'ForgotPassword' }"
            type="link"
            class="mt-4 text-subtitle-2"
          >
            Forget password
          </v-btn>
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

const { login } = useAuth();
const { isLoading, error, getCurrentUser } = useCurentUser();

const router = useRouter();
const form = ref(false);

// for test
// const formData = ref({
//   username: "user@example.com",
//   password: "",
// });
const formData = ref({
  username: "",
  password: "",
});

const isPasswordVisible = ref(false);
const isError = ref(false);

const onSubmit = async () => {
  if (form.value) {
    //send backend
    login(getUserCredentials())
      .then(() => {
        console.log("login");
        getCurrentUser();
        router.push({ name: "Home" });
      })
      .catch((e) => {
        isError.value = true;
      });
  }
};

const rules = {
  login: [
    (value) => {
      if (!value) return "Login is required";
      return true;
    },
    (value) => {
      if (value.length < 2) return "Length login error";
      return true;
    },
  ],
  password: [
    (value) => {
      if (!value) return "Password is required";
      return true;
    },
    (value) => {
      if (value.length < 4) return "Password length incorrect";
      return true;
    },
  ],
};

const getUserCredentials = () => { 
  const result = new FormData();
  result.append("username", formData.value.username);
  result.append("password", formData.value.password);
  return result;
};


</script>
