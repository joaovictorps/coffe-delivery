export interface ProductType {
    id: string;
    image: string;
    tags: string[];
    name: string;
    description: string;
    price: number;
}

export interface ProductInCart {
   product: ProductType;
   quantity: number;
}

export interface CartContextType {
    products: ProductInCart[];
    addToCart: (product: ProductType, quantity?: number) => void;
    removeFromCart: (product: ProductType, quantity?: number) => void;
    changeProductQuantityInCart: (product: ProductType, quantity: number) => void;
}