import { ISorts } from "./types";

export const Sorts: { name: string; type: ISorts; _id: number }[] = [
    { name: "Most recent", type: "MostRecent", _id: 1 },
    { name: "Lowest price", type: "LowestPrice", _id: 2 },
    { name: "Highest price", type: "HighestPrice", _id: 3 }
];
