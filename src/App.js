import './App.css';

import {Routes, Route} from 'react-router-dom';
import {Converterpage} from "./pages/Converterpage";
import {Stepspage} from "./pages/Stepspage";
import {Homepage} from "./pages/Homepage";
import {Notfoundpage} from "./pages/Notfoundpage";
import {Layout} from "./components/Layout";

function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path='steps' element={<Stepspage/>}/>
                <Route path='converter' element={<Converterpage/>}/>
                <Route path='*' element={<Notfoundpage/>}/>
            </Route>
        </Routes>
    );
}

export default App;