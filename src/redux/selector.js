import { createSelector } from "reselect";

export const courseListMemo = createSelector(
  (state) => state.CourseReducer.allCourse.data,
  (data) => {
    console.log("list geldi");
    return data;
  }
);
