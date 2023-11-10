import axios from "axios";

export default axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND}`,
  headers: {
    "Content-type": "application/json",
  },
});
