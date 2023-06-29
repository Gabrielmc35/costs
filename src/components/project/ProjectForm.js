import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
function ProjectForm ({btnText}) {
    return(
        
        <form className={styles.form}>
            <Input 
              type="text"
              name="name"
              placeholder="insira o nome do projeto" 
              text="Nome do projeto"/>

            <Input 
              type="number"
              name="budget"
              placeholder="insira o orçamento disponivel para o seu projeto" 
              text="Orçamento do projeto"/>

           
            <Select name= "category_id" text="selecione a Categoria"  />
            

            <SubmitButton  text={btnText} />
        </form>
        )
}

 export default ProjectForm