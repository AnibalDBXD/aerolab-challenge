export interface IProduct {
    category: string;
    cost: number;
    img?: { hdUrl: string; url: string };
    name: string;
    _id: string;
}

export interface IHistoryProducts extends IProduct {
    productId: string;
    createDate: Date;
}

export interface IUser {
    _id: string;
    name: string;
    points: number;
    createDate: Date;
    redeemHistory: IHistoryProducts[];
}
