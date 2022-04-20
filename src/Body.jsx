import React, { useCallback, useEffect, useState, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllCourse } from "./redux/actions/CourseAction";
import BlaBla from "./BlaBla";
import logo from "./logo192.png";
import { courseList, courseListPrice } from "./selector/Selector";
const Body = () => {
  const [button, setButton] = useState(true);
  const allCourse = useSelector(courseList);
  const coursePrice = useSelector(courseListPrice);
  // console.log(coursePrice);
  // const allCourse = useSelector(state=>state.CourseReducer.allCourse.data,console.log("data geldi"));
  // console.log(allCourse);
  // console.log(button);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllCourse());
  }, []);
  // const ButtonFired = () => {
  //   setButton(!button);
  //   console.log("clicked");
  // };
  const ButtonFired = useCallback(() => {
    setButton(!button);
    console.log("clicked");
  }, []);

  return (
    <>
      <BlaBla logo={logo} />
      <div>Body</div>
      <ul>
        <li>
          <Link to="/blabla">blalba</Link>
        </li>
        <li>
          <Link to="/whatever">go to the whatever page</Link>
        </li>
        <li>
          <button onClick={ButtonFired}>click the button</button>
        </li>
      </ul>
      {allCourse && allCourse.map((item) => <h1 key={item.id}>{item.name}</h1>)}
    </>
  );
};

export default memo(Body);
