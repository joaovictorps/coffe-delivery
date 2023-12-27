import { ProductType } from "../../interfaces/cartTypes";

interface CartActionPayload {
    product: ProductType;
    quantity?: number;
}

export interface CartAction {
    type: ActionTypes;
    payload: CartActionPayload;
}

export type ActionTypes = "ADD_TO_CART" | "REMOVE_FROM_CART" | "CHANGE_PRODUCT_QUANTITY_IN_CART";

export function createCartAction(type: ActionTypes, payload: CartActionPayload): CartAction {
    return {
        type,
        payload,
    };
}

export const addToCartAction = (product: ProductType, quantity?: number) => createCartAction("ADD_TO_CART", { product, quantity });
export const removeFromCartAction = (product: ProductType, quantity?: number) => createCartAction("REMOVE_FROM_CART", { product, quantity });
export const changeProductQuantityAction = (product: ProductType, quantity: number): CartAction => {
    return {
      type: "CHANGE_PRODUCT_QUANTITY_IN_CART",
      payload: { product, quantity },
    };
  };
  