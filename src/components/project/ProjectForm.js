import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import {useEffect, useState} from 'react'
function ProjectForm ({btnText}) {

  const [categories, setCategories] = useState([])


  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method:"GET",
      headers: {
        'Content-Type' : 'application/json'
      },
    })
      .then((resp ) => resp.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err) )
  }, [])
 
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

           
            <Select name= "category_id"
            text="selecione a Categoria"  
            options={categories}/>
            

            <SubmitButton  text={btnText} />
        </form>
        )
}

 export default ProjectForm