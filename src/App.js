import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Protect from "./pages/Protect";

const App = () => {
    return (
        <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                {window.location.pathname === "/Login" ? undefined : <Header/>}{""}
                    <Routes>
                        <Route path="/Login" element={<Login/>}/>
                        <Route path="/Signup" element={<Signup/>} />
                        <Route path="/" element={<Protect/>}>
                        <Route path="/" exact element={<Feed />} />
                        <Route
                            path="/searchResult/:searchQuery"
                            element={<SearchResult />}
                        />
                        <Route path="/video/:id" element={<VideoDetails
                         />} />
                         </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    );
};

export default App;
