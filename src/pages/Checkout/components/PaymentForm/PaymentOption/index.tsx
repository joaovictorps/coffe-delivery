import { PaymentOptionContainer } from "./styles";

interface PaymentOptionProps {
    icon: React.ReactNode;
    name: string;
    isSelected?: boolean;
    onClick: () => void;
}

export function PaymentOption (props: PaymentOptionProps) {

    const {icon, name, isSelected} = props

    return (
        <PaymentOptionContainer 
            type="button" 
            className={isSelected ? 'is-selected' : ''} 
            title={`Selecionar método de pagamento - ${name}`}
            {...props}
        >
            {icon} {name}
        </PaymentOptionContainer>
    )
}