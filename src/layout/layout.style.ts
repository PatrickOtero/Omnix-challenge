import { Box } from "@mui/system";
import styled from "styled-components";

export const LayoutContainer = styled(Box)`
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 0.3;
        }
    }

    @keyframes growIn {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    position: absolute;

    width: 100vw;
    height: 100vh;

    .background-image-layout {
        animation: fadeIn 4000ms;
        position: absolute;

        opacity: 0.3;

        width: 100%;
        height: 100%;

        z-index: -1;
    }
`

export const LayoutMain = styled(Box)`
    width: 100%;
    height: 100%;

    position: absolute;
    
    display: flex;
    flex-direction: column;

    justify-content: space-between;
`

export const LayoutHeader = styled("header")`
    position: absolute;

    padding: 1rem;

    width: 100vw;
    height: 8rem;

    background-color: #88cabaff;
    box-shadow: 1px 1px 30px 1px black;

    img {
        animation: growIn 1000ms;

        opacity: 1;

        position: absolute;
        z-index: 1;

        height: 15rem;
        width: 15rem;

        top: -0.6rem;
    }

    h1 {
        opacity: 0;
        animation: growIn 1000ms forwards 0.5s;

        position: absolute;
        left: 18rem;

        font-size: 5rem;
        color: #f6f9faff;
    }
`

export const LayoutBottom = styled("footer")`
    position: absolute;

    width: 100vw;
    height: 8rem;

    background-color: #88cabaff;
    box-shadow: 1px 1px 30px 1px black;  
    
    bottom: 0;
`