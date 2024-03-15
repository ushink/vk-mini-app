import s from './TaskOne.module.css';
import { useEffect, useRef, useState } from 'react';
import { useGetFactQuery } from '../../services/factApi';

function TaskOne() {
    const { data, refetch } = useGetFactQuery();

    const textareaRef = useRef();

    const [text, setText] = useState('');
    const [isRefresh, setIsRefresh] = useState(false);

    // Обработчик события для кнопки
    const handleButtonClick = () => {
        setText(data?.fact);
        setIsRefresh(true);
        refetch();
    };

    useEffect(() => {
        if (text) {
            const firstSpaceIndex = text.indexOf(' ');

            // Поиск позиции после первого слова
            const cursorPosition =
                firstSpaceIndex !== -1 ? firstSpaceIndex + 1 : text.length;

            // Установка курсора после первого слова
            textareaRef.current.focus();
            textareaRef.current.setSelectionRange(
                cursorPosition,
                cursorPosition
            );
        }
    }, [text]);

    return (
        <div className={s.wrapper}>
            <textarea
                ref={textareaRef}
                value={text}
                placeholder='Узнай факт, нажми на кнопку'
                className={s.textarea}
            ></textarea>

            <button className={s.btn} onClick={handleButtonClick}>
                {isRefresh ? 'Обновить' : 'Нажми на меня'}
            </button>
        </div>
    );
}

export default TaskOne;
