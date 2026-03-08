import { Route, Routes } from 'react-router';
import { ManageOrganizersPage } from '../../pages/ManageOrganizersPage';

export function AdminRouter() {
    return (
        <Routes>
            {/* ROTA PARA MANIPULAR OS ORGANIZADORES */}
            <Route
                path="get-organizers"
                element={
                    <ManageOrganizersPage
                        onBack={() => window.history.back()}
                    />
                }
            ></Route>
        </Routes>
    );
}
