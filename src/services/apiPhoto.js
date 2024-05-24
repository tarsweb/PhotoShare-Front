import instance from "./auth";

const prefix = "/photos";

async function getPhotos() {
    const { data } = await instance.get(`${prefix}/`);
    return data;
}

async function getPhoto(photo_id){
    console.log(photo_id);
    // const { data } = await instance.get(`${prefix}/${photo_id}`);
    const result = await instance.get(`${prefix}/`);
    console.log(data);
    return data;
}

async function deletePhoto(id) {
    const { data } = await instance.delete(`${prefix}/${id}`);
    return data;
}

async function createPhoto(data) {
    const res = await instance.post(`${prefix}/`, data);
    console.log(res);
    const photo = res.data;
    return photo;
}

export { getPhotos, getPhoto, deletePhoto, createPhoto }