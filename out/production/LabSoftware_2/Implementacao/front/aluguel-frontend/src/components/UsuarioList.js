import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import api from '../api';

function UsuarioList() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        carregarUsuarios();
    }, []);

    const carregarUsuarios = async () => {
        const resposta = await api.get('/usuarios');
        setUsuarios(resposta.data);
    };

    const deletarUsuario = async (id) => {
        await api.delete(`/usuarios/${id}`);
        carregarUsuarios();
    };

    return (
        <div className="container mt-4">
            <h2>Lista de Usuários</h2>
            <Link to="/new" className="btn btn-primary mb-2">
                Cadastrar Novo Usuário
            </Link>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Endereço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nome}</td>
                            <td>{usuario.cpf}</td>
                            <td>{usuario.rg}</td>
                            <td>{usuario.endereco}</td>
                            <td>
                                <div className="btn-group">
                                    <Link to={`/editar/${usuario.id}`} className="btn btn-secondary btn-sm">
                                        Editar
                                    </Link>
                                    <button onClick={() => deletarUsuario(usuario.id)} className="btn btn-danger btn-sm">
                                        Deletar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UsuarioList;
