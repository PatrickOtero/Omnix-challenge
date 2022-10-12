import { OfferCardContainer } from "./card.style";
import { Button } from "@mui/material"
import { IOfferCard } from "../../../@Types/components/OfferCard";

export const OfferCard = ({offerName, speed, upload, price}: IOfferCard) => {

    return (
        <OfferCardContainer>
            <div className="offer-card-title-container">
                <b className="offer-card-title">{offerName}</b>
            </div>
            <div className="card-top cardPart">
                <div className="offer-speed-container">
                    <b className="offer-speed primary-text">{speed}</b>
                    <b className="offer-desc primary-text">MBPS</b>
                </div>
                <b className="offer-speed-title">VELOCIDADE</b>
            </div>
            <div className="card-middle cardPart">
                <div className="offer-upload-container">
                    <b className="offer-upload-speed primary-text">{upload}</b>
                    <b className="offer-upload-desc primary-text">MBPS</b>
                </div>
                <b className="offer-upload-title">UPLOAD</b>
            </div>
            <div className="card-bottom cardPart">
                <div className="offer-price-container">
                    <b className="offer-info primary-text">R$</b>
                    <b className="offer-price primary-text"> {price}</b>
                    <b className="offer-cents primary-text">,00</b>
                </div>
                <b className="offer-price-title">VALOR</b>
            </div>
            <div className="card-button-container cardPart">
                <Button>Contratar</Button>
            </div>
        </OfferCardContainer>
    );
}