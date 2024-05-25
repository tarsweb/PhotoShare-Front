<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-card class="fill-height pa-12" rounded>
        <v-row align="center" no-gutters>
          <v-col cols="8">
            <v-form>
              <v-text-field
                v-model="userProfile.username"
                label="Username"
                :disabled="!isEdit"
              />
              <v-text-field
                v-model="userProfile.email"
                label="Email"
                :disabled="!isEdit"
              />
              <v-select
                v-model="userProfile.role"
                label="Role"
                :disabled="!isEdit"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
              />
            </v-form>
          </v-col>
          <v-col cols="4" class="d-flex flex-column align-end">
            <!-- <div class="d-grid justify-center align-end"> -->
            <v-file-input
              v-model="newAvatar"
              prepend-icon="mdi-camera"
              outlined
              dense
              hide-input
              @update:model-value="onFileChange"
              class="d-inline"
            />
            <v-avatar
              class="mb-4"
              color="grey-darken-1"
              size="164"
              position="relative"
            >
              <v-img :src="userProfile.avatar" />
            </v-avatar>
            <!-- </div> -->
          </v-col>
        </v-row>

        <v-card-actions>
          <v-btn
            color="primary"
            type="button"
            variant="outlined"
            @click="isEdit = true"
            >Edit</v-btn
          >
          <v-btn
            color="primary"
            type="button"
            variant="outlined"
            @click="isEdit = false"
            >Cancel</v-btn
          >
          <v-btn
            color="primary"
            type="submit"
            variant="outlined"
            @click="isEdit = false"
            >Save</v-btn
          >
          <v-spacer />
          <v-btn
            color="primary"
            type="button"
            variant="outlined"
            prepend-icon="mdi-lock-reset"
            @click="overlay = true"
            >Reset Password</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-responsive>
  </v-container>
  <v-overlay v-model="overlay" scrim="black">
    <resetPasswordForm @close="overlay = false" />
  </v-overlay>
</template>

<script setup>
import { ref } from "vue";
import { udatedAvatar } from "@/services/apiUser";
import resetPasswordForm from "@/components/users/ResetPasswordForm.vue";

const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => ({ username: "", email: "", role: "", avatar: "" }),
  },
});

const userProfile = ref(props.user);

const isEdit = ref(false);
const newAvatar = ref(null);
const newAvatarUrl = ref(null);

const overlay = ref(false);

const createImage = (file) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    newAvatarUrl.value = e.target.result;
  };

  reader.readAsDataURL(file);
};

const onFileChange = async (file) => {
  if (!file) {
    return;
  }

  udatedAvatar(file).then((response) => {
    userProfile.value = response;
  });
};

</script>
