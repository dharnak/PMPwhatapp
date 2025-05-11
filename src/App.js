import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYou from './pages/ThankYou';
import JoinWhatsApp from './pages/JoinWhatsApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThankYou />} />
        <Route path="/join" element={<JoinWhatsApp />} />
      </Routes>
    </Router>
  );
}

export default App;
