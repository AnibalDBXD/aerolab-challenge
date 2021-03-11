import { createContext, useContext } from "react";
import { IUserState } from "../types";

export const initialState: IUserState = {
    _id: "",
    name: "",
    points: 0,
    redeemHistory: [],
    createDate: new Date()
};

export const UserContext = createContext(initialState);

export const useUserContext = (): IUserState => useContext(UserContext);
