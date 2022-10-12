import styled from "styled-components";
import Box from "@mui/material/Box";

export const OffersPageContainer = styled(Box)`
    
    @keyframes hoverToRight {
        from {
            opacity: 0;
            margin-left: -50rem;
        }
        to {
            opacity: 1;
            margin-right: 0;
        }
    }

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .offer-page-button {
        animation: hoverToRight 2000ms;
        position: absolute;

        bottom: 10rem;
        right: 10rem;

        width: 25rem;
        height: 5rem;

        background-color: #8ba7d1;
        font-size: 2rem;
        color: #000000;

        border-radius: 3rem;

        &:hover {
            background-color: #4780d4;
            color: #ffffff;
        }
    }
`

export const OffersPageTextContainer = styled("aside")`

    position: absolute;

    width: 80rem;
    height: 80rem;

    display: flex;
    flex-direction: column;

    justify-content: center;

    left: 5rem;
    top: 9rem;

    .offer-page-text {
        animation: hoverToRight 1000ms forwards;
        position: absolute;

        left: 0rem;
        top: 0rem;

        opacity: 0;

        font-size: 5rem;

        color: #3a5ba3ff;
    }

    .t1 {
        animation-delay: 1s;
        font-size: 8rem;
        top: 0rem;
    }
    .t2 {
        animation-delay: 1.3s;
        top: 25rem;
    }
    .t3 {
        animation-delay: 1.6s;
        top: 30rem;
    }
    .t4 {
        animation-delay: 1.9s;
        top: 35rem;
    }
    .t5 {
        animation-delay: 2.2s;
        top: 40rem;
    }
    .t6 {
        animation-delay: 2.5s;
        top: 45rem;
    }
`

export const OfferCardsAndInfoContainer = styled("main")`
    display: flex;
    flex-direction: column;

    justify-content: center;

    width: 100rem;
    height: 90rem;

    margin-left: 20rem;
    margin-top: 5rem;

    .offer-cards-container {
        display: flex;
        gap: 10rem;

        width: 100%;
    }

    .address-info-container {
        display: flex;

        gap: 5rem;
        border-radius: 2rem;
        box-shadow: 1px 1px 10px 1px #000000;

        width: 80rem;
        height: 12rem;
        margin-top: 5rem;

        background-color: #a8abc5ff;

        padding: 2rem;

        .address-info-divider {
            height: 8rem;
            width: 0.2rem;

            background-color: #172df3;
        }

        .address-title {
            font-size: 2.5rem;
        }

        .address-value {
            font-size: 3rem;
            margin-left: 1rem;

            color: #172df3;
        }

    }
`