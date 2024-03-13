import React from 'react'
import './App.css';
import './components/style/main-section.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './components/pages/Dashboard';
import Bank from './components/pages/Bank';
import BankAccount from './components/pages/BankAccount';
import FixedDeposit from './components/pages/FixedDeposit';
import RecurringDeposite from './components/pages/RecurringDeposite';
import Ppf from './components/pages/Ppf';
import TaxesPaid from './components/pages/TaxesPaid';
import UploadStatements from './components/pages/UploadStatements';

export default function Layout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="main-section">
          <Sidebar />
          <Routes>
          <Route exact path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/bank" element={<Bank />}></Route>
            <Route path="/bankaccount" element={<BankAccount />}></Route>
            <Route path="/fixeddeposite" element={<FixedDeposit />}></Route>
            <Route path="/recurringdeposite" element={<RecurringDeposite />}></Route>
            <Route path="/ppf" element={<Ppf />}></Route>
            <Route path="/taxespaid" element={<TaxesPaid />}></Route>
            <Route path="/uploadstatements" element={<UploadStatements />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}
