import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {NamePage} from '../../common/components/NamePage/NamePage';
import '../../app/App.scss'
import style from './contact.module.scss'
import {Button} from '../../common/components/Button/Button';
import {ContactIcon} from '../Services/ContactIcon/ContactIcon';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {Loading} from '../../common/components/Loading/Loading';


export const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [isModalOpen, setModalIsOpen] = useState(false);
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(false);


    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const body = {
            name,
            email,
            message
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setErrors(true)
        } else if (name && message) {
            try {
                setLoading(true)
                await axios.post('https://gmail-smtp-anton.herokuapp.com/sendMessage', body)
                setModalIsOpen(true)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        } else {
            setErrors(true)
        }
    }

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        errors && setErrors(false)
        setName(e.currentTarget.value)
    }
    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        errors && setErrors(false)
        setEmail(e.currentTarget.value)
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        errors && setErrors(false)
        setMessage(e.currentTarget.value)
    }

    useEffect(() => {
        const idTimeout = setTimeout(() => {
            setModalIsOpen(false)
        }, 5000)

        return () => clearTimeout(idTimeout)
    }, [isModalOpen])

    const classError = errors ? style.error : undefined
    return (
        <div className={'container'}>
            <NamePage name={'Contact.'} icon={'lnr lnr-envelope'}/>
            <div className={style.contacts}>
                <h2><span className={'subheading'}>LET'S TALK</span></h2>
                <div className={style.formBloc}>
                    <form className={style.form} onSubmit={submitHandler}>
                        <div className={style.inputBloc}>
                            <input type="text"
                                   value={name}
                                   onChange={onChangeNameHandler}
                                   placeholder="Your name"
                                   className={classError}/>

                            <input type="text" value={email}
                                   placeholder="Your email"
                                   onChange={onChangeEmailHandler}
                                   className={classError}/>
                        </div>
                        <textarea name="fname"
                                  value={message}
                                  placeholder="Type the message here"
                                  onChange={onChangeMessageHandler}
                                  className={classError}/>
                        <div style={{width: '160px', margin: '0 auto'}}>
                            <Button type={'submit'} name={'SEND'} disabled={loading || errors}/>
                        </div>
                    </form>
                    {loading && <Loading/>}
                    {isModalOpen &&
                        <div className={style.successfullySubmit}>Thank you, I will contact you shortly.</div>}
                </div>
            </div>
            <div className={style.contactsIcon}>
                <ContactIcon text={'AntonTolkachovDev'}
                             classIcon={'fas fa-paper-plane'}
                             href={'https://t.me/antontolkachovdev'}/>
                <ContactIcon text={'Chernihiv, Ukraine'}
                             classIcon={'fas fa-map-marker-alt'}/>
                <ContactIcon text={'380508837112'}
                             classIcon={'fas fa-phone'}
                             href={'tel:+74951234567'}/>
            </div>
        </div>
    );
};





