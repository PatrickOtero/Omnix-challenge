import { OfferCard } from "./OfferCard";
import { OfferCardsAndInfoContainer, OffersPageContainer, OffersPageTextContainer } from "./Offers.style";
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import useFormContext from "../../hooks/Form/useFormContext";

export const OffersPage = () => {

    const { setApiFailed, district, cep, city, estate } = useFormContext()
    const navigate = useNavigate();

    return (
        <OffersPageContainer>
            <OffersPageTextContainer>
                <b className="offer-page-text t1">Internet lenta?</b>
                <b className="offer-page-text t2">Confira</b>
                <b className="offer-page-text t3">nossos planos</b>
                <b className="offer-page-text t4">de fibra óptica</b>
                <b className="offer-page-text t5">para a sua</b>
                <b className="offer-page-text t6">região</b>
            </OffersPageTextContainer>
            <OfferCardsAndInfoContainer>
                <div className="offer-cards-container">
                    <OfferCard offerName="Plano Básico" speed="40" upload="4" price="45"/>
                    <OfferCard offerName="Plano Padrão" speed="60" upload="6" price="55"/>
                    <OfferCard offerName="Plano Premium" speed="120" upload="12" price="70"/>
                </div>

                <div className="address-info-container">
                    <div className="adress-container-left-side">
                        <div className="district-container">
                            <b className=" address-title">Bairro:</b>
                            <b className=" address-value">{district}</b>
                        </div>
                        <div className="Cep-container">
                            <b className=" address-title">CEP:</b>
                            <b className=" address-value">{cep}</b>
                        </div>
                    </div>
                    <div className="address-info-divider"></div>
                    <div className="adress-container-rght-side">
                        <div className="district-container">
                            <b className=" address-title">Cidade:</b>
                            <b className=" address-value">{city}</b>
                        </div>
                        <div className="Cep-container">
                            <b className=" address-title">Estado:</b>
                            <b className=" address-value">{estate}</b>
                        </div>
                    </div>
                </div>
            </OfferCardsAndInfoContainer>
            <Button onClick={() => {
                setApiFailed(true)
                navigate("/")
                }}className="offer-page-button">Ops, errei meu cep!</Button>
        </OffersPageContainer>
    );
}