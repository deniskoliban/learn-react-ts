import './Card.css'
import { FC } from 'react';
import { IDefaultCompProps } from '../../../core/interfaces/defauld-component-props.interface';

export interface CardProps extends IDefaultCompProps {
}

const Card: FC<CardProps> = ({ className, children }) => {
    return <div className={'card ' + className}>{children}</div>;
}

export default Card;

