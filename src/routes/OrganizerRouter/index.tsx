import { Route, Routes } from 'react-router';
import { OrganizerDashboard } from '../../pages/OrganizerDashboard';

export function OrganizerRouter() {
    return (
        <Routes>
            {/* Rota principal: Apenas o Dashboard */}
            <Route index element={<OrganizerDashboard />} />
        </Routes>
    );
}
