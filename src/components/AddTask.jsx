import { useState } from "react";
import Input from "./Input";

function AddTask({onAddtaskSubmit}){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">

            <div className="flex flex-col rounded-md gap-2">

               
                <Input 
                    
                    type="text" 
                    placeholder="Titulo" 
                    value={title} 
                    onChange={(event)=> setTitle(event.target.value)}
                />

                <Input
                    
                    type="text" 
                    placeholder="Descrisão" 
                    value={description}
                    onChange={(event)=> setDescription(event.target.value)}
                />

                <button 
                    onClick={() => {
                        //Validaç
                        if(title.trim() === "" || description.trim() === "" ){
                            return alert("Campos nao preechidos")
                        }
                        onAddtaskSubmit(title,description);
                        setTitle("");
                        setDescription("");

                    }}
                    className="rounded-md bg-slate-700 p-1 text-white">
                    Adicionar tarefa
                </button>

            </div>
           
        </div>
    )
}

export default AddTask;