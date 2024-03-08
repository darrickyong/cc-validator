import axios from "axios";
import { useQuery } from "react-query";

const SERVER_URL = "http://localhost:5000/validator";

interface ValidateCC {
  isValid: boolean;
  message: string;
}

export const validateCC = async (number: string): Promise<ValidateCC> => {
  const url = `${SERVER_URL}?number=${number}`;
  const { data } = await axios(url);
  return data;
};

export const useValidateCC = (number: string) => {
  return useQuery([number], () => validateCC(number), { enabled: false });
};
