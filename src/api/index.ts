import { IFetchAPI, IURL, METHODS, AcceptablePoints, IBodyParams } from "./types";

const API_URL = "https://coding-challenge-api.aerolab.co";

const APIURLS = {
    product: { url: "products", method: METHODS.GET },
    redeemhistory: { url: "user/history", method: METHODS.GET },
    user: { url: "user/me", method: METHODS.GET },
    points: { url: "user/points", method: METHODS.POST },
    redeem: { url: "redeem", method: METHODS.POST }
};

async function fetchAPI({ url, method }: IURL, bodyParams?: IBodyParams): Promise<IFetchAPI> {
    const defaultInit = {
        method,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: process.env.API_KEY || ""
        }
    };

    const RequestInit = method === "POST" ? { ...defaultInit, body: JSON.stringify(bodyParams) } : defaultInit;

    const response = await fetch(`${API_URL}/${url}`, RequestInit);

    const data = await response.json();

    if (!data) {
        return undefined;
    }

    return data;
}

export const GetProductList = (): Promise<IFetchAPI> => fetchAPI(APIURLS.product);

export const GetUser = (): Promise<IFetchAPI> => fetchAPI(APIURLS.user);

export const GetRedeemHistory = (): Promise<IFetchAPI> => fetchAPI(APIURLS.redeemhistory);

export const PostPoints = (amount: AcceptablePoints): Promise<IFetchAPI> => fetchAPI(APIURLS.points, { amount });

export const Redeem = (productId: string): Promise<IFetchAPI> => fetchAPI(APIURLS.redeem, { productId });
