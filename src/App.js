import React from 'react';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpenses} from './components/IncomeExpenses'
import {TansactionList} from './components/TansactionList'
import {AddTransaction} from './components/AddTransaction'
import './App.css';
import {GlobalProvider} from './context/GlobalState'


function App() {
  return (
    <GlobalProvider >
      <div className = "container">
        <Header/>
        <Balance />
        <IncomeExpenses/>
        <TansactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
