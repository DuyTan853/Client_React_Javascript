import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apilink = import.meta.env.API_LINK; // dùng .env với vỉte
const callApi = () => {
  axios
    .get(apilink)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};

export default callApi;
