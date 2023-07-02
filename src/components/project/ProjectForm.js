import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import {useEffect, useState} from 'react'
function ProjectForm ({btnText,handleSubmit, projectData}) {

  const [categories, setCategories] = useState([])
  const [project, setProject] =useState(projectData || {})

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

  const submit = (e)  =>{
    e.preventDefault()
        handleSubmit(project)
  }

  function handleCategory(e) {
    console.log('category')
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
      
    })
    console.log('category 2')
  }
  function handleChange(e) 
  {
    setProject({...project, [e.target.name]: e.target.value})
    console.log('project')
  }
 
    return(
        
        <form onSubmit={submit} className={styles.form}>
            <Input 
              type="text"
              name="name"
              placeholder="insira o nome do projeto" 
              text="Nome do projeto"
              handleOnChange= {handleChange}
              value={project.name}/>
              

            <Input 
              type="number"
              name="budget"
              placeholder="insira o orçamento disponivel para o seu projeto" 
              text="Orçamento do projeto"
              handleOnChange= {handleChange}
              value={project.budget}
              />

           
            <Select name= "category_id"
            text="selecione a Categoria"  
            options={categories}
            handleOnChange ={handleCategory}
            value={project.category ? project.category.id : ''}
            />
            

            <SubmitButton   text={btnText} />
        </form>
        )
}

 export default ProjectForm