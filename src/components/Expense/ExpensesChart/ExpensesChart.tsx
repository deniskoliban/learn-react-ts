import React, { FC } from 'react';
import Chart from '../../Chart/Chart/Chart';
import { IExpenseItem } from '../ExpenseItem/ExpenseItem';

export interface IChartBarItem {
    label: string;
    value: number;
}

export type ExpensesChartProps = {
    expenses: IExpenseItem[]
}

const ExpensesChart: FC<ExpensesChartProps> = ({expenses}) => {
    const chartDataPoints: IChartBarItem[] = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]

    expenses.forEach(expense => {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    })


    return <Chart dataPoints={chartDataPoints}/>
}
export default ExpensesChart;
