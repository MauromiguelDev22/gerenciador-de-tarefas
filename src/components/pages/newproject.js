import { useHistory} from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function newproject() {

    const history = useHistory()

    function createPost(project){
        project.cost =0
        project.serices =[]

        fetch("http://localhost:5000/projects",{
                method: 'POST',
                headers:{
                    'Content-type' : 'application/json',
                }, 
                body : JSON.stringify(project)
                
                .then((resp) => resp.json())
                 .then((data) =>{
                    console.log(data)
                    history.push('/projects' , {message : "projeto criado com sucesso"})
                 })
                 .catch(err => console.log (err))


        })
    }
    return(
        <div className={styles.newproject_container}>
         <h1>Criar Projeto</h1> 
         <p>Crie seu projeto para depois adicionar os serviços</p>  
         <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
} 
export default newproject