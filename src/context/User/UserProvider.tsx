import { ReactNode, useEffect, useReducer } from "react";
import { UserContext, initialState } from "./UserContext";
import UserReducer from "./UserReducer";
import { GetUser } from "../../api";
import { IUser } from "../../interfaces";
import UserActions from "./UserActions";
import { IUserState } from "../types";

interface IProps {
    children: ReactNode;
}

const UserProvider = ({ children }: IProps): JSX.Element => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    useEffect(() => {
        GetUser().then((newUser) => SetUser(newUser as IUser));
    }, []);

    const SetUser = (newUser: IUser): void => dispatch({ type: UserActions.SET_USER, payload: newUser as IUserState });

    const SetPoints = (newPoints: number): void => dispatch({ type: UserActions.SET_POINTS, payload: newPoints });

    return (
        <UserContext.Provider value={{ _id: state._id, createDate: state.createDate, name: state.name, points: state.points, redeemHistory: state.redeemHistory, SetPoints }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
