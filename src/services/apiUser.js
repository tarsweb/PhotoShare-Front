import instance from "./auth";
import { getToken } from "./auth";

const prefix = "/user";

async function getCurrentUser() {
  try {
    getToken();
    const request = await instance.get(`${prefix}/current`);
    return request.data.data;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  try {
    const {
      data: { data },
    } = await instance.get(`${prefix}/`);
    return data;
  } catch (error) {
    throw error;
  }
}

async function getUserPhotos() {
  try {
    const request = await instance.get(`${prefix}/photos`);
    console.log("getUserPhotos", request);
    return request.data;
  } catch (error) {
    throw error;
  }
}

async function getUserComments() {
  try {
    const request = await instance.get(`${prefix}/comments`);
    return request.data.data;
  } catch (error) {
    throw error;
  }
}

async function blockUser({ email, blocked }) {
  try {
    const data = new FormData();
    data.append("blocked_user", email);
    data.append("block", blocked);
    const request = await instance.post(`${prefix}/block`, data);
    return request.data;
  } catch (error) {
    throw error;
  }
}

async function udatedAvatar(file) {
  try {
    const dataForUpdate = new FormData();
    dataForUpdate.append("file", file);
    const { data : { data } } = await instance.patch(`${prefix}/avatar`, dataForUpdate);
    return data;
  } catch (error) {
    throw error;
  }
}

export {
  getCurrentUser,
  getAllUsers,
  getUserPhotos,
  getUserComments,
  blockUser,
  udatedAvatar,
};
