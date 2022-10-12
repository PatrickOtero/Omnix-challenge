import { Dispatch, ReactNode, SetStateAction } from "react";

export type ICompProps = {
    children: ReactNode;
  };

export interface IFormContext {
  handleGetUserAddress: () => Promise<void>

  setApiError: Dispatch<SetStateAction<any>>;
  apiError: any;

  setApiFailed: Dispatch<SetStateAction<boolean>>;
  apiFailed: boolean;

  setCpfInput: Dispatch<SetStateAction<string>>;
  cpfInput: string;

  setDistrict: Dispatch<SetStateAction<string | undefined>>;
  district: string | undefined;
  setCep: Dispatch<SetStateAction<string | undefined>>;
  cep: string | undefined;
  setCity: Dispatch<SetStateAction<string | undefined>>;
  city: string | undefined;
  setEstate: Dispatch<SetStateAction<string | undefined>>;
  estate: string | undefined;
}