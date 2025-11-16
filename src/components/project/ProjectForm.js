import { useEffect, useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import Select from '../form/TempSelect';
import styles from './ProjectForm.module.css';

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then(resp => resp.json())
      .then(data => setCategories(data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    // atualiza estado quando projectData muda (útil no Edit)
    setProject(projectData || {});
  }, [projectData]);

  const submit = (e) => {
    e.preventDefault();
    // converte budget para número antes de enviar (se não vazio)
    const payload = { ...project };
    if (payload.budget !== undefined && payload.budget !== '') {
      payload.budget = Number(payload.budget);
    }
    handleSubmit(payload);
  };

  function handleChange(e) {
    const { name, value, type } = e.target;
    // mantém strings, mas para number deixamos string até o submit (para tentar digitar)
    setProject({ ...project, [name]: value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: Number(e.target.value),
        name: e.target.options[e.target.selectedIndex].text
      }
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />

      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        // CORREÇÃO: mostra project.budget, não project.name
        value={project.budget !== undefined ? project.budget : ''}
      />

      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;

