import { BaseUrl } from "./BaseUrl";
import axios from "axios";

class AdminCrudService {
	Create(FormData) {
		return axios.post(BaseUrl() + "/view", FormData, {
			headers: {
				Authorization: "Bearer " +JSON.parse(localStorage.getItem("user2")) ,
				enctype: "multipart/form-data",
			},
		});
	}
	Verify(id) {
		return axios.put(BaseUrl() + `admin/verify/${id}`,{},{
			headers:{
				Authorization: "Bearer " +JSON.parse(localStorage.getItem("user2")) ,
				enctype: "multipart/form-data",
				
			},	
		})
	}
	Reject(id) {
		return axios.put(BaseUrl() + `admin/reject/${id}`,{},{
			headers:{
				Authorization: "Bearer " +JSON.parse(localStorage.getItem("user2")),
				enctype: "multipart/form-data",
				
			},
		});
	}
	Read(id) {
		return axios.get(BaseUrl() + `post/events/${id}`,{
			headers:{
				Authorization: "Bearer " +JSON.parse(localStorage.getItem("user2")),
				enctype: "multipart/form-data",
				
			},
		});
	}
	VerifyList() {
		return axios.get(BaseUrl() + "admin/view", {
			headers:{
				Authorization: "Bearer " +  JSON.parse(localStorage.getItem("user2")),
				enctype: "multipart/form-data",
			},
		});
	}
	AllEvents() {
		return axios.get(BaseUrl() + "post/book", {
			headers:{
				Authorization: "Bearer " + JSON.parse(localStorage.getItem("user2")),
				enctype: "multipart/form-data",
			},
		});
	}
	BookMarkedEvents() {
		return axios.get(BaseUrl() + "post/bookmark", {
			headers:{
				Authorization: "Bearer " + JSON.parse(localStorage.getItem("user2")),
				enctype: "multipart/form-data",
			},
		});
	}
}

export default new AdminCrudService();
