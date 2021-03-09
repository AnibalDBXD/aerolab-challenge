import { IProduct } from "../interfaces";

const API_URL = "https://coding-challenge-api.aerolab.co";

export async function GetProductList(): Promise<IProduct[] | undefined> {
    const ProductResponse = await fetch(`${API_URL}/products`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: process.env.API_KEY || ""
        }
    });

    const ProductData: IProduct[] = await ProductResponse.json();

    if (!ProductData) {
        return undefined;
    }

    return ProductData;
}
