import { BaseUrl } from "./BaseUrl";
import axios from "axios";

class AdminCrudService {
	VerifyList() {
		return axios.get(BaseUrl() + "admin/view", {
			headers: {
				Authorization: "Bearer " + JSON.parse(localStorage.getItem("user2")),
				enctype: "multipart/form-data",
			},
		});
	}
	Verify(id) {
		return axios.put(
			BaseUrl() + `admin/verify/${id}`,
			{},
			{
				headers: {
					Authorization: "Bearer " + JSON.parse(localStorage.getItem("user2")),
					enctype: "multipart/form-data",
				},
			}
			);
		}
		Reject(id) {
			return axios.put(
				BaseUrl() + `admin/reject/${id}`,
				{},
				{
					headers: {
						Authorization: "Bearer " + JSON.parse(localStorage.getItem("user2")),
						enctype: "multipart/form-data",
					},
				}
				);
			}
			
			EventList() {
				return axios.get(BaseUrl() + "admin/allEvents", {
					headers: {
						Authorization: "Bearer " + JSON.parse(localStorage.getItem("user2")),
						enctype: "multipart/form-data",
					},
				});
			}
			DeleteEvent(id) {
				return axios.delete(BaseUrl() + `admin/delete/${id}`, {
					headers: {
						Authorization: "Bearer " + JSON.parse(localStorage.getItem("user2")),
						enctype: "multipart/form-data",
					},
				});
			}
			UsersList() {
				return axios.get(BaseUrl() + "admin/allUsers", {
					headers: {
						Authorization: "Bearer " + JSON.parse(localStorage.getItem("user2")),
						enctype: "multipart/form-data",
					},
				});
			}
			DeleteUser(id) {
				return axios.delete(BaseUrl() + `admin/deleteUser/${id}`, {
					headers: {
						Authorization: "Bearer " + JSON.parse(localStorage.getItem("user2")),
						enctype: "multipart/form-data",
					},
				});
			}
			
	
}
let admin=new AdminCrudService()
export default admin ;
