//This is general hook which we used for API calling instead of using same method again and again we are creating one general method
//such that whenever we are calling api we will use this custom hook
// if you notice in app.jsx we use same approach for fetching the API

import { useEffect, useState } from "react";
import { fetchdata } from "../utils/api"; // here i called tradtional method fetchData variable which is stored in utils/api
export const useFetch = (url) => {
  // by default useFetch is taking GET method if we need to specify method name we have to use code like--"export const useFetch = (url,method ="POST")"
  //here we are creating three new state initially
  const [datafromHere, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading..."); //here setloading variable will change to loading from null
    setData(null); //
    setError(null);
    //here we are calling fetchData method and here URL will be dynamic which will passes through compnent
    fetchdata(url)
      .then((res) => {
        console.log("res value =>", res);
        setLoading(false);
        setData(res); // when data is loaded data will be save to setData state
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]); //here we write url method which means whenEver we are changing URL useEffect method will call again hence we initlaize setdata and seterror value as null at line no 15 and 16 so whenever urk value is change initally setdata and seterror value should be null

  return { datafromHere, loading, error }; // returning data,load and error here
};
export default useFetch;
