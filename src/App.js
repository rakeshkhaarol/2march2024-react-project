import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}></Route>
                        <Route path="login" element={<Login/>}></Route>
                        <Route path="about" element={<About/>}></Route>
                        <Route path="contact" element={<Contact/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;