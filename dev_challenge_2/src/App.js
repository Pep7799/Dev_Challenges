import React from "react"
import BlogPage from "./components/BlogPage";
import Home from "./components/Home";
import Navbar from './components/Navbar'
import WhoAreWe from "./components/WhoAreWe";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <WhoAreWe/>
      <BlogPage/>
    </div>
  );
}

export default App;
