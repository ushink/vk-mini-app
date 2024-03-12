import { Route, Routes } from 'react-router';
import Main from './pages/main/Main';
import TaskOne from './pages/taskOne/TaskOne';
import TaskTwo from './pages/taskTwo/TaskTwo';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/taskOne' element={<TaskOne />}></Route>
            <Route path='/taskTwo' element={<TaskTwo />}></Route>
        </Routes>
    );
}

export default AppRoutes;
