import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://lteapi.herokuapp.com/api"
    : "http://localhost:8080/api";

const Axios = async (method, url, auth = false, data = null) => {
  const config = {
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (auth) {
    config.headers.Authorization = sessionStorage.getItem("user_token")
      ? `${sessionStorage.getItem("user_token")}`
      : "";
  }
  if (data) {
    config.data = data;
  }
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default Axios;
