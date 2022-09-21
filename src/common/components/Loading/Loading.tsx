import ReactLoading from 'react-loading';
import React from 'react';
import style from './loading.module.scss'

export const Loading = () => {
    return (
        <ReactLoading type={'balls'}
                      height={10}
                      width={56}
                      className={style.loading}/>
    )
}