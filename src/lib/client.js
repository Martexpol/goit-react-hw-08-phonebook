import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = (token) => {
  apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  apiClient.defaults.headers.common.Authorization = "";
};

export { apiClient, setAuthHeader, clearAuthHeader };
