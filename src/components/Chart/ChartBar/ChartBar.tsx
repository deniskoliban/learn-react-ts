import { FC } from 'react';
import "./ChartBar.css"
import { IChartBarItem } from '../../Expense/ExpensesChart/ExpensesChart';

export interface ChartBarProps extends IChartBarItem {
    maxValue: number
}

const ChartBar: FC<ChartBarProps> = ({value, maxValue, label}) => {
    let barFillHeight = '0%';

    if (maxValue > 0) {
        barFillHeight = Math.round((value / maxValue) * 100) + '%'
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    );
}

export default ChartBar
