import { FormContextType } from "../../interfaces/formTypes";
import { FormAction } from "./actions";

export function formReducer(state: FormContextType, action: FormAction): FormContextType {
  switch (action.type) {
    case "CHANGE_ADDRESS": {

      console.log('change_address');     
      console.log(state);

    }
    
    default:
      return state;
  }
}