// import { useState } from "react";
// import Body from "./Pages/Body";
import Content from "./Pages/Content";
import Header from "./Pages/Header";
import Sidebar from "./Pages/Sidebar";
const App = () => {
  // const [num, setNum] = useState(0)
  // const [time, setTime] = useState(new Date());
  // const toggle = () => {
  //   setInterval(() => {
  //     //setNum(prev=> prev + 1)
  //     setTime(new Date(   ));
  //   }, 1000);
  // };
  return (
    <div className="bg-gray-400 grid gap-5 grid-rows-[100px_1fr] h-screen p-2 overflow-hidden">
      <div className="bg-white rounded-md shadow-lg  ">
        <Header />
      </div>
      <div className="rounded-md shadow-lg grid grid-cols-[150px_1fr] gap-5 overflow-hidden">
        <div className="bg-white rounded-md shadow-lg p-2">
          <Sidebar />
        </div>
        <div className="bg-white overflow-y-scroll  rounded-md shadow-lg p-2  ">
          {/* <Body val={toggle} time={time} />  */}
          <Content/>
        </div>
      </div>
    </div>
  );
};

export default App;
