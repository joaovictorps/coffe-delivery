// reducer.ts
import { FormContextType } from "../../interfaces/formTypes";
import { FormActionTypes, FormAddressAction } from "./actions";

export function formReducer(state: FormContextType, action: FormAddressAction): FormContextType {
  switch (action.type) {
    case FormActionTypes.CHANGE_ADDRESS:
      const { inputName, value } = action.payload;

      console.log(state);
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
    default:
      return state;
  }
}
