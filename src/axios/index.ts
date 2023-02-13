import axios from "axios";

const clienteAxios = axios.create({
	// baseURL: "https://valorant-api.com/v1/",
	baseURL: "http://127.0.0.1:3300/",
});

export default clienteAxios;
