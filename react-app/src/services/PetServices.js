import { hostNameUrl } from "../config/api";
import axios from "axios";

export const getUser = () => {
  const user = axios.get(`${hostNameUrl}/user/1`);
  return user;
};