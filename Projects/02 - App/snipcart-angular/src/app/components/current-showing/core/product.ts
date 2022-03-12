import { Size } from "./size";

export interface Product {
    id: number;
    name: string;
    imageUrls: string[];
    price: number;
    sizes: Size[];
}