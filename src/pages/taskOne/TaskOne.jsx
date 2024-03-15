import s from './TaskOne.module.css';
import { useEffect, useRef, useState } from 'react';
import { useGetFactQuery } from '../../services/factApi';
import Button from '../../components/UI/Button/Button';

function TaskOne() {
    const { data, refetch } = useGetFactQuery();

    const textareaRef = useRef();

    const [text, setText] = useState('');
    const [isRefresh, setIsRefresh] = useState(false);

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

            <Button color={'blue'} onClick={handleButtonClick}>
                {isRefresh ? 'Обновить' : 'Нажми на меня'}
            </Button>
        </div>
    );
}

export default TaskOne;
