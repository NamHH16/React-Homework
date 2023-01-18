// import { produce } from "immer";

const initialState = {
  students: [],
};

const reducer = (state = initialState, { type, payload }) => {
  if (type === "student/UPDATE_STUDENT_LIST") {
    state.students = payload;
    return { ...state };
  }
  return state;
};

export default reducer;
