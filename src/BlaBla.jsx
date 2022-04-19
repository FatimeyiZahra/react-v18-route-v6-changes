import React,{memo} from "react";
import { Link } from "react-router-dom";

const BlaBla = ({logo}) => {
  console.log("aadad");
  return (
    <>
      <div>Body</div>
      <img src={logo} alt="hey logo" style={{ width: "100%", height: 200 }}></img>
      
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/whatever">go to the whatever page</Link>
        </li>
      </ul>
    </>
  );
};

export default memo(BlaBla);
