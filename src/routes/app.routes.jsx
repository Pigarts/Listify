import {Routes, Route} from "react-router-dom"

import { Home } from "../pages/Home" 
import { NewIten } from "../pages/NewIten"
import { ToDo } from "../pages/ToDo"
import { Goal } from "../pages/Goal"

export function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/todo" element={<ToDo/>} />
            <Route path="/goal" element={<Goal/>} />
            <Route path="/neewiten/:type" element={<NewIten/>} />

        </Routes>
    )
}