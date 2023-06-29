import styles from './Select.module.css'
function Select({name,options,handleonChange,value,text}) {

return(

    <div className={styles.input_control}>
        <label htmlFor={name}> {text} </label>
          <select name={name} id={name}>
            <option disabled selected>Selecione uma opcao abaixo</option>        
         </select>
       
    </div>
)
}

export default Select