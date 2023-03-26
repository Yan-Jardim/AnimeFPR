import axios from "axios";

const getCategories = async (limit = 10) => {

    let url = `https://kitsu.io/api/edge/categories`;

    if (limit) {
        url += `?page[limit]=${limit}&sort=-total_media_count`
    }

    const response = await axios.get(url);

    return response.data.data;
}

export {
    getCategories
}