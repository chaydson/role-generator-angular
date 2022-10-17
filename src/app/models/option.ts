export interface Option {
    id: number;
    name: string;
    category: string;
}

export interface AddOptionRequest {
    name: string;
    category: string;
}