import { IUserActions, IUserState } from "./../types";
import UserActions from "./UserActions";

const UserReducer = (state: IUserState, action: IUserActions): IUserState => {
    const { payload, type } = action;
    switch (type) {
        case UserActions.SET_LOADING:
            return {
                ...state,
                loading: payload as boolean
            };
        case UserActions.SET_USER:
            return payload as IUserState;

        case UserActions.SET_POINTS:
            return {
                ...state,
                points: payload as number
            };

        default:
            return state;
    }
};

export default UserReducer;
