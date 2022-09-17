import React from 'react';
import {NamePage} from '../../common/components/NamePage/NamePage';
import '../../App.scss'
import style from './contact.module.scss'
import {Button} from '../../common/components/Button/Button';
import {ContactIcon} from '../Services/ContactIcon/ContactIcon';

export const Contact = () => {
    return (
        <div className={'container'}>

            <NamePage name={'Contact.'} icon={'lnr lnr-envelope'}/>

            <div className={style.contacts}>
                <h2><span className={'subheading'}>LET'S TALK</span></h2>

                <div className={style.formBloc}>

                    <form className={style.form}>
                        <div className={style.inputBloc}>
                            <input type="text" id="fname" name="fname" placeholder="Your name"/>
                            <input type="text" name="fname" placeholder="Your email"/>
                        </div>
                        <textarea name="fname" placeholder="Type the message here"/>
                        <div style={{width: '160px', margin: '0 auto'}}>
                            <Button type={'submit'} name={'SEND'} callback={() => {
                            }}/>
                        </div>
                    </form>

                </div>

            </div>
            <div className={style.contactsIcon}>
                <ContactIcon text={'AntonTolkachovDev'} classIcon={'fas fa-paper-plane'}/>
                <ContactIcon text={'Chernihiv, Ukraine'} classIcon={'fas fa-map-marker-alt'}/>
                <ContactIcon text={'380508837112'} classIcon={'fas fa-phone'}/>
            </div>
        </div>
    );
};



