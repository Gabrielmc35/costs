import styles from '../pages/NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
function NewProject() {
    return (
        <div className={styles.newproject_container}>
            
          
            <p>Crie o projeto para adicionar o serviço prestado</p>
          
            <ProjectForm  btnText="Criar Projeto"/>
            
        </div>
    )
    }
    
    export default NewProject