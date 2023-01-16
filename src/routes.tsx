import React from 'react';

import { BrowserRouter, Route, Routes, RoutesProps } from 'react-router-dom';
import { Header } from './components/Header';
import { ConfirmationOrder } from './pages/ConfirmationOrder';
import { Home } from './pages/Home';
import { Order } from './pages/Order';

export function Router({ children, location }: RoutesProps) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<Order />} />
        <Route path='/confirm' element={<ConfirmationOrder />} />
      </Routes>
    </BrowserRouter>
  );
}
