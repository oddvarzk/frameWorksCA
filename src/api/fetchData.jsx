const url = "https://v2.api.noroff.dev/online-shop";

export const fetchData = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json.data;
    } catch (error) {
        throw error;
    }
};
