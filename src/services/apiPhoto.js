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

export { getPhotos, getPhoto, createPhoto, deletePhoto };
