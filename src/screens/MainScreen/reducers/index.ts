import { createReducer } from "../../../core/reduxUtils";
import { getUnivercitiesHandlers } from "./getUnivercities"
import { IEducationState } from "../types";

const initialState: IEducationState = {
  data: [],
  errors: {},
  universities: []
};

const handlers = {
  ...getUnivercitiesHandlers
};

const educationReducer = createReducer(initialState, handlers);

export default educationReducer;
