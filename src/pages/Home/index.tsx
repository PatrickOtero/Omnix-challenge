import { TextField } from "@mui/material";
import useFormContext from "../../hooks/Form/useFormContext";
import { FormBody, FormContainer, HomeContainer} from "./home.style";
import { Button } from "@mui/material"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const { handleGetUserAddress, setCpfInput, cpfInput, apiError, apiFailed, setApiError } = useFormContext();

    useEffect(() => {
      setApiError("")
    }, [])

    const navigate = useNavigate();

    const handleMoveToOffers = () => {
        if (!apiFailed) {
            navigate("/offers")
        } else {
            navigate("/")
        }
    }

    useEffect(() => {
        handleMoveToOffers();
    }, [apiFailed])

    const handleFormSubmit = (e: any) => {
        e.preventDefault();

        handleGetUserAddress();
    }

    return (
        <HomeContainer>
            <h1>Bem-vindo!</h1>
            <b className="home-info info1">Por favor</b>
            <b className="home-info info2">Insira seu cpf no respectivo campo</b>
            <b className="home-info info3">Para que possamos</b>
            <b className="home-info info4">trazer planos personalizados</b>
            <b className="home-info info5">de internet para você!</b>
            <FormContainer>
                <FormBody onSubmit={handleFormSubmit}>
                    <TextField value={cpfInput} onChange={(e) => setCpfInput(e.target.value)} variant="standard" label="CEP" />
                    <Button type="submit">Buscar</Button>
                </FormBody>
            </FormContainer>
            {apiError && <b className="api-error-home">{apiError}</b>}
        </HomeContainer>
    );
}