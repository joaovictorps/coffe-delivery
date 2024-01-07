import { MapPinLine } from "phosphor-react";
import { GroupContainer, HeaderGroup } from "../../styles";
import { Input } from "../../../../components/Input";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";

export function AddressForm() {

    const { form } = useContext(OrderContext);

    const { data, changeFormData } = form

    const handleChangeFormData = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        changeFormData(name, value);
    };

    const [localFormData, setLocalFormData] = useState(data);

    useEffect(() => {
        setLocalFormData(data);
    }, [data]);

    return (
        <GroupContainer>
            <HeaderGroup color="yellowDark">
                <MapPinLine size={22} weight="thin" />
                <div>
                    <h2>Endereço de Entrega</h2>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </HeaderGroup>

            <div className='inputs-container'>
                <Input
                    inputSize="medium"
                    name='postalCode'
                    placeholder="CEP"
                    required
                    value={localFormData.address.postalCode}
                    onChange={handleChangeFormData}
                    />

                <Input
                    inputSize="extra-large"
                    name='street'
                    placeholder="Rua"
                    required
                    value={localFormData.address.street}
                    onChange={handleChangeFormData}
                    />

                <Input
                    inputSize="medium"
                    name='number'
                    placeholder="Número"
                    type="number"
                    required
                    value={localFormData.address.number}
                    onChange={handleChangeFormData}
                    />

                <Input
                    inputSize="large"
                    name='complement'
                    value={localFormData.address.complement}
                    placeholder="Complemento"
                    onChange={handleChangeFormData}
                    />

                <Input
                    inputSize="medium"
                    name="neighborhood"
                    placeholder="Bairro"
                    required
                    value={localFormData.address.neighborhood}
                    onChange={handleChangeFormData}
                    />

                <Input
                    inputSize="large"
                    name="city"
                    required
                    placeholder="Cidade"
                    value={localFormData.address.city}
                    onChange={handleChangeFormData}
                    />

                <Input
                    inputSize="small"
                    name="state"
                    placeholder="UF"
                    required
                    value={localFormData.address.state}
                    onChange={handleChangeFormData}
                />

            </div>
        </GroupContainer>
    )
}