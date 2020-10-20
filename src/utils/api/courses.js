import Axios from "../axios";

export default {
	all: () => Axios.get("/courses").then((res) => res.data),
	detail: (id) => Axios.get(`/courses/${id}`).then((res) => res.data),
};
