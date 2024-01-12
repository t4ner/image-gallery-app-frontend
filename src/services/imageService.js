import axios from "axios";

export default class imageService {
  getAllImage() {
    return axios.get("http://localhost:8080/images/getAll");
  }
}
