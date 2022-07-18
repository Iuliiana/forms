import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="/">home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/converter">Converterpage</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/steps">Stepspage</a>
                </li>
            </ul>
            <div className="wrapper">
                <Outlet/>
            </div>
        </>
    );
}
export {Layout}