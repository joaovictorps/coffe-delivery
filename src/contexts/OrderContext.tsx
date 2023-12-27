import { ReactNode, createContext, useReducer, useEffect } from "react";
import { CartContextType, ProductType } from "../interfaces/cartTypes";
import { FormContextType, FormDataType } from "../interfaces/formTypes";
import { cartReducer } from "../reducers/cart/reducer";
import { formReducer } from "../reducers/form/reducer";
import { addToCartAction, changeProductQuantityAction, removeFromCartAction } from "../reducers/cart/actions";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";
import { FormActionAddressPayload, changeAddressAction } from "../reducers/form/actions";

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextType {
  cart: CartContextType;
  form: FormContextType;
}

interface OrderContextProviderProps {
  children: ReactNode;
}

export const OrderContextProvider = ({ children }: OrderContextProviderProps) => {
  const initialCartState: CartContextType = loadFromLocalStorage('cartData', {
    products: [],
  }) as CartContextType;

  const initialFormState: FormContextType = {
    data: {
      address: {
        street: "",
        postalCode: "",
        number: "",
        complement: "",
        city: "",
        state: "",
      },
      paymentMethodSelected: {
        name: "",
      },
      client: {
        name: ""
      },
    },
    changeFormData: () => {},
  };

  const [cartState, cartDispatch] = useReducer(
    cartReducer,
    initialCartState,
    (state: CartContextType) => state
  );

  const [formState, formDispatch] = useReducer(
    formReducer,
    initialFormState,
    (state: FormContextType) => state
  );

  const { products } = cartState;

  const addToCart = (product: ProductType, quantity?: number) => {
    cartDispatch(addToCartAction(product, quantity));
  };

  const removeFromCart = (product: ProductType, quantity?: number) => {
    cartDispatch(removeFromCartAction(product, quantity));
  };

  const changeProductQuantityInCart = (product: ProductType, quantity: number) => {
    cartDispatch(changeProductQuantityAction(product, quantity));
  };

  const handleChangeAddress = (data: FormActionAddressPayload) => {
    // formDispatch(changeAddressAction(data));

    console.log(data);
  };

  useEffect(() => {
    saveToLocalStorage('cartData', cartState);
  }, [cartState]);

  const orderContextValue: OrderContextType = {
    cart: {
      products,
      addToCart,
      removeFromCart,
      changeProductQuantityInCart
    },
    form: {
      data: formState.data,
      changeFormData: formState.changeFormData,
    }
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      {children}
    </OrderContext.Provider>
  );
};
