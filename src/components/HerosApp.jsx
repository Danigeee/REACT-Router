import React from 'react'
import { AppRouter } from '../routes/AppRouter';
import { MainApp } from './MainApp';

export const HerosApp = () => {
  return (
    <main className='container mt-3'>
    <h1>HerosApp</h1>
    <MainApp />
    <AppRouter />
    

    </main>
  )
}
