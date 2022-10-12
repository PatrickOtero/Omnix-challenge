import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { LayoutComponent } from "./layout";
import { FormContextProvider } from "./contexts/formContext";
import { OffersPage } from "./pages/OffersPage";

export function Router() {
    
    return (
        <FormContextProvider>
            <Routes>
                <Route path="/" element={<LayoutComponent/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/offers" element={<OffersPage/>}/>
                </Route>
            </Routes>
        </FormContextProvider>
    )
}