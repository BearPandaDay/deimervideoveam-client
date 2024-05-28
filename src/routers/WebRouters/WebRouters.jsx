import {Routes, Route} from 'react-router-dom';
import {Videobeams, SolicitarPrestamoVideobeam} from '../../Pages';

export function WebRouters() {
  return (
    <Routes>
      <Route path='/videobeams' element={<Videobeams />} />
      <Route path='/solicitarprestamovideobeam' element={<SolicitarPrestamoVideobeam />} />
    </Routes>
  )
}
