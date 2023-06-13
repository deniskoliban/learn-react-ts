import './Button.css'
import {ButtonHTMLAttributes, FC} from 'react';
import {IDefaultCompProps} from '../../../core/interfaces/defauld-component-props.interface';

export interface ButtonProps extends IDefaultCompProps, ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: FC<ButtonProps> = (props) => {
    const {className, children, ...btnProps} = props
    return <button {...btnProps} className={'button ' + className}>{children}</button>
}

export default Button;

