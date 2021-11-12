import { BaseUrl } from "./BaseUrl";
// import authHeader from "./auth-header";
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

	Update(id,FormData) {
		return axios.put(BaseUrl() + `post/update/${id}`, FormData,{
			headers:{
				Authorization: "Bearer " + token,
				enctype: "multipart/form-data",
				
			},
		}
		)
	}
	Delete(id) {
		return axios.delete(BaseUrl() + `post/delete/${id}`,{
			headers:{
				Authorization: "Bearer " + token,
				enctype: "multipart/form-data",
				
			},
		});
	}
	Read(id) {
		return axios.get(BaseUrl() + `post/events/${id}`,{
			headers:{
				Authorization: "Bearer " + token,
				// enctype: "multipart/form-data",
				
			},
		});
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
