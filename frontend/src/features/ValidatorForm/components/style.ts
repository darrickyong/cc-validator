import styled from "styled-components";
import { colors } from "../../../constants";

interface FormProps {
  $isValid: null | boolean;
}

export const ValidatorForm = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  background-color: #fff;
  width: 100%;
  min-height: 300px;
  border-radius: 32px;
  margin-left: auto;
  padding: 32px;
  position: relative;

  .validation-message {
    color: ${({ $isValid }) =>
      $isValid ? colors.success : $isValid !== null ? colors.error : ""};
    width: 80%;
    text-align: center;
  }

  & button {
    border-radius: 16px;
    font-family: Figtree, sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.25rem;
    text-decoration: none;
    transition: background-color 0.2s, color 0.2s;
    padding: 20px;
    color: #fff;
    background-color: #f54fb0;
    border: none;

    &:hover {
      border-color: #646cff;
      cursor: pointer;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    & img {
      position: absolute;
    }
  }
`;
