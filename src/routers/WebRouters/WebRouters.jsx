import {Routes, Route} from 'react-router-dom';
import {Videobeams} from '../../Pages';

export function WebRouters() {
  return (
    <Routes>
      <Route path='/videobeams' element={<Videobeams />} />
    </Routes>
  )
}
