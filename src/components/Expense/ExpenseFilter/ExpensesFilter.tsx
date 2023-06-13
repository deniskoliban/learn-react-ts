import { ChangeEventHandler, FC } from 'react';
import './ExpenseFilter.css';

export type ExpenseFilterProps = {
    selectedYear: string;
    onFilterChanged: (year: string) => void;
}

const ExpensesFilter: FC<ExpenseFilterProps> = ({selectedYear, onFilterChanged}) => {
    const yearSelectionHandler: ChangeEventHandler<HTMLSelectElement> = ({target}) => {
        onFilterChanged(target.value)
    }

    return (<div className="expenses-filter">
        <div className="expenses-filter__control">
            <label htmlFor="">Filter by year</label>
            <select value={selectedYear} onChange={yearSelectionHandler} name="select-year" id="select-year">
                <option value="">- select an option -</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    </div>);
}

export default ExpensesFilter;
