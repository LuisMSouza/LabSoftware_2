import React, { useState, useEffect } from 'react';
import api from '../api';
import { useNavigate, useParams } from 'react-router-dom';

function UsuarioForm() {
  const [usuario, setUsuario] = useState({
    nome: '',
    cpf: '',
    rg: '',
    endereco: '',
  });

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      carregarUsuario(id);
    }
  }, [id]);

  const carregarUsuario = async (id) => {
    try {
      const resposta = await api.get(`/usuarios/${id}`);
      setUsuario(resposta.data);
    } catch (error) {
      console.error('Erro ao carregar usuário:', error);
    }
  };

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await api.put(`/usuarios/${id}`, usuario);
      } else {
        await api.post('/usuarios', usuario);
      }
      navigate('/');
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
    }
  };

  return (
    <div className="container">
      <h2>{id ? 'Editar Usuário' : 'Cadastrar Novo Usuário'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" name="nome" value={usuario.nome} onChange={handleChange} required />

        <label>CPF:</label>
        <input type="text" name="cpf" value={usuario.cpf} onChange={handleChange} required />

        <label>RG:</label>
        <input type="text" name="rg" value={usuario.rg} onChange={handleChange} required />

        <label>Endereço:</label>
        <input type="text" name="endereco" value={usuario.endereco} onChange={handleChange} required />

        <input type="submit" value={id ? 'Atualizar' : 'Cadastrar'} />
      </form>
      <button className="back-button" onClick={() => navigate('/')}>Voltar à Lista</button>
    </div>
  );
}

export default UsuarioForm;
