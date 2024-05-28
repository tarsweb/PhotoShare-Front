<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1>Users</h1>
      <v-sheet v-if="!isLoading" class="align-center">
        <!-- <v-card v-for="user in users" :key="user.email" class="d-flex flex-column mx-auto my-12" :title="user.username">
                    <v-card-subtitle>{{ user.email }}</v-card-subtitle>
                    <v-card-text>{{ user.role }}</v-card-text>
                    <v-card-text>{{ user.created_at }}</v-card-text>
                    <v-card-text>{{ user.updated_at }}</v-card-text>
                    <v-card-actions>
                        <v-btn :to="{ name: 'UserProfile', params: { id: user.id } }">Edit</v-btn>
                    </v-card-actions>
                </v-card> -->

        <v-data-iterator :items="users" :items-per-page="6" class="mx-12">
          <template v-slot:default="{ items }">
            <v-row>
              <v-col
                v-for="item in items"
                :key="item.id"
                cols="auto"
                class="mx-auto my-auto"
              >
                <v-card
                  lg="4"
                  :elevation="14"
                  
                  :title="item.raw.username"
                  :prepend-avatar="item.raw.avatar"
                >
                  <template v-slot:append>
                    <v-chip color="primary"> {{ item.raw.role }}</v-chip>
                  </template>
                  <v-card-item>
                    <!-- <v-row no-gutters>
                      </v-col>
                      <v-col>
                        <v-list-item>sadsas</v-list-item>
                        <v-list-item>sadsas</v-list-item>
                        <v-list-item>sadsas</v-list-item>
                      </v-col>
                      <v-col>
                        <v-list-item>sadsas</v-list-item>
                      </v-col>
                    </v-row> -->
                    <!-- <v-list color="transparent" density="compact">
                      <v-list-item title= Email :prepend-icon="item.raw.avatar">{{ item.raw.email }}</v-list-item>
                    </v-list> -->
                    <v-list-item prepend-icon="mdi-email" title="Email">
                      <v-list-item-title>{{
                        item.raw.email
                      }}</v-list-item-title>
                    </v-list-item>

                    <v-list-item prepend-icon="mdi-calendar" title="Created">
                      <v-list-item-title>{{
                        item.raw.created_at.split("T")[0]
                      }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-calendar" title="Update">
                      <v-list-item-title>{{
                        item.raw.updated_at.split("T")[0]
                      }}</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item prepend-icon="mdi-camera" title="Photos">
                      <v-list-item-title>{{
                        item.raw.count_photos
                      }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-comment" title="Comment">
                      <v-list-item-title>{{
                        item.raw.count_comments
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-card-item>
                  <v-card-actions>
                    <v-btn
                      :to="{ name: 'UserProfile', params: { id: item.id } }"
                      >Edit
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                      :icon="item.raw.blocked ? 'mdi-lock' : 'mdi-lock-open'"
                      :color="item.raw.blocked ? 'error' : 'success'"
                      @click="
                        oClickBlockUser(item.raw.email, !item.raw.blocked)
                      "
                    />
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </template>
          <template v-slot:footer="{ pageCount, prevPage, nextPage, setPage }">
            <div v-if="pageCount > 1" class="mt-10">
              <v-pagination
                :length="pageCount"
                :total-visible="5"
                rounded="circle"
                @update:model-value="setPage"
                @prev="prevPage"
                @next="nextPage"
              ></v-pagination>
            </div>
          </template>
        </v-data-iterator>
      </v-sheet>
      <v-progress-circular v-else indeterminate :size="88" :width="9"></v-progress-circular>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { blockUser, getAllUsers } from "@/services/apiUser";

const isLoading = ref(false);
const users = ref([]);

const getDataUsers = async () => {
  const result = await getAllUsers();
  users.value = result;
  console.log("users.vue", result);
};

watchEffect(async () => {
  isLoading.value = true;

  getDataUsers();

  isLoading.value = false;
});

const oClickBlockUser = async (email, blocked) => {
  await blockUser({ email, blocked });
  getDataUsers();
};
</script>
