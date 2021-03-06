
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from 'react-router-dom';

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';


import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/lazy1" end
                                className={({ isActive }) =>
                                    (isActive ? "nav-active" : "")
                                }>Lazy1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" end
                                className={({ isActive }) =>
                                    (isActive ? "nav-active" : "")
                                }>Lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" end
                                className={({ isActive }) =>
                                    (isActive ? "nav-active" : "")
                                }>Lazy3</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/lazy1" element={ <LazyPage1 /> } />
                    <Route path="/lazy2" element={ <LazyPage2 /> } />
                    <Route path="/lazy3" element={ <LazyPage3 /> } />
                </Routes>
            </div>
        </Router>
    );
}
