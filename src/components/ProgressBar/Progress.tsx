import React, {FC} from 'react';
import style from './progress.module.scss'

type ProgressType = {
    progress: number
}

export const Progress: FC<ProgressType> = (props) => {

    return (
        <div className={style.containerStyles}>
            <div className={style.fillerStyles} style={{width: `${props.progress}%`}}>
                <span className={style.labelStyles}>
                    {props.progress}%
                </span>
            </div>

        </div>
    );
};




