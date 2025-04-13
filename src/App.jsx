import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
// ...existing code...

function App() {
  return (
    <Router>
      <Routes>
        {/* ...existing routes... */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;