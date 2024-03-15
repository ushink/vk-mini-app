import Button from '../../components/UI/Button/Button';
import s from './Main.module.css';
import { useNavigate } from 'react-router';

function Main() {
    const navigate = useNavigate();
    return (
        <div>
            <header>Select the task number to check</header>
            <div className={s.nav}>
                <Button color={'blue'} onClick={() => navigate('/taskOne')}>
                    Task №1
                </Button>
                <Button color={'blue'} onClick={() => navigate('/taskTwo')}>
                    Task №2
                </Button>
            </div>
        </div>
    );
}

export default Main;
