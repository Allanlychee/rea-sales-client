import axios from "axios";

export default {
  // Gets all Homes
  getHomes: function() {
    return axios.get("/api/admin/addHome");
  },
  // Gets the Home with the given id
  getHome: function(id) {
    return axios.get("/api/admin/addHome/" + id);
  },
  // Deletes the Home with the given id
  deleteHome: function(id) {
    return axios.delete("/api/admin/addHome/" + id);
  },
  // Saves a Home to the database
  saveHome: function(HomeData) {
    return axios.post("/api/admin/addHome", HomeData);
  }
};
