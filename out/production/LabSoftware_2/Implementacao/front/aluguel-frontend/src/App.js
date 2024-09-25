import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsuarioList from './components/UsuarioList';
import UsuarioForm from './components/UsuarioForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsuarioList />} />
        <Route path="/new" element={<UsuarioForm />} />
        <Route path="/edit/:id" element={<UsuarioForm />} />
      </Routes>
    </Router>
  );
}

export default App;
