import React, { ReactNode, createContext, useReducer, useEffect } from "react";
import { CartContextType, ProductType } from "../interfaces/cartTypes";
import { FormContextType, FormDataType } from "../interfaces/formTypes";
import { cartReducer } from "../reducers/cart/reducer";
import { formReducer } from "../reducers/form/reducer";
import { addToCartAction, changeProductQuantityAction, removeFromCartAction } from "../reducers/cart/actions";
import { changeAddressAction } from "../reducers/form/actions";
import { saveToLocalStorage, loadFromLocalStorage } from "../utils/localStorage";

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextType {
  cart: CartContextType;
  form: FormContextType;
}

interface OrderContextProviderProps {
  children: ReactNode;
}

interface InitialFormStateType {
  data: FormDataType;
  changeFormData: (inputName: string, value: string) => void;
}

export const OrderContextProvider = ({ children }: OrderContextProviderProps) => {
  const initialCartState: CartContextType = loadFromLocalStorage('cartData', {
    products: [],
  }) as CartContextType;

  const initialFormState: InitialFormStateType = {
    data: loadFromLocalStorage('formData', {
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
    }),
  } as FormContextType;

  const [cartState, cartDispatch] = useReducer(
    cartReducer,
    initialCartState
  );

  const [formState, formDispatch] = useReducer(
    formReducer,
    initialFormState
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

  const changeFormData = (inputName: string, value: string) => {
    formDispatch(changeAddressAction({ inputName, value }));
  };

  useEffect(() => {
    saveToLocalStorage('cartData', cartState);
    saveToLocalStorage('formData', formState.data);
  }, [cartState, formState]);

  const orderContextValue: OrderContextType = {
    cart: {
      products,
      addToCart,
      removeFromCart,
      changeProductQuantityInCart
    },
    form: {
      data: formState.data,
      changeFormData,
    }
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      {children}
    </OrderContext.Provider>
  );
};
