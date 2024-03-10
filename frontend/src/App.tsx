import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Layout, PrivateRoute} from './components/layout';
import SignUpPage from './pages/auth/signUpPage';
import SignInPage from './pages/auth/signInPage';
import HomePage from './pages/HomePage';
import { MainContextProvider } from './context/MainContext';
import AttemptPage from './pages/attempt';
import AssessmentPage from './pages/assessment';
import UserHistoryPage from './pages/userHistory';

function App() {
  return (
    <div className="App" data-bs-theme="light">
      <BrowserRouter>
        <MainContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/signup' element={<SignUpPage />} />
              <Route path='/signin' element={<SignInPage />} />
              <Route element={<PrivateRoute/>}>
                <Route path='/' element={<HomePage />} />
                <Route path='/attempt/:Id' element={<AttemptPage/>}/>
                <Route path='/assessment/:Id' element={<AssessmentPage/>}/>
                <Route path='/history' element={<UserHistoryPage/>}/>
              </Route>
              <Route path='*' element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </MainContextProvider>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
