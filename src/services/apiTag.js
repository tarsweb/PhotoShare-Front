import instance from "./auth";

const prefix = "/tags";

async function getTags() {
    const {
        data: { data },
    } = await instance.get(`${prefix}/`);
    return data;
}

export { getTags }