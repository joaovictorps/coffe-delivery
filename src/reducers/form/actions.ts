import { PaymentMethod } from "../../interfaces/formTypes";

export enum FormActionTypes {
    CHANGE_ADDRESS = "CHANGE_ADDRESS",
    CHANGE_PAYMENT_METHOD = "CHANGE_PAYMENT_METHOD"
  }
  
  export interface FormActionAddressPayload {
    inputName: string;
    value: string;
  }
  
  export interface FormAddressAction {
    type: FormActionTypes.CHANGE_ADDRESS;
    payload: FormActionAddressPayload;
  }

  export interface FormPaymentMethodAction {
    type: FormActionTypes.CHANGE_PAYMENT_METHOD;
    payload: PaymentMethod;
  }
  
  export const changeAddressAction = (payload: FormActionAddressPayload): FormAddressAction => ({
    type: FormActionTypes.CHANGE_ADDRESS,
    payload,
  });

  export const changePaymentMethodAction = (payload: PaymentMethod): FormPaymentMethodAction => ({
    type: FormActionTypes.CHANGE_PAYMENT_METHOD,
    payload,
  });
  