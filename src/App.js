import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
import Protect from "./pages/singIn/Protect";
import Register from "./pages/singIn/Register";
import SignIn from "./pages/singIn/SignIn";

const App = () => {
    return (
        <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                    <Header/>
                    <Routes>
                        <Route path="/SignIn" element={<SignIn/>}/>
                        <Route path="/Register" element={<Register/>}/>
                        <Route path="/" exact element={<Feed />} />
                        <Route path="" element={<Protect/>}>
                            <Route path="/searchResult/:searchQuery" element={<SearchResult />}/>
                            <Route path="/video/:id" element={<VideoDetails/>} />
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    );
};

export default App;
