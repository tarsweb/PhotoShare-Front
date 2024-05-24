import axios from "axios";
import cookies from "vue-cookies";

const instance = axios.create({
  //baseURL: "/api",
  baseURL: "https://rest-api-kbuhantsev-ca83d110.koyeb.app/api"
});

const prefix = "/auth";

const setToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  localStorage.removeItem("token");
  instance.defaults.headers.common.authorization = "";
};

const setRefreshToken = (token) => {
  if (token) {
    return cookies.set("refresh_token", token);
  }
  cookies.remove("refresh_token");
};

const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const refresh_token = cookies.get("refresh_token");

      if (!refresh_token) {
        setToken();
        setRefreshToken();
        return Promise.reject(error);
      }

      try {
        await refreshToken(refresh_token);
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    setToken();
    setRefreshToken();
    return Promise.reject(error);
  }
);

async function signUp(credentials) {
  await instance.post(`${prefix}/signup`, credentials);
}

async function login(credentials) {
  try {
    const {
      data: { access_token, refresh_token },
    } = await instance.post(`${prefix}/login`, credentials);

    setToken(access_token);
    setRefreshToken(refresh_token);
  } catch (error) {
    throw error;
  }
}

async function logout() {
  await instance.get(`${prefix}/logout`);
  setToken();
  setRefreshToken();
}

async function refreshToken(token) {
  console.log("refreshToken", token);
  try {
    instance.defaults.headers.authorization = `Bearer ${token}`;
    const {
      data: { access_token, refresh_token },
    } = await instance.get(`${prefix}/refresh_token`);

    console.log("f refreshToken", access_token, refresh_token);
    setToken(access_token);
    setRefreshToken(refresh_token);
  } catch (error) {
    setToken();
    setRefreshToken();
  }
}

async function forgotPassword(data) {
  try {
    const {
      data: { reset_token },
    } = await instance.post(`${prefix}/forget_password`, data);

    return reset_token;
  } catch (e) {
    throw e;
  }
}

async function resetPassword(data) {
  const result = await instance.post(`${prefix}/reset_password`, data);
  return result;
}

export { signUp, login, logout, forgotPassword, resetPassword, getToken };
export default instance;
