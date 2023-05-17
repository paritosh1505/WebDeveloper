//this code is used for api
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

//const TOKEN_VALUE = import.meta.env.MY_TMDB_TOKEN;
const TOKEN_VALUE =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmQzZjljOTIyNjgyZGQ3ZDk5ODEyYWUxNGVlMDI0MSIsInN1YiI6IjY0NTliM2UwNmFhOGUwMDEzOWJiYmU5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9FQfqurPbjR_qTOp5i9EI3pnQRUEQsm8PTpmP0z24G4";
const headers = {
  Authorization: "bearer " + TOKEN_VALUE,
};

export const fetchdata = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
