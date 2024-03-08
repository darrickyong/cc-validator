import { useEffect, useState } from "react";
import Input from "../../../components/common/Input";
import { INPUT_PLACEHOLDER } from "../../../constants";
import * as S from "./style";
import { useValidateCC } from "../requests";

const ValidatorForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [isValid, setIsValid] = useState<null | boolean>(null);
  const [message, setMessage] = useState("");

  const { data, isLoading, refetch } = useValidateCC(cardNumber);

  useEffect(() => {
    if (data) {
      const { isValid: fetchValid, message: fetchMessage } = data;
      setIsValid(fetchValid);
      setMessage(fetchMessage);
    }
  }, [data]);

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <S.ValidatorForm onSubmit={onFormSubmit} $isValid={isValid}>
      <h1>Credit Card Validator</h1>
      <Input
        isValid={isValid}
        placeholder={INPUT_PLACEHOLDER}
        onChange={setCardNumber}
        value={cardNumber}
      />
      {message.length ? (
        <div className="validation-message">{message}</div>
      ) : null}
      <button disabled={isLoading}>
        {isLoading ? "Validating..." : "Validate"}
      </button>
    </S.ValidatorForm>
  );
};

export default ValidatorForm;
