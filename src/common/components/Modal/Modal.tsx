import {useEffect} from 'react';
import style from './modale.module.scss'
import {Button} from '../Button/Button';


export const Modal = (props: any) => {
    useEffect(() => {
        function onKeyDown(event: any) {
            if (event.keyCode === 27) {
                props.onRequestClose();
            }
        }

        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = 'visible';
            document.removeEventListener('keydown', onKeyDown);
        };
    });

    return (
        <div className={style.modal__backdrop}>
            <div className={style.modal__container}>
                <p>
                    Thank you, I will contact you shortly.
                </p>
                <div className={style.button}>
                    <Button type={'button'}
                            name={'Close'}
                            callback={props.onRequestClose}/>
                </div>
            </div>
        </div>
    );
};



