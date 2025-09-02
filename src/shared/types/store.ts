import { RootState, AppDispatch } from "../lib/redux";

export interface ThunkApiConfig {
    state: RootState
    dispatch: AppDispatch
    rejectValue: string
}