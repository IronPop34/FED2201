import { Size } from "./size";
import { Price } from "./price";

export interface Product {
    id: number;
    name: string;
    imageUrls: string[];
    price: Price[];
    sizes: Size[];
}