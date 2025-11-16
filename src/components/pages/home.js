import styles from './Home.module.css'
import  saving from '../../img/savings.svg'
import { Link } from 'react-router-dom'
import LinkButton from '../layout/LinkButton'


function Home() {
    return(

        <section className={styles.home_container}>
            <h1>Bem-Vindo ao <span>GestProj</span></h1>
            <p>Começe a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to = "/newproject" text= "Criar Projeto"/>
            <img src={saving}></img>
        </section>

    )
} 
export default Home