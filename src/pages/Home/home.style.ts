import { Box } from "@mui/system";
import styled from "styled-components";

export const HomeContainer = styled(Box)`
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

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    h1 {
        position: absolute;

        animation: hoverToRight 2000ms;

        top: 20rem;
        left: 15rem;

        font-size: 8rem;
        color: #3a5ba3ff;
    }

    b {
        position: absolute;

        font-size: 4rem;
        color: #3a5ba3ff;
    }

    .info1 {
        opacity: 0;

        animation: hoverToRight 2000ms forwards;
        animation-delay: 1s;
        top: 34rem;
        left: 15rem;
    }

    .info2 {
        opacity: 0;

        animation: hoverToRight 2000ms forwards;
        animation-delay: 2s;
        top: 38rem;
        left: 15rem;
    }

    .info3 {
        opacity: 0;

        animation: hoverToRight 2000ms forwards;
        animation-delay: 3s;
        top: 42rem;
        left: 15rem;
    }

    .info4 {
        opacity: 0;

        animation: hoverToRight 2000ms forwards;
        animation-delay: 4s;
        top: 46rem;
        left: 15rem;
    }

    .info5 {
        opacity: 0;

        animation: hoverToRight 2000ms forwards;
        animation-delay: 5s;
        top: 50rem;
        left: 15rem;
    }

    .api-error-home {
        animation: hoverToRight 1000ms forwards;

        position: absolute;
        
        z-index: 1;

        top: 69rem;
        left: 16rem;

        color: #fc00009c;

        font-size: 2.5rem;
    }
`

export const FormContainer = styled(Box)`
    opacity: 0;

    animation: hoverToRight 2000ms forwards;

    position: absolute;

    top: 58rem;
    left: 15rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem;

    border-radius: 2rem;
    background-color: #ffffff60;
    box-shadow: 1px 1px 30px 1px black;

    width: 50rem;
    height: 10rem;
`

export const FormBody = styled("form")`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 1rem;
    width: 100%;

    input {
        width: 35rem;
        height: 5rem;

        font-size: 3rem;
    }

    label {
        font-size: 3rem;
    }

    button {
        padding: 2rem;

        background-color: #88cab900;
        color: #000000;

        font-size: 2rem;

        &:hover {
            background-color: #3a5ba396;;
            color: #ffffff;
        }
    }
`