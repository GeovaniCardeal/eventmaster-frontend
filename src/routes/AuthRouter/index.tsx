import { Route } from 'react-router';
import { RegisterPage } from '../../pages/RegisterPage';
import { Routes } from 'react-router';
import { LoginPage } from '../../pages/LoginPage';
import { ForgotPasswordPage } from '../../pages/ForgotPassword';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { AreaClientePage } from '../../pages/AreaCliente';
import { ConfigPage } from '../../pages/ConfigPage';

export function AuthRouter() {
    return (
        <Routes>
            <Route path="register" element={<RegisterPage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
            <Route
                path="ForgotPassword"
                element={<ForgotPasswordPage />}
            ></Route>
            <Route path="config" element={<ConfigPage />} />
            <Route path="AreaCliente" element={<AreaClientePage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    );
}
