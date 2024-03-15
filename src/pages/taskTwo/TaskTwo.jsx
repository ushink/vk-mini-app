import s from './TaskTwo.module.css';
import { useEffect, useState } from 'react';
import { useGetAgeQuery } from '../../services/ageApi';
import Button from '../../components/UI/Button/Button';

function TaskTwo() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [paramName, setParamName] = useState('');

    let timerId;

    const { data, isError, error, isLoading } = useGetAgeQuery(paramName, {
        skip: !paramName
    });

    useEffect(() => {
        timerId = setTimeout(() => {
            setParamName(name);

            if (!name) {
                setAge('');
            }
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
        clearTimeout(timerId);
        setParamName(name);
    };

    const handleChange = (e) => {
        setName(e.target.value.replace(/[^a-zA-Z\u00C0-\u017F]/g, ''));
    };

    return (
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={name}
                    onChange={handleChange}
                    placeholder='Введите ваше имя'
                    className={s.input}
                />
                <Button color={'blue'} type={'submit'} disabled={isLoading}>
                    {!isLoading ? 'Отправить' : 'Загрузка'}
                </Button>
            </form>
            {age && <span className={s.text}>Ваш возраст: {age}</span>}
        </div>
    );
}

export default TaskTwo;
