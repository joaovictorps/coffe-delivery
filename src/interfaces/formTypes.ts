export interface AddressType {
    street: string;
    postalCode: string;
    number: string;
    complement?: string;
    city: string;
    state: string;
}

export interface PaymentMethodType {
    name: string;
}

export interface ClientType {
    name: string;
}

export interface FormDataType {
    address: AddressType;
    paymentMethodSelected: PaymentMethodType;
    client: ClientType;
}

export interface FormContextType {
    data: FormDataType;
    changeFormData: () => void;
}