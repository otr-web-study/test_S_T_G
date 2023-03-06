import { Routes, Route } from 'react-router-dom';

import { Home, Characters, NotFound } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/characters/' element={<Characters />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
