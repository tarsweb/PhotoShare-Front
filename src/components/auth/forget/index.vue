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
          {{ error?.text }}
          <template v-slot:actions>
            <v-btn variant="text" @click="isError = false"> Close </v-btn>
          </template>
        </v-snackbar>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="true">
            <v-card flat class="mx-auto px-6 py-8" max-width="344">
              <v-card-title class="text-h6 mb-4">
                Forget password
              </v-card-title>
              <v-form
                v-model="formForgotPassword"
                @submit.prevent="onSubmitForgotPassword"
              >
                <v-text-field
                  v-model.trim="formData.login"
                  :readonly="loading"
                  :rules="rules['login']"
                  type="email"
                  placeholder="Email address"
                  class="mb-2"
                  :clearable="!loading"
                  variant="outlined"
                  density="compact"
                  prepend-inner-icon="mdi-email-outline"
                />

                <v-btn
                  :disabled="!formForgotPassword"
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
          </v-tabs-window-item>
          <v-tabs-window-item value="false">
            <v-card flat class="mx-auto px-6 py-8" max-width="344">
              <v-card-title class="text-h6 mb-4"> Reset password </v-card-title>
              <v-form
                v-model="formResetPassword"
                @submit.prevent="onSubmitResetPassword"
              >
                <v-text-field
                  v-model.trim="formDataNewPassword.new_password"
                  :readonly="isLoading"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :rules="rules['password']"
                  :append-inner-icon="
                    isPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'
                  "
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
                  v-model.trim="formDataNewPassword.confirm_password"
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
                  :disabled="!formResetPassword"
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
          </v-tabs-window-item>
        </v-tabs-window>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import useAuth from "@/composables/useAuth";

const { isLoading, error, forgotPassword, resetPassword } = useAuth();

const router = useRouter();

const formForgotPassword = ref(false);
const formResetPassword = ref(false);

//for Test
// const formData = ref({
//   login: "user@example.com",
// });
const formData = ref({
  login: "",
});

const formDataNewPassword = ref({
  reset_token: "",
  new_password: "",
  confirm_password: "",
});

const isError = ref(false);

const isPasswordVisible = ref(false);

const tab = ref(0);

const onSubmitForgotPassword = async () => {
  if (formForgotPassword.value) {
    //send backend

    forgotPassword({ email: formData.value.login })
      .then((data) => {
        formDataNewPassword.value.reset_token = data;
        tab.value = 1;
      })
      .catch((e) => {
        isError.value = true;
      });
  }
};

const onSubmitResetPassword = async () => {
  if (formResetPassword.value) {
    //send backend
    resetPassword({
      reset_token: formDataNewPassword.value.reset_token,
      new_password: formDataNewPassword.value.new_password,
      confirm_password: !isPasswordVisible.value
        ? formDataNewPassword.value.confirm_password
        : formDataNewPassword.value.new_password,
    })
      .then(() => {
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
      if (value.length < 8) return "Password length incorrect";
      return true;
    },
  ],
};
</script>
