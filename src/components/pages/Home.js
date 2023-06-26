import styles from "../pages/Home.module.css"
import savings from '../../img/savings.svg'
import LinkButton from "../layout/LinkButton"
function Home () {

    return (
       
        <section className = {styles.home_container}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Gerencie seus projetos agora</p>
            <LinkButton to ="/newproject" text ="Criar novo Projeto"/>
            <img src={savings} alt="costs"/>
        </section>
    )
    }
     
    export default Home