import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Projects.module.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  function fetchProjects() {
    fetch('http://localhost:5000/projects')
      .then(resp => resp.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));
  }

  function handleDelete(id) {
    if (!window.confirm('Confirmar exclusão deste projeto?')) return;

    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE'
    })
    .then((resp) => {
      if (resp.ok) {
        // atualiza UI sem precisar recarregar
        setProjects(prev => prev.filter(p => p.id !== id));
      } else {
        console.error('Falha ao deletar', resp);
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <div className={styles.projects_container}>
      <div className={styles.title}>
        <h1>Projetos</h1>
        <Link to="/newproject" className={styles.newBtn}>Criar Projeto</Link>
      </div>

      {location.state && location.state.message && (
        <p className={styles.message}>{location.state.message}</p>
      )}

      <div className={styles.list}>
        {projects.length === 0 && <p>Não há projetos cadastrados.</p>}
        {projects.map(project => (
          <div key={project.id} className={styles.card}>
            <h3>{project.name}</h3>
            <p>Orçamento: {project.budget}</p>
            <p>Categoria: {project.category?.name}</p>
            <div className={styles.actions}>
              <button onClick={() => navigate(`/projects/edit/${project.id}`)}>Editar</button>
              <button onClick={() => handleDelete(project.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

