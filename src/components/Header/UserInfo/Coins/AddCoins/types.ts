import { FC } from "react";
import { AcceptablePoints } from "../../../../../api/types";
import { IICon } from "../../../../Icons/types";

export interface IAddCoins {
    closeModal: () => void;
}

export interface IPoints {
    Icon: FC<IICon>;
    points: AcceptablePoints;
    id: string;
}
