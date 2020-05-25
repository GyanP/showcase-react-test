import * as constants from "../constants";
import { IMainState } from "../types";

const getUnivercitiesBegin = (state: IMainState) => ({
    ...state,
    univercitiesLoading: true,
});

const getUnivercitiesSuccess = (state: IMainState, action: any) => ({
    ...state,
    data: action.payload,
    univercitiesLoading: false,
});

const getUnivercitiesFailure = (state: IMainState, action: any) => ({
    ...state,
    errors: action.payload,
    univercitiesLoading: true,
});

export const getUnivercitiesHandlers = {
    [constants.GET_UNIVERCITIES_BEGIN]: getUnivercitiesBegin,
    [constants.GET_UNIVERCITIES_SUCCESS]: getUnivercitiesSuccess,
    [constants.GET_UNIVERCITIES_FAILURE]: getUnivercitiesFailure,
};
