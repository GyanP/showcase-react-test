import { createReducer } from "../../../core/reduxUtils";

const initialState = {
  data: []
};

const handlers = {};

const mainReducer = createReducer(initialState, handlers);

export default mainReducer;
