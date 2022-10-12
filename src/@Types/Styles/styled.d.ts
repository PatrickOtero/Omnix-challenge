import "styled-components";
import { lightTheme } from "../../Styles/themes/lightTheme";

type ThemeType = typeof lightTheme;

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
}