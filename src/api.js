import axios from "axios";

export default axios.create({
  baseURL: `https://opendata.resas-portal.go.jp/api/v1/`,
});
