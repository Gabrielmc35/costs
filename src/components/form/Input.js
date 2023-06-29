import styles from './Input.module.css'
function Input({type, name, placeholder,handleonChange,value,text}) {

return(

    <div className={styles.form_control}>
        <label htmlFor={name}> {text}: </label>
        <input type={type}
         name={name}
         placeholder={placeholder}
         id={name} value={value} 
         onChange={handleonChange} />
       
    </div>
)
}

export default Input