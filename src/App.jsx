import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeSlice, { getApiValue } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { fetchdata } from "./utils/api";
//for the following import coponent always star with capital letter if we import component with small lettere react will assume that as
// HTML element not react component
import Header from "./componenents/header/header";
import Home from "./pages/home/Home";
import Explorer from "./pages/explore/explorer";
import Details from "./pages/details/details";
import SearchResult from "./pages/searchResult/searchResult";
import PageNotFound from "./pages/404/pageNotFound";
import Footerhome from "./componenents/footer/footer";

//getApiValue;
//hook alwyas be used inside component
// we cant use hook inside if condition or any condition and it should be aways top of the component
function App() {
  const dispatch = useDispatch(); //creating a dipatch instace and storing useDispatch value //React Redux library that allows you to dispatch actions to the Redux store
  const { url } = useSelector((state) => state.home); //The useSelector hook is a function provided by the React Redux library that allows you to access the Redux store
  console.log(url);
  // for calling any API we have to use useEffect and boiler code just below that here it is apitesting
  useEffect(() => {
    apitesting();
  }, []);
  const apitesting = () => {
    fetchdata("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiValue(res));
    });
  };
  //in belo code ? is optinoal chanining that means code will not execute furthur if value is empty as api call  will take some time to fetch the data
  // return (
  //   <div className="App">
  //     App
  //     {url?.total_pages}
  //   </div>
  // );

  // for the below code entire application will be inside browser stack here route is taking two props one is path and ther is element
  //below code is for routing confuraton setup
  //BrowserRoute enable routing functionality and here browser stack is top level componenet wrapper
  //Routes cmponent used to define route configration. Act as container for all individual router defination
  // fpr path route is configured as root while elemenet Props specifies react component that should be rendered when route matches current URL
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":mediaType/:id" element={<SearchResult />} />
        <Route path="/search/:query" element={<Explorer />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footerhome /> */}
    </BrowserRouter>
  );
}

export default App;
