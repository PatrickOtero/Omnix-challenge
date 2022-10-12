import { Outlet } from "react-router-dom";
import { LayoutBottom, LayoutContainer, LayoutHeader, LayoutMain } from "./layout.style";
import familyBackground from "../assets/familysdsd.webp"
import geoNetLogo from "../assets/geonet.png"

export const LayoutComponent = () => {
    return (
        <LayoutContainer>
            <img className="background-image-layout" src={familyBackground} alt="Cadê o pessoal feliz?"/>
            <LayoutMain>
                <LayoutHeader>
                    <img src={geoNetLogo} alt="Logo do Desafio"/>
                    <h1>GeoNet</h1>
                </LayoutHeader>
                <LayoutBottom>

                </LayoutBottom>
            </LayoutMain>
            <Outlet/>
        </LayoutContainer>
    );
}