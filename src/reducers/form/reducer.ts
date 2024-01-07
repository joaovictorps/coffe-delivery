import { FormContextType } from "../../interfaces/formTypes";
import { FormActionTypes, FormAddressAction, FormPaymentMethodAction } from "./actions";

export function formReducer(state: FormContextType, action: FormAddressAction | FormPaymentMethodAction): FormContextType {
  switch (action.type) {
    case FormActionTypes.CHANGE_ADDRESS:
      const { inputName, value } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          address: {
            ...state.data.address,
            [inputName]: value,
          },
        },
      };

    case FormActionTypes.CHANGE_PAYMENT_METHOD:
      
    return {
        ...state,
        data: {
          ...state.data,
          paymentMethodSelected: action.payload,
        },
      };

    default:
      return state;
  }
}