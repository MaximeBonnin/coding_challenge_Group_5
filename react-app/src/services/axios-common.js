import axios from "axios";
import { hostNameUrl } from "../config/api";

export default axios.create({
        baseURL: hostNameUrl,
        headers: {
            "Content-type": "application/json"
        }
});