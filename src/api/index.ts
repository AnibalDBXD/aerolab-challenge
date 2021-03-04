import { IProduct } from "../interfaces";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GetProductList(): Promise<IProduct[] | undefined> {
    const ProductResponse = await fetch(`${process.env.API_URL}/products`, {
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
