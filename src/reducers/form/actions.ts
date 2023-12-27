import { FormDataType } from "../../interfaces/formTypes";

export interface FormActionAddressPayload {
    street?: string;
    postalCode?: string;
    number?: string;
    complement?: string;
    city?: string;
    state?: string;
}

export interface FormAddressAction {
    type: FormActionTypes;
    payload: FormActionAddressPayload;
}

export interface FormAction {
    type: FormActionTypes;
    payload: FormDataType;
}

export type FormActionTypes = "CHANGE_ADDRESS";

export const changeAddressAction= (type: FormActionTypes, payload: FormActionAddressPayload): FormAddressAction => {
    return {
        type,
        payload,
    };
};
  