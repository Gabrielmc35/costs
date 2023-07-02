import styles from './Select.module.css'
function Select({name,options,handleonChange,value,text}) {

return(

    <div className={styles.input_control}>
        <label htmlFor={name}> {text} </label>
          <select name={name} id={name} onChange={handleonChange} value={value || ''}>
            <option disabled selected>Selecione uma opcao abaixo</option>
            {options.map((option) => (
              <option value={option.id}key={option.id}>{option.name}</option>
            ))}  
         </select>
       
    </div>
)
}

export default Select