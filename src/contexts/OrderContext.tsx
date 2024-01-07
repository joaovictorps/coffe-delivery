import React, { ReactNode, createContext, useReducer, useEffect } from "react";
import { CartContextType, ProductType } from "../interfaces/cartTypes";
import { FormContextType, FormDataType, PaymentMethod } from "../interfaces/formTypes";
import { cartReducer } from "../reducers/cart/reducer";
import { formReducer } from "../reducers/form/reducer";
import { addToCartAction, changeProductQuantityAction, removeFromCartAction } from "../reducers/cart/actions";
import { changeAddressAction, changePaymentMethodAction } from "../reducers/form/actions";
import { saveToLocalStorage, loadFromLocalStorage } from "../utils/localStorage";

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

  const initialFormState = {
    data: loadFromLocalStorage('formData', {
      address: {
        street: "",
        postalCode: "",
        number: "",
        complement: "",
        city: "",
        state: "",
      },
      paymentMethodSelected: "Cartão de crédito",
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

  const changePaymentMethod = (paymentSelected: PaymentMethod) => {
    formDispatch(changePaymentMethodAction(paymentSelected))
  }

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
      changePaymentMethod
    }
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      {children}
    </OrderContext.Provider>
  );
};
