import './ExpensesList.css';
import ExpenseItem, { IExpenseItem } from '../ExpenseItem/ExpenseItem';
import { FC } from 'react';

export type ExpensesListProps = {
    items: IExpenseItem[];
    onRemoveItem: (id: string) => void
}

const ExpensesList: FC<ExpensesListProps> = ({ items, onRemoveItem }) => {
    const removeItemHandler = (id: string) => onRemoveItem(id)
    if (!items.length) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }

    return (
        <ul className='expenses-list'>
            {items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    onRemoveItem={removeItemHandler}
                />
            ))}
        </ul>
    );
}

export default ExpensesList;
