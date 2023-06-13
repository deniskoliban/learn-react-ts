import { IExpenseItem } from '../ExpenseItem/ExpenseItem';
import Card from '../../UI/Card/Card';
import { IDefaultCompProps } from '../../../core/interfaces/defauld-component-props.interface';
import './Expenses.css';
import { FC, useState } from 'react';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';


export interface IExpensesProps extends IDefaultCompProps {
    expenses: IExpenseItem[]
    onRemoveItem: (id: string) => void
}

const Expenses: FC<IExpensesProps> = ({ expenses, onRemoveItem }) => {
    const [filteredYear, setFilteredYear] = useState('')

    const filteredExpenses = filteredYear ? expenses.filter(({ date }) => {
        return date.getFullYear().toString() === filteredYear;
    }) : expenses;

    const filterChangeHandler = (year: string) => setFilteredYear(year);

    const removeItemHandler = (id: string) => onRemoveItem(id);

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onFilterChanged={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} onRemoveItem={removeItemHandler}/>
        </Card>
    );
}

export default Expenses;
