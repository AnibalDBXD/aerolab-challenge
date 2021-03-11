import { IProduct, IRedeemHistory, IUser } from "../interfaces";

export enum METHODS {
    GET = "GET",
    POST = "POST"
}

export type AcceptablePoints = 1000 | 5000 | 7500;

export interface IURL {
    url: string;
    method: METHODS;
}

export type IFetchAPI = IProduct[] | IUser | IRedeemHistory | undefined;

export interface IBodyParams {
    amount?: AcceptablePoints;
    productId?: string;
}
