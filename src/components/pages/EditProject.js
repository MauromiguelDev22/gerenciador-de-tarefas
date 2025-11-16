import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './EditProject.module.css';

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`)
      .then(resp => {
        if (!resp.ok) throw new Error('Projeto não encontrado');
        return resp.json();
      })
      .then(data => {
        setProject(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  function handleUpdate(updatedProject) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProject)
    })
    .then(resp => resp.json())
    .then(data => {
      navigate('/projects', { state: { message: 'Projeto atualizado com sucesso' } });
    })
    .catch(err => console.log(err));
  }

  if (loading) return <p>Carregando projeto...</p>;
  if (!project) return <p>Projeto não encontrado.</p>;

  return (
    <div className={styles.edit_container}>
      <h1>Editar Projeto</h1>
      <ProjectForm handleSubmit={handleUpdate} btnText="Salvar alterações" projectData={project} />
    </div>
  );
}

export default EditProject;

