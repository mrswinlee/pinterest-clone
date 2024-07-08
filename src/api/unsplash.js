import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID k25CZ0K6FRRLa0hUnlGWXZh3aauDh7fE-X6xikpgYIM",
  },
});
