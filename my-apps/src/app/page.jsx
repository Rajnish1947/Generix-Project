"use client";

import React from 'react'
import MainPage from '../pages/Mainpage/page';
import { useTheme } from '@/Context/ThemeContext/page';
const page = () => {
  const { dark, setDark } = useTheme();
  return (
    <>
    <MainPage className={dark ? 'bg-black text-white' : ''} />
    </>
  )
}

export default page



