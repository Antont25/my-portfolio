import React, {FC, useEffect, useState} from 'react';
import style from './progress.module.scss'


export const Progress: FC<ProgressType> = (props) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setProgress(props.progress)
        }, 500)

        return () => clearTimeout(timeout)
    }, [props.progress])

    return (
        <div className={style.containerStyles}>
            <div className={style.fillerStyles} style={{width: `${progress}%`}}>
                <span className={style.labelStyles}>
                    {props.progress}%
                </span>
            </div>

        </div>
    );
};
//type
type ProgressType = {
    progress: number
}




