import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Menu } from "../componnents/menus/menu"
import { Home } from "../pages/basic/home"
import { Contact } from "../pages/basic/contact"
import { About } from "../pages/basic/about"
import { Dnts } from "../pages/basic/donations"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Menu></Menu>}>
                    <Route path="/donations" element={<Dnts />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}