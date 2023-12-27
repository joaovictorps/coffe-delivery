import { InputContainer } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputSize: "small" | "medium" | 'large' | 'extra-large'
}

export function Input(props: InputProps) {

    return <InputContainer className={props.inputSize}  {...props} /> 
}