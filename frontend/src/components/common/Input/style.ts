import styled from "styled-components";
import { colors } from "../../../constants";

interface InputProps {
  $isValid: null | boolean;
}

export const Input = styled.input<InputProps>`
  color: #005459;
  width: 80%;
  min-height: 38px;
  background-color: #fff;
  display: block;
  border: 1px solid #d0d5dd;
  border-radius: 12px;
  border-color: ${({ $isValid }) =>
    $isValid ? colors.success : $isValid !== null ? colors.error : ""};
  margin-bottom: 0;
  padding: 8px 12px;
  text-align: center;
  font-family: Figtree, sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.25rem;
  transition: border-color 0.2s;
`;
