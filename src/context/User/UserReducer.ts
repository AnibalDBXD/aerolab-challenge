import { IUserActions, IUserState } from "./../types";
import ProductActions from "./UserActions";

const UserReducer = (state: IUserState, action: IUserActions): IUserState => {
    const { payload, type } = action;
    switch (type) {
        case ProductActions.SET_USER:
            return payload as IUserState;

        case ProductActions.SET_POINTS:
            return {
                ...state,
                points: payload as number
            };

        default:
            return state;
    }
};

export default UserReducer;
