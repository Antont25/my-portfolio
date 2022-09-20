import React from 'react';
import style from './button.module.scss'

export const Button = (props: ButtonType) => {
    return (
        <button type={props.type}
                className={style.btn}
                onClick={props.callback}
                disabled={props.disabled}>
            {props.name}
        </button>
    );
};
//type
type ButtonType = {
    type: 'button' | 'submit' | 'reset' | undefined
    name: string
    disabled?: boolean
    callback?: () => void
}

