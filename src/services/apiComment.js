import instance from "./auth";

const prefix = "/comments";

async function getComments(photoId) {
  const {
    data: { data },
  } = await instance.get(`${prefix}/${photoId}`);
  return data;
}

async function deleteComment(id) {
  const { data } = await instance.delete(`${prefix}/${id}`);
  return data;
}

async function createComment(dataContent) {
  const { data } = await instance.post(`${prefix}`, dataContent);
  return data;
}

async function updateComment(id, dataContent) {
  const { data } = await instance.patch(`${prefix}/${id}`, dataContent);
  return data;
}

export { getComments, deleteComment, createComment, updateComment };
