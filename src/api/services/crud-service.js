import { BaseUrl } from "./BaseUrl";
// import authHeader from "./auth-header";
import axios from "axios";

// console.log(token);
class CrudService {
	Create(FormData) {
		return axios.post(BaseUrl() + "post/create", FormData, {
			headers: {
				Authorization: "Bearer " +JSON.parse(localStorage.getItem("user2")) ,
				enctype: "multipart/form-data",
			},
		});
	}
	Update(id,FormData) {
		return axios.put(BaseUrl() + `post/update/${id}`, FormData,{
			headers:{
				Authorization: "Bearer " +JSON.parse(localStorage.getItem("user2")) ,
				enctype: "multipart/form-data",
				
			},	
		})
	}
	Delete(id) {
		return axios.delete(BaseUrl() + `post/delete/${id}`,{
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
	ReadAdminEvent(id) {
		return axios.get(BaseUrl() + `admin/event/${id}`,{
			headers:{
				Authorization: "Bearer " +JSON.parse(localStorage.getItem("user2")),
				enctype: "multipart/form-data",
				
			},
		});
	}
	ReadEvents() {
		return axios.get(BaseUrl() + "post/createdEvents", {
			headers:{
				Authorization: "Bearer " +  JSON.parse(localStorage.getItem("user2")),
				enctype: "multipart/form-data",
			},
		});
	}
	RegisteredEvents() {
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

export default new CrudService();
