import { useState } from 'react';
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { GroupContainer, HeaderGroup } from '../../styles';
import { PaymentOption } from './PaymentOption';
import { PaymentMethodsList } from './styles';

const paymentOptions = [
  { id: 'creditCard', icon: <CreditCard size={16} weight="thin" />, name: 'Cartão de crédito' },
  { id: 'debitCard', icon: <Bank size={16} weight="thin" />, name: 'Cartão de débito' },
  { id: 'cash', icon: <Money size={16} weight="thin" />, name: 'Dinheiro' },
];

export function PaymentForm() {
  const [selectedOption, setSelectedOption] = useState("creditCard");

  const handleOptionClick = (id: string) => {
    setSelectedOption(id);
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
        {paymentOptions.map((option) => (
          <li key={option.id}>
            <PaymentOption
              icon={option.icon}
              name={option.name}
              isSelected={selectedOption === option.id}
              onClick={() => handleOptionClick(option.id)}
            />
          </li>
        ))}
      </PaymentMethodsList>
    </GroupContainer>
  );
}
