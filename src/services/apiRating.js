import instance from "./auth";

const prefix = "/rating";

async function getRating(photo_id) {
  const {
    data: {
      data: { rating },
    },
  } = await instance.get(`${prefix}/${photo_id}`);
  return rating;
}

async function setRating(photo_id, rating) {
  const {
    data: { data },
  } = await instance.post(`${prefix}/${photo_id}`, { rating });
  return data;
}

async function getAVGRating(photo_id) {
  const {
    data: {
      data: { rating },
    },
  } = await instance.get(`${prefix}/avg/${photo_id}`);
  return rating;
}

export { getRating, setRating, getAVGRating };
