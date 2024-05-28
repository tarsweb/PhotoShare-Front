import { ref } from "vue";

import { getCurrentUser as apiUserGetCurrentUser } from "@/services/apiUser";

const isAuth = ref(false);
const isLoading = ref(false);
const error = ref(null);

const user = ref(null);

export default function useCurrentUser() {
  function getCurrentUser() {
    isAuth.value = false;
    isLoading.value = false;
    error.value = null;
    
    apiUserGetCurrentUser()
      .then((data) => {
        user.value = data;
        isAuth.value = true;
      })
      .catch((e) => {
        error.value = {
          type: "error",
          title: "Error",
          text:
            e?.response?.data?.message || e?.response?.data?.detail || e.message,
        };
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  return {
    isAuth,
    isLoading,
    error,
    getCurrentUser,
    user,
  };
}
