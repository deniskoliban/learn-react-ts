import { FC } from 'react';
import "./Chart.css"
import ChartBar from '../ChartBar/ChartBar';
import { IChartBarItem } from '../../Expense/ExpensesChart/ExpensesChart';

export type ChartProps = {
    dataPoints: IChartBarItem[];
}

const Chart: FC<ChartProps> = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map(el => el.value);
    const totalMax = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {dataPoints.map(point =>
                <ChartBar
                    key={point.label}
                    value={point.value}
                    maxValue={totalMax}
                    label={point.label}/>)
            }
        </div>
    );
}

export default Chart;
