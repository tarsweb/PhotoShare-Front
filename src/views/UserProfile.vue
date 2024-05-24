<template>
  <v-navigation-drawer expand-on-hover  rail>
    <v-list-item
      :title= "user.username"
    >
      <template v-slot:prepend>
        <v-avatar color="brown">
          <template v-if="user?.avatar">
            <v-img :src="user?.avatar" />
          </template>
          <span v-else class="text-h5">{{ user.username }}</span>
        </v-avatar>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Photo"
        value="home"
        :active="drawer === 'home'"
        @click="change('home')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-forum"
        title="About"
        value="about"
        :active="drawer === 'about'"
        @click="change('about')"
      ></v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn icon="mdi-logout"> </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
  <UserProfile :user="user" v-if="drawer === 'about'"/>
  <UserData v-if="drawer === 'home'"/>
</template>

<script setup>
import { ref } from "vue";
import useCurentUser from "@/composables/useCurrentUser";

import UserProfile from "@/components/users/Profile.vue";
import UserData from "@/components/users/UserData.vue";

const { user } = useCurentUser();

const drawer = ref("about");

const change = (item) => {
  console.log(drawer.value);
  drawer.value = item;
};
</script>
