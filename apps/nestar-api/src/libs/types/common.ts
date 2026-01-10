import { ObjectId } from "mongoose";

export interface T {
    [key: string]: any;
}

export interface StatisticsModier {
    _id: ObjectId;
    targetkey: string;
    modifier: number;
}