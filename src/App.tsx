import React, { useState } from 'react';
import './App.css';
import { IExpenseItem } from './components/Expense/ExpenseItem/ExpenseItem';
import Expenses from './components/Expense/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense/NewExpense';

const App = () => {
    const DUMMY_EXPENSES: IExpenseItem[] = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = (expense: IExpenseItem) => {
        setExpenses((prevState) => [expense, ...prevState])
    }

    const removeItemHandler = (id: string) => {
        setExpenses((prevState) => prevState.filter(item => item.id !== id))
    }

    return (
        <div>
            <NewExpense addExpense={addExpenseHandler}/>
            <Expenses expenses={expenses} onRemoveItem={removeItemHandler}/>
        </div>
    );
}

export default App;
