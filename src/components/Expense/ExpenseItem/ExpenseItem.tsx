import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';
import Card from '../../UI/Card/Card';
import { FC } from 'react';
import { IExpenseFormData } from '../../NewExpense/ExpenseForm/ExpenseForm';
import Button from "../../UI/Button/Button";

export interface IExpenseItem {
    id?: string;
    date: Date;
    title: string;
    amount: number;
}

export interface ExpenseItemProps extends IExpenseItem {
    onRemoveItem: (id: string) => void;
}


const ExpenseItem: FC<ExpenseItemProps> = ({title, amount, date, id, onRemoveItem}) => {
    const removeItemHandler = () => onRemoveItem(id!);

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <Button onClick={removeItemHandler}>Remove</Button>
        </Card>
    );
}

export default ExpenseItem;
