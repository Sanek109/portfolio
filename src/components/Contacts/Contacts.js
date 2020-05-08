import React, {useState} from 'react';
import styles from './Contacts.module.scss';
import * as axios from "axios";
import Preloader from "../common/preloader/Preloader";

const Contacts = () => {
    let [formName, setName] = useState('');
    let [formContacts, setContacts] = useState('');
    let [formMessage, setMessage] = useState('');
    let [errorForm, setErrorForm] = useState(true)
    let [initializeForm, setInitializeForm] = useState(true)
    let [endSendForm, setEndSendForm] = useState(false)

    let activeSetErrorForm = () => {
        setEndSendForm(false)
        if (formName !== '' && formMessage !== '' && formContacts !== '') {
            setErrorForm(false)
        } else {
            setErrorForm(true)
        }
    }

    let onChangeNameForm = (e) => {
        setName(e.currentTarget.value)
        activeSetErrorForm()
    };

    let onChangeContactsForm = (e) => {
        setContacts(e.currentTarget.value)
        activeSetErrorForm()
    };

    let onChangeMessageForm = (e) => {
        setMessage(e.currentTarget.value)
        activeSetErrorForm()
    };

    let handleSubmit = (e) => {
        setInitializeForm(false)
        e.preventDefault();
        axios.post("https://smtp-nodejs-server-109.herokuapp.com/sendMessage", {formName, formContacts, formMessage})
            .then(() => {
                [setName, setMessage, setContacts].forEach(field => field(''));
                setInitializeForm(true)
                setEndSendForm(true)
            })
    }

    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <div>
                    <h1>Контакты</h1>
                </div>
                <div className={styles.wrapper}>


                        <form onSubmit={handleSubmit}>
                            <input className={styles.form} placeholder='Ваше имя' name='name' value={formName}
                                   onChange={onChangeNameForm}/>
                            <input className={styles.form} placeholder='Email или номер телефона' value={formContacts}
                                   name='contacts' onChange={onChangeContactsForm}/>
                            <textarea className={styles.form} placeholder='Оставьте ваше сообщение' value={formMessage}
                                      name='message' onChange={onChangeMessageForm}/>
                            {errorForm && <span>Заполните пожалуйста все поля!</span>}
                            {endSendForm && <span>Ваша форма успешно отправлена!</span>}
                            {!initializeForm ? <Preloader/> : <button disabled={errorForm}>Отправить</button>}
                        </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
