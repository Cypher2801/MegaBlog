import { useState } from 'react'
import './App.css'
import conf from './conf/conf'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authService from './appwrite/auth.js';
import { Footer, Header } from './components/index.js';
import { login , logout } from './store/authSlice.js';
import {Outlet} from 'react-router-dom'
function App() {
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData)
      dispatch(login({userData}));
      else
      dispatch(logout());
    })
    .finally(() => setLoading(false))
  }, [])
  if(loading) {
    return (
      <div className='w-full min-h-screen flex justify-center items-center content-between'>Loading...</div>
    )
  }
  return (
    <>
      <div className='min-h-screen flex flex-col flex-wrap content-between bg-gray-400 items-center'>
        <Header />
        <main className='w-full'>
            <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
