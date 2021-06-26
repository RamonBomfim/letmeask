import { ButtonHTMLAttributes } from 'react';
import cx from "classnames";

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
    isLogout?: boolean;
};

export function Button({
    isOutlined = false,
    isLogout = false,
    ...props
}: ButtonProps) {
    return (
        <button 
            className={cx(
                'button',
                { outlined: isOutlined},
                { logout: isLogout}
            )} 
            {...props} 
        />
    )
}
