import s from './TaskOne.module.css';
import { useState } from 'react';

function TaskOne() {
    const [text, setText] = useState('');

    // Обработчик события для кнопки
    const handleButtonClick = () => {
        console.log('Кнопка нажата');
    };

    // Обработчик события для текстового поля
    const handleTextChange = (event) => {
        setText(event.target.value);
    };
    return (
        <div className={s.wrapper}>
            <p className={s.header}>
                Блок с кнопкой и текстовым полем. По нажатию на кнопку выполнить
                запрос к https://catfact.ninja/fact. Полученный факт нужно
                записать в текстовое поле и установить курсор после первого
                слова.{' '}
            </p>
            <input
                type='text'
                value={text}
                onChange={handleTextChange}
                placeholder='Введите текст'
                className={s.input}
            />
            <button className={s.btn} onClick={handleButtonClick}>
                Нажми на меня
            </button>
        </div>
    );
}

export default TaskOne;
