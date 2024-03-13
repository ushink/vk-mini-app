/* eslint-disable no-unused-vars */
import s from './TaskTwo.module.css';
import { useState } from 'react';

function TaskTwo() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Введите ваше имя'
                    className={s.input}
                />
                <button className={s.btn} type='submit'>
                    Отправить
                </button>
            </form>
            {age && <span className={s.text}>Ваш возраст: {age}</span>}
        </div>
    );
}

export default TaskTwo;
