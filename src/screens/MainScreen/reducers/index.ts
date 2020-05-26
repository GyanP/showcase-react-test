import { createReducer } from "../../../core/reduxUtils";
import { getUniversitiesHandlers } from "./getUniversities"
import { IEducationState } from "../types";

const initialState: IEducationState = {
  data: [
    {
      university: "Oxford",
      startYear: "24 Mar 2019",
      endYear: "23 Mar 2020",
      degree: "Mtech",
      field: "test",
      grade: "8.1"
    }
  ],
  errors: {},
  universities: []
};

const handlers = {
  ...getUniversitiesHandlers
};

const educationReducer = createReducer(initialState, handlers);

export default educationReducer;
