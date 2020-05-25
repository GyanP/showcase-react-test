import { createReducer } from "../../../core/reduxUtils";
import { getUnivercitiesHandlers } from "./getUnivercities"
import { IMainState } from "../types";

const initialState: IMainState = {
  data: []
};

const handlers = {
  ...getUnivercitiesHandlers
};

const mainReducer = createReducer(initialState, handlers);

export default mainReducer;
