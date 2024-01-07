export interface AddressType {
    street: string;
    postalCode: string;
    number: string;
    complement?: string;
    city: string;
    state: string;
    neighborhood: string;
  }

  export type PaymentMethod = 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro';
  
  export interface FormDataType {
    address: AddressType;
    paymentMethodSelected: PaymentMethod;
  }
  
  export interface FormContextType {
    data: FormDataType;
    changeFormData: (inputName: string, value: string) => void;
    changePaymentMethod: (paymentMethod: PaymentMethod) => void;
  }