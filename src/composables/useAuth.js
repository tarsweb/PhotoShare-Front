// https://github.com/manuelLandreau/use-auth
import {
  signUp as authSignUp,
  login as authLogin,
  logout as authLogout,
  forgotPassword as authForgotPassword,
  resetPassword as authResetPassword,
} from "@/services/auth";

import useCurentUser from "@/composables/useCurrentUser";

const { isAuth, isLoading, error } = useCurentUser();

export default function useAuth() {
  async function signUp(data) {
    isLoading.value = true;
    error.value = null;

    try {
      await authSignUp(data);
    } catch (e) {
      error.value = {
        type: "error",
        title: "Error",
        text:
          e?.response?.data?.message || e?.response?.data?.detail || e.message,
      };
      return Promise.reject(e);
    } finally {
      isLoading.value = false;
    }
  }

  async function login(credentials) {
    isLoading.value = true;
    error.value = {};

    try {
      await authLogin(credentials);
      isAuth.value = true;
    } catch (e) {
      error.value = {
        type: "error",
        title: "Error",
        text:
          e?.response?.data?.message || e?.response?.data?.detail || e.message,
      };
      isAuth.value = false;
      return Promise.reject(e);
    } finally {
      isLoading.value = false;
    }
  }

  async function logout() {
    isLoading.value = true;

    try {
      await authLogout();
      isAuth.value = false;
    } catch (e) {
      error.value = {
        type: "error",
        title: "Error",
        text: "fdghdlkfshgfd",
      };
    } finally {
      isLoading.value = false;
    }
  }

  async function forgotPassword(data) {
    isLoading.value = true;

    try {
      const result = await authForgotPassword(data);
      return result;
    } catch (e) {
      error.value = {
        type: "error",
        title: "Error",
        text:
          e?.response?.data?.message || e?.response?.data?.detail || e.message,
      };

      return Promise.reject(e);
    } finally {
      isLoading.value = false;
    }
  }

  async function resetPassword() {}

  return {
    isLoading,
    error,
    signUp,
    login,
    logout,
    forgotPassword,
    resetPassword,
  };
}

// export function useAuth() {
//     const token = ref(null);
//     const refreshToken = ref(null);
//     const isAuthenticated = ref(false);
//     const isLoading = ref(true);

//     onMounted(async () => {
//         const tokenFromStorage = localStorage.getItem("token");
//         const refreshTokenFromCookies = cookies.get("refresh_token");
//         if (tokenFromStorage) {
//             token.value = tokenFromStorage;
//         }
//         if (refreshTokenFromCookies) {
//             refreshToken.value = refreshTokenFromCookies;
//         }
//         isAuthenticated.value = !!token.value;
//         isLoading.value = false;
//     });

//     return {
//         token,
//         refreshToken,
//         isAuthenticated,
//         isLoading,
//     };
// }
