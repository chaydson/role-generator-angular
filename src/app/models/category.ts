import { Option } from './option';

export interface Category {
    id: number;
    name: string;
    options?: Option[];
}

export interface AddCategoryRequest {
    name: string;
}
