function ProjectForm () {
    return(
        
        <form>
            <div>
            <input type="text" placeholder="Nome do projeto"></input>
            </div>
            <div>
            <input type="number" placeholder="Orçamento do projeto"></input>
            </div>
            <div> 
            <select name="category_id">
                <option disabled selected>Selecione a Categoria</option>
            </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto" ></input>
            </div>
        </form>
        )
}

 export default ProjectForm