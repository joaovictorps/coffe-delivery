export enum FormActionTypes {
    CHANGE_ADDRESS = "CHANGE_ADDRESS",
  }
  
  export interface FormActionAddressPayload {
    inputName: string;
    value: string;
  }
  
  export interface FormAddressAction {
    type: FormActionTypes.CHANGE_ADDRESS;
    payload: FormActionAddressPayload;
  }
  
  export const changeAddressAction = (payload: FormActionAddressPayload): FormAddressAction => ({
    type: FormActionTypes.CHANGE_ADDRESS,
    payload,
  });
  