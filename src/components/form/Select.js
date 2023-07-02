import styles from './Select.module.css'
function Select({name,options,handleOnChange,value,text}) {
//LEMBRAR SEMPRE - handleOnChange 
return(

    <div className={styles.input_control}>
        <label htmlFor={name}> {text} </label>
          <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
            <option disabled selected>Selecione uma opcao abaixo</option>
            {options.map((option) => (
              <option value={option.id}key={option.id}>{option.name}</option>
            ))}  
         </select>
       
    </div>
)
}

export default Select