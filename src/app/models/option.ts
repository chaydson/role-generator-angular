import { Category } from "./category";

export interface Option {
    id: number;
    name: string;
    category: Category;
}

export interface AddOptionRequest {
    name: string;
    category: Category;
}