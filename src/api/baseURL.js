import axios from "axios";

const baseURL = axios.create({baseURL:import.meta.env.VITE_BASE_URL})

export default baseURL;