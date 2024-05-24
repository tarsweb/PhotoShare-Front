<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-card class="fill-height pa-12" rounded>
        <v-form>
          <v-avatar class="mb-4" color="grey-darken-1" size="164" @click="isEdit = !isEdit">
            <!-- <v-icon v-if="!isEdit" icon="mdi-pencil" /> -->
            <!-- <v-img src="https://randomuser.me/api/portraits/men/78.jpg" /> -->
            <v-img :src="user.avatar" />
          </v-avatar>
          <v-text-field
            v-model="user.username"
            label="Username"
            :disabled="!isEdit"
          />
          <v-text-field
            v-model="user.email"
            label="Email"
            :disabled="!isEdit"
          />
          <!-- <v-text-field v-model="user.role" label="Full Name" disabled /> -->
          <v-select
            v-model="user.role"
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
        </v-card-actions>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  user: Object
})

const isEdit = ref(false);
</script>
