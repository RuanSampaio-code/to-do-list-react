function Input(props) {
    return (
        <input 
            /* type={props.type} 
            placeholder= {props.placeholder} */
            className="p-2  outline-slate-500 rounded-md"
           /*  value={props.value}
            onChange={props.onChange}
 */
            //spreed de props
            {... props}
        />
    );
}

export default Input;