import styled from "styled-components";
import Box from "@mui/material/Box"

export const OfferCardContainer = styled(Box)`
    @keyframes hoverDown {
        from {
            opacity: 0;
            margin-bottom: 50rem;
        }

        to {
            opacity: 1;
            margin-bottom: 0;
        }
    }
    animation: hoverDown 2000ms;
    transition: 300ms;

    width: 25rem;
    height: 40rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    
    background-color: #a8abc5ff;

    border-radius: 2rem;
    box-shadow: 1px 1px 10px 1px #000000;

    .primary-text {
        color: #172df3;
    }

    .cardPart {
        border-top: 3px solid #ffffff;
    }

    .offer-card-title-container {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 8rem;

        background-color: #a8abc5ff;
        border-top-right-radius: 2rem;
        border-top-left-radius: 2rem;
        
        .offer-card-title {
            font-size: 2rem;
        }
    }

    .card-top {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        height: 15rem;

        .offer-speed-title {
            font-size: 3rem;
        }

        .offer-speed-container {
            display: flex;
            align-items: center;

            gap: 1rem;

            .offer-speed {
                font-size: 5rem;
            }

            .offer-desc {
                font-size: 2rem;
            }
        }
    }

    .card-middle {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        height: 15rem;
        
        .offer-upload-title {
            font-size: 3rem;
        }

        .offer-upload-container {
            display: flex;
            align-items: center;

            gap: 1rem;

            .offer-upload-speed {
                font-size: 5rem;
            }

            .offer-upload-desc {
                font-size: 2rem;
            }
        }
    }

    .card-bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 15rem;

        .offer-price-container {
            display: flex;
            align-items: center;

            .offer-info {
                font-size: 2rem;           
            }

            .offer-price {
                font-size: 5rem;

                margin-left: 1rem;            
            }

            .offer-cents {
                font-size: 2rem;
            }
        }

        .offer-price-title {
            font-size: 3rem;
        }
    }

    .card-button-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 10rem;
            
            button {
                padding: 1rem;

                font-size: 2rem;
                border-radius: 2rem;

                color: #172df3;

                &:hover {
                    background-color: #172df3;
                    color: #ffffff;
                }
            }
        }

        &:hover {
        transform: scale(1.1);

        cursor: pointer;
        }
`