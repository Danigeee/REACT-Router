import React from 'react'

import { Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MarvelPage } from '../pages/MarvelPage';
import { DCPage } from '../pages/DCPage';
import { HeroPage } from '../pages/HeroPage';
import { PaginaBusqueda } from '../pages/PaginaBusqueda';



export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="search" element={<PaginaBusqueda />} />
        <Route path="hero/:heroId" element={<HeroPage />} />

        <Route path="/*" element={<LoginPage />} />
    
    </Routes>
  )
}
