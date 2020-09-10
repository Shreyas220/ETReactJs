import React, { useContext } from 'react';
import { Transaction } from './Transaction'
import { GlobalContext } from '../context/GlobalState';

export const TansactionList = () => {

    const  { transactions } = useContext(GlobalContext);
//
    return (

        <div>
            <h3>History</h3>
            <ul  className="list">
               
                    {transactions.map(transaction => (<Transaction key={transactions.id} transaction = {transaction}/>))}
               
            </ul>
        </div>
    )
}
