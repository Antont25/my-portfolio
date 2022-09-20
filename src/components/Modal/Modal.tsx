import {useEffect} from 'react';
import style from './modale.module.scss'
import {Button} from '../../common/components/Button/Button';


export const Modal = (props: any) => {
    // Use useEffect to add an event listener to the document
    useEffect(() => {
        function onKeyDown(event: any) {
            if (event.keyCode === 27) {
                // Close the modal when the Escape key is pressed
                props.onRequestClose();
            }
        }

        // Prevent scolling
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKeyDown);

        // Clear things up when unmounting this component
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



