import {ChangeEventHandler, FC, FormEventHandler} from 'react';
import "./ExpenseForm.css"
import {propsStateMap} from '../../../core/utils/prop-state-map.util';

export interface IExpenseFormData {
    title: string;
    amount: number;
    date: string;
}

export type ExpenseFormProps = {
    onStopEdit: () => void;
    onSaveData: (data: IExpenseFormData) => void;
}

const ExpenseForm: FC<ExpenseFormProps> = ({onSaveData, onStopEdit}) => {
    const {title, amount, date} = propsStateMap({title: '', amount: 0, date: ''})

    const titleChangeHandler: ChangeEventHandler<HTMLInputElement> = ({target}) => {
        title.set(target.value);
    }
    const amountChangeHandler: ChangeEventHandler<HTMLInputElement> = ({target}) => {
        amount.set(+target.value || 0);
    }
    const dateChangeHandler: ChangeEventHandler<HTMLInputElement> = ({target}) => {
        date.set(target.value);
    }
    const formSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        onSaveData({
            title: title.value,
            amount: amount.value,
            date: date.value
        })
        title.set('');
        amount.set(0);
        date.set('')
    }


    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={title.value} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min={0} value={amount.value} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={date.value}
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={onStopEdit}>Close</button>
                <button type="submit">Submit</button>
            </div>
        </form>);
}

export default ExpenseForm;
