import { Route, Routes } from 'react-router';
import { SejaOrganizadorPage } from '../../pages/SejaOrganizadorPage';
import { AreaClientePage } from '../../pages/AreaCliente';
import EventDetailsPage from '../../pages/EventDetailsPage/EventDetailsPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

export function ClientRouter() {
    return (
        <Routes>
            {/* AREA COMUM DO CLIENTE */}
            <Route path="area-cliente" element={<AreaClientePage />}></Route>

            <Route
                path="event-detail/:id"
                element={<EventDetailsPage />}
            ></Route>
            <Route path="checkout/:id" element={<CheckoutPage />}></Route>

            {/* ROTA PARA SE TORNAR UM ORGANIZADOR */}
            <Route
                path="seja-organizador"
                element={<SejaOrganizadorPage />}
            ></Route>
        </Routes>
    );
}
