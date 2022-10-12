import { useState } from "react"
import { useLocalStorage } from "react-use";
import { api } from "../../services/axios";

const useFormContextProvider = () => {
    const [cpfInput, setCpfInput] = useState<string>("");
    const [ apiError, setApiError ] = useState<string>("")
    const [ apiFailed, setApiFailed ] = useState<boolean>(true)

    const [ district, setDistrict ] = useLocalStorage<string>("Bairro", "");
    const [ cep, setCep ] = useLocalStorage<string>("Cep", "");
    const [ city, setCity ] = useLocalStorage<string>("Cidade", "");
    const [ estate, setEstate ] = useLocalStorage<string>("Estado", "");

    const handleGetUserAddress = async() => {
      setApiError("");

      if (!cpfInput.length) {
        setApiError("Por favor, preencha o campo CEP")
        setApiFailed(true);
        return
      }

      if (cpfInput.length > 8 || cpfInput.length < 8) {
        setApiError("Código de CEP inválido")
        setApiFailed(true);
        return
      }

      try {
        const response = await api.get(`/${cpfInput}/json`)

        if (response.data.erro) {
          setApiError("CEP inexistente")
          setApiFailed(true);
        } else {
          setApiFailed(false);
          setDistrict(response.data.bairro);
          setCep(response.data.cep);
          setCity(response.data.localidade);
          setEstate(response.data.uf);
        }

      } catch (error: any) {
         console.log(error.response.data)
         setApiFailed(true);
      }
    }

  return {
    handleGetUserAddress,
    setApiError,
    apiError,
    setApiFailed,
    apiFailed,
    setCpfInput,
    cpfInput,

    setDistrict,
    district,
    setCep,
    cep,
    setCity,
    city,
    setEstate,
    estate
  }
}

export default useFormContextProvider