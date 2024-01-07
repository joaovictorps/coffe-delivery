export interface AddressType {
    street: string;
    postalCode: string;
    number: string;
    complement?: string;
    city: string;
    state: string;
    neighborhood: string;
}

export interface PaymentMethodType {
    name: string;
}

export interface FormDataType {
    address: AddressType;
    paymentMethodSelected: PaymentMethodType;
}

export interface FormContextType {
    data: FormDataType;
    changeFormData: (inputName: string, value: string) => void;
}