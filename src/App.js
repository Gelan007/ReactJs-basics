import React, {useEffect, useMemo, useState} from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <div>
            <Navbar/>
            <AppRouter/>
        </div>
    )
}

export default App;
