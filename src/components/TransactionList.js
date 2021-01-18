import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            {transactions.length !== 0 ? (
            <ul className="list">
                {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
            </ul>) :
            <p>Add a new transaction</p>}
        </div>
    )
}
