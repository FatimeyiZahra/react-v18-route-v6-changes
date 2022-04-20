import { createSelector } from "reselect";

// export const courseListMemo = createSelector(
//   (state) => state.CourseReducer.allCourse.data,
//   (data) => {
//     console.log("list geldi");
//     return data;
//   }
// );

const courseListReducer = (state) => state.CourseReducer.allCourse;

export const courseList = createSelector([courseListReducer], (list) => {
  return list.data;
});

export const courseListPrice = createSelector([courseList], (coursePrice) => {
  return (
    coursePrice &&
    coursePrice.map((itm) => {
      // console.log(itm);
      return itm.price;
    }, [])
  );
});
