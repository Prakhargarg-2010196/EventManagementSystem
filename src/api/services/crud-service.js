import { BaseUrl } from "./BaseUrl";
import authHeader from "./auth-header";
import axios from "axios";
const token = JSON.parse(localStorage.getItem("user2"));
console.log(token);
class CrudService {
	Create(FormData) {
		return axios.post(BaseUrl() + "post/create", FormData, {
			headers: {
				Authorization: "Bearer " + token,
				enctype: "multipart/form-data",
			},
		});
	}

	Update(id) {
		return axios.post(BaseUrl() + "post/create", FormData);
	}
	Delete(id) {
		return axios.post(BaseUrl() + "post/create", FormData);
	}
	ReadEvents() {
		return axios.get(BaseUrl() + "post/createdEvents", {
			headers:{
				Authorization: "Bearer " + token,
				enctype: "multipart/form-data",
			},
		});
	}
}

export default new CrudService();
