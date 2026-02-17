"use client";

import React from 'react'
import MainPage from './Main/page';
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



