import s from './TaskTwo.module.css';
import { useEffect, useState } from 'react';
import { useGetAgeQuery } from '../../services/ageApi';

function TaskTwo() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [paramName, setParamName] = useState('');

    const { data, isError, error, isLoading } = useGetAgeQuery(paramName, {
        skip: !paramName
    });

    useEffect(() => {
        const timerId = setTimeout(() => {
            setParamName(name);
        }, 3000);

        return () => clearTimeout(timerId);
    }, [name]);

    useEffect(() => {
        if (isLoading) return;

        if (isError) {
            console.error(error);
            return;
        }

        if (data) {
            setAge(data.age);
        }
    }, [data, isError, error, isLoading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setParamName(name);
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
