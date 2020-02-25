import { useEffect, useState } from "react";
import zomato from "../api/zomato";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async searchTerm => {
    console.log(searchTerm);
    try {
      const response = await zomato.get("/search", {
        params: {
          count: 20,
          q: searchTerm
          // category: "1"
        }
      });
      console.log(response.data.restaurants);
      setResults(response.data.restaurants);
    } catch (err) {
      setErrorMsg("Something went wrong...");
    }
  };

  useEffect(() => {
    searchApi("kebab");
  }, []);

  return [searchApi, results, errorMsg];
};
