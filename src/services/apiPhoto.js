import { transformVNodeArgs } from "vue";
import instance from "./auth";

const prefix = "/photos";

async function getPhotos() {
  const {
    data: { data },
  } = await instance.get(`${prefix}/`);
  return data;
}

async function getPhoto(id) {
  const {
    data: { data },
  } = await instance.get(`${prefix}/${id}`);
  return data;
}

async function deletePhoto(id) {
  const { data } = await instance.delete(`${prefix}/${id}`);
  return data;
}

async function createPhoto(dataContent) {
  const { data } = await instance.post(`${prefix}/`, dataContent);
  return data;
}

async function createTransformedPhoto(photo_id, settingsTransform) {
  const { data : {data} } = await instance.post(`${prefix}/trans/${photo_id}`, {transformations : settingsTransform});
  return data;
}

async function saveTransformedPhoto(photo_id, url) {
  console.log("saveTransformedPhoto", photo_id, url, {url : url});
  const { data } = await instance.post(`${prefix}/trans/save${photo_id}`, {url});
  return data;
}

export { getPhotos, getPhoto, createPhoto, deletePhoto, createTransformedPhoto, saveTransformedPhoto};
