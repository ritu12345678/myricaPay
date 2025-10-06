import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeProvider } from "@mui/material";
import './App.scss'
import Layout from "./layout/Layout"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'
import theme from './theme/MaterialTheme'
import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // theme
import 'primereact/resources/primereact.min.css';                  // core CSS
import 'primeicons/primeicons.css';                                // icons
import 'primeflex/primeflex.css';
import './style/theme.scss'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
