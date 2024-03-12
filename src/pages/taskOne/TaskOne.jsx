import { useGetFactQuery } from '../../services/factApi';
import s from './TaskOne.module.css';
import { useState } from 'react';

function TaskOne() {
    const { data, refetch } = useGetFactQuery();

    const [text, setText] = useState('');
    const [isCleanUp, setIsCleanUp] = useState(false);

    // Обработчик события для кнопки
    const handleButtonClick = () => {
        if (text !== '') {
            refetch();
            setText('');
            setIsCleanUp(false);
        } else {
            setText(data?.fact);
            setIsCleanUp(true);
        }
    };

    return (
        <div className={s.wrapper}>
            <textarea
                value={text}
                placeholder='Узнай факт, нажми на кнопку'
                className={s.textarea}
            ></textarea>

            <button className={s.btn} onClick={handleButtonClick}>
                {isCleanUp ? 'Очистить' : 'Нажми на меня'}
            </button>
        </div>
    );
}

export default TaskOne;
