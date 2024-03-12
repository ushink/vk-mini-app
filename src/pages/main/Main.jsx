import s from './Main.module.css';
import { useNavigate } from 'react-router';

function Main() {
    const navigate = useNavigate();
    return (
        <div>
            <header>Select the task number to check</header>
            <div className={s.nav}>
                <button className={s.btn} onClick={() => navigate('/taskOne')}>
                    Task №1
                </button>
                <button className={s.btn} onClick={() => navigate('/taskTwo')}>
                    Task №2
                </button>
            </div>
        </div>
    );
}

export default Main;
