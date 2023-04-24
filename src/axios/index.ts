import axios from "axios";

const clienteAxios = axios.create({
	baseURL: "https://nflbackend.fly.dev/",
	// baseURL: "http://127.0.0.1:3300/",
});

export default clienteAxios;
