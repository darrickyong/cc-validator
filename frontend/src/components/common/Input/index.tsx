import * as S from "./style";

interface InputProps {
  isValid: null | boolean;
  placeholder?: string;
  value: string;
  onChange: (e: string) => void;
}

const Input = ({ isValid, placeholder = "", onChange, value }: InputProps) => {
  return (
    <S.Input
      autoFocus
      $isValid={isValid}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
