import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes"
import { useBasket } from "../hooks/basketManager"

export function Routes() {
    const { user } = useBasket();
    return (
        <BrowserRouter>
            <AppRoutes/> 
        </BrowserRouter>
)
}
