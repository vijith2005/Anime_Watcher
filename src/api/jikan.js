import axios from "axios";

const API_BASE = "https://api.jikan.moe/v4";

export const getTopAnime = async () => {
  const res = await axios.get(`${API_BASE}/top/anime`);
  return res.data.data;
};

export const searchAnime = async (query) => {
  const res = await axios.get(`${API_BASE}/anime`, { params: { q: query } });
  return res.data.data;
};

export const getAnimeDetails = async (id) => {
  const res = await axios.get(`${API_BASE}/anime/${id}`);
  return res.data.data;
};
