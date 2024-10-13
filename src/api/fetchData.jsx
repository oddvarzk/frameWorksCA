export const url = "https://v2.api.noroff.dev/online-shop";

export const fetchData = async (id = null) => {
    const endpoint = id ? `${url}/${id}` : url;
    try {
        const response = await fetch(endpoint);
        const json = await response.json();
        return json.data;
    } catch (error) {
        throw error;
    }
};

export default url;

