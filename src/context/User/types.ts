import { IHistoryProducts } from "../../interfaces";
import UserActions from "./UserActions";

export interface IUserState {
    loading: boolean;
    _id: string;
    name: string;
    points: number;
    redeemHistory: IHistoryProducts[];
    createDate: Date;
    SetPoints?: (newPoints: number) => void;
}

export interface IUserActions {
    type: UserActions;
    payload: IUserState | number | boolean;
}
