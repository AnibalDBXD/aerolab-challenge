export interface IProduct {
    category: string;
    cost: number;
    img?: { hdUrl: string; url: string };
    name: string;
    _id: string;
}

export interface IRedeemHistory extends IProduct {
    createDate: Date;
    productId: string;
}

export interface IUser {
    _id: string;
    name: string;
    points: number;
    createDate: Date;
    redeemHistory: IRedeemHistory[];
}
