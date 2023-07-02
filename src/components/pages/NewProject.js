import styles from '../pages/NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import {useNavigate} from 'react-router-dom'
function NewProject() {

    const history = useNavigate()

    function createPost (project) {
        // initializing cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method :'POST',
            headers: {
                'Content-Type' : 'application/json',

            },
            body: JSON.stringify(project),

        })
        .then((resp) => resp.json())
        .then((data)=> {
            console.log(data)
            //redirect
            history('/projects', {message : "Projeto criado com sucesso!"});

        })
        .catch((err) => console.log(err))
    }
    return (
        <div className={styles.newproject_container}>
            
          
            <p>Crie o projeto para adicionar o serviço prestado</p>
          
            <ProjectForm handleSubmit={createPost}  btnText="Criar Projeto"/>
            
        </div>
    )
    }
    
    export default NewProject