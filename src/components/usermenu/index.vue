<template>
  <v-menu min-width="200px" rounded transition="slide-x-transition">
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar color="brown" size="large">
          <template v-if="user?.avatar">
            <v-img :src="user?.avatar" />
          </template>
          <span v-else class="text-h5">{{ user?.username }}</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <v-avatar color="brown">
            <template v-if="user?.avatar">
              <v-img :src="user?.avatar" />
            </template>
            <span v-else class="text-h5">{{ user?.username }}</span>
          </v-avatar>
          <!-- <h3>{{ user.fullName }}</h3> -->
          <p class="text-caption mt-1">
            {{ user?.email }}
          </p>
          <v-divider class="my-3"></v-divider>
          <div class="d-flex flex-column mt-2">
            <v-btn
              rounded
              variant="text"
              type="text"
              :to="{ name: 'UserProfile' }"
            >
              Edit Account
            </v-btn>
            <v-btn
              v-if="user?.role === 'ADMIN'"
              rounded
              variant="text"
              type="text"
              :to="{ name: 'Users' }"
            >
              Manage Users
            </v-btn>
          </div>
          <v-divider class="my-3"></v-divider>
          <v-btn rounded variant="text" type="text" @click="handleLogout">
            Logout
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import useAuth from "@/composables/useAuth";
import useCurrentUser from "@/composables/useCurrentUser";

const { user, getCurrentUser } = useCurrentUser();


const route = useRoute();
const router = useRouter();

const { logout } = useAuth();

// const authStore = useAuthStore()
// const user = authStore.user

const handleLogout = async () => {
  await logout();

  user.value = null;

  router.push({ name: "Login" });

  // const { requiresAuth } = route.meta;

  // if (requiresAuth) {
  //   router.push({ name: "Login" });
  // }
};
</script>
