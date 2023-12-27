import { CartContextType, ProductInCart } from "../../interfaces/cartTypes";
import { CartAction } from "./actions";

export function cartReducer(state: CartContextType, action: CartAction): CartContextType {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity = 1 } = action.payload;
      
      const hasOnCart = state.products.find(item => product.id === item.product.id);
      
      if (hasOnCart) {
        return {
          ...state,
          products: state.products.map(item =>
            item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
          ),
        };
      }
      
      const updatedProduct: ProductInCart = {
        product,
        quantity,
      };
      
      return {
        ...state,
        products: [...state.products, updatedProduct],
      };
    }

    case "REMOVE_FROM_CART": {
      const { product, quantity } = action.payload;
      
      const updatedProducts = state.products.reduce((acc: ProductInCart[], item: ProductInCart) => {
        if (item.product.id === product.id) {
          if (item.quantity <= 1) return acc;

          if(!quantity) return acc;
          
          const updatedQuantity = item.quantity - quantity;
          
          if (updatedQuantity > 0) {
            return [...acc, { ...item, quantity: updatedQuantity }];
          }
          
          return acc;
        }
        return [...acc, item];
      }, []);
      
      return {
        ...state,
        products: updatedProducts,
      };
    }
    
    case "CHANGE_PRODUCT_QUANTITY_IN_CART": {
      const { product, quantity } = action.payload;

      if (quantity === undefined || quantity <= 0) return state

      const updatedProducts = state.products.map(item => {
        if (item.product.id === product.id) {
          return { ...item, quantity };
        }
        return item;
      });
    
      return {
        ...state,
        products: updatedProducts,
      };
    }
    
    default:
      return state;
  }
}