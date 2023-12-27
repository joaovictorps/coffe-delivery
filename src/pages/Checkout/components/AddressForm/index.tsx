import { MapPinLine } from "phosphor-react";
import { GroupContainer, HeaderGroup } from "../../styles";
import { Input } from "../../../../components/Input";

export function AddressForm() {

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
                />

                <Input
                    inputSize="extra-large"
                    name='street'
                    placeholder="Rua"
                    required
                />

                <Input
                    inputSize="medium"
                    name='number'
                    placeholder="Número"
                    type="number"
                    required
                />

                <Input
                    inputSize="large"
                    name='complement'
                    placeholder="Complemento"
                />

                <Input
                    inputSize="medium"
                    name="neighbourhood"
                    placeholder="Bairro"
                    required
                />

                <Input
                    inputSize="large"
                    name="city"
                    required
                    placeholder="Cidade"
                />

                <Input
                    inputSize="small"
                    name="state"
                    placeholder="UF"
                    required
                />

            </div>
        </GroupContainer>
    )
}