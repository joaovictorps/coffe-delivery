import { useContext, useState } from 'react';
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { GroupContainer, HeaderGroup } from '../../styles';
import { PaymentOption } from './PaymentOption';
import { PaymentMethodsList } from './styles';
import { PaymentMethod } from '../../../../interfaces/formTypes';
import { OrderContext } from '../../../../contexts/OrderContext';

interface OptionType {
  id: string;
  icon: JSX.Element;
  name: PaymentMethod;
}

const paymentOptions: OptionType[] = [
  { id: 'creditCard', icon: <CreditCard size={16} weight="thin" />, name: 'Cartão de crédito' },
  { id: 'debitCard', icon: <Bank size={16} weight="thin" />, name: 'Cartão de débito' },
  { id: 'cash', icon: <Money size={16} weight="thin" />, name: 'Dinheiro' },
];

export function PaymentForm() {
  const [selectedOption, setSelectedOption] = useState<PaymentMethod>('Cartão de crédito');

  const {  form } = useContext(OrderContext);

  const {changePaymentMethod} = form

  const handleOptionClick = (name: PaymentMethod) => {

    if(name == selectedOption) return;
    
    setSelectedOption(name);
    changePaymentMethod(name);
  };

  return (
    <GroupContainer>
      <HeaderGroup color="purple" className="header">
        <CurrencyDollar size={22} weight="thin" />
        <div>
          <h2>Pagamento</h2>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </HeaderGroup>

      <PaymentMethodsList className="payment-methods">
        {paymentOptions.map((option: OptionType) => (
          <li key={option.id}>
            <PaymentOption
              icon={option.icon}
              name={option.name}
              isSelected={selectedOption === option.name}
              onClick={() => handleOptionClick(option.name)}
            />
          </li>
        ))}
      </PaymentMethodsList>
    </GroupContainer>
  );
}
