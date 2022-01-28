import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Routes } from './routes'

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#111" />
      <Routes />
    </>
  )
}
