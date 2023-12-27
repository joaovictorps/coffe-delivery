import { PaymentOptionContainer } from "./styles";

interface PaymentOptionProps {
    icon: React.ReactNode;
    name: string;
    isSelected?: boolean;
}

export function PaymentOption ({icon, name, isSelected}: PaymentOptionProps) {

    return (
        <PaymentOptionContainer 
            type="button" 
            className={isSelected ? 'is-selected' : ''} 
            title={`Selecionar método de pagamento - ${name}`}
        >
            {icon} {name}
        </PaymentOptionContainer>
    )
}