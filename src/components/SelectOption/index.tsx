import { Minus, Plus } from "phosphor-react";
import { SelectOptionContainer } from "./styles";

interface SelectOptionProps {
    quantity: number;
    handleDecrease: () => void;
    handleIncrease: () => void;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SelectOption(props: SelectOptionProps) {
    const {quantity, handleIncrease, handleDecrease, handleChange, handleBlur} = props;

    return (
        <SelectOptionContainer>
            <button type="button" onClick={handleDecrease}>
                <Minus size={14} weight="thin" />
            </button>

            <input type="number" min={1} value={quantity} onBlur={handleBlur} onChange={handleChange} />

            <button type="button" onClick={handleIncrease}>
                <Plus size={14} weight="thin" />
            </button>
        </SelectOptionContainer>
    )
}