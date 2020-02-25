import axios from "axios";

export default axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1",
  headers: {
    //   Authorization: "Bearer a88f403cc3788211658bbb0d1f563c59"
    "user-key": "a88f403cc3788211658bbb0d1f563c59"
  }
});
