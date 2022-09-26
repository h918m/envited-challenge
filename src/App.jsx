import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import ViewEvent from './pages/ViewEvent/ViewEvent';

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/create" element={<CreateEvent />} />
            <Route exact path="/event" element={<ViewEvent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
