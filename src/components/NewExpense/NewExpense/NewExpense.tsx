import React, { FC, useState } from 'react';
import ExpenseForm, { IExpenseFormData } from '../ExpenseForm/ExpenseForm';
import "./NewExpense.css"
import { IExpenseItem } from '../../Expense/ExpenseItem/ExpenseItem';


export type NewExpenseProps = {
    addExpense: (expense: IExpenseItem) => void;
}

const NewExpense: FC<NewExpenseProps> = ({ addExpense }) => {
    const [isEdit, setIsEdit] = useState(false);

    const saveDataHandler = (data: IExpenseFormData) => {
        addExpense({
            ...data,
            id: Math.random().toString(),
            date: new Date(data.date)
        })
        setIsEdit(false);
    }

    const startEditHandler = () => setIsEdit(true);
    const stopEditHandler = () => setIsEdit(false);

    return (
        <div className="new-expense">
            {!isEdit ?
                <button onClick={startEditHandler}>Add New Expense</button> :
                <ExpenseForm onSaveData={saveDataHandler} onStopEdit={stopEditHandler}/>
            }
        </div>);
}

export default NewExpense;
