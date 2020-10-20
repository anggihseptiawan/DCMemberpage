import axios from "axios";
import errorHandler from "./errorHandler";

const Axios = axios.create({
	baseURL: `${process.env.REACT_APP_API_HOST}`,
});

axios.interceptors.response.use((res) => res.data, errorHandler);

export default Axios;
