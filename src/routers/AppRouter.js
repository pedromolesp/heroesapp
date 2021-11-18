import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoute } from './DashboardRoute';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Routes >
                    <Route exact path="/login" component={LoginScreen} />
                    <Route path="/" component={DashboardRoute} />
                </Routes >
            </div>
        </Router>
    );
}

