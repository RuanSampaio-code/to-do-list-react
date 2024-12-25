// Importando os ícones ChevronRightIcon e TrashIcon da biblioteca "lucide-react"
import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

// Componente Tasks
function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
    // Exibindo as props recebidas no console para depuração
    console.log();

    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`);
    }

    return (
        // Criação de uma lista (<ul>) com estilo aplicado para espaçamento, padding, fundo, bordas arredondadas e sombra
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow m-">
            {/* Iterando sobre as tarefas recebidas via props */}
            {tasks.map((task) => (
                // Cada tarefa é representada como um item de lista (<li>)
                <li key={task.id} className="flex gap-2">
                    {/* Botão principal que exibe o título da tarefa */}
                    <button
                        // Ao clicar no botão, chama a função onTaskClick passando o id da tarefa
                        onClick={() => onTaskClick(task.id)}
                        // Estilo dinâmico: adiciona "line-through" se a tarefa estiver concluída (isCompleted)
                        className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}
                    >
                        {/* Título da tarefa */}
                        {task.title}
                    </button>

                    {/* Botão com o ícone ChevronRightIcon */}
                   
                    <Button 
                        onClick={() => onSeeDetailsClick(task)} >
                        <ChevronRightIcon />
                    </Button>

                    {/* Botão para deletar a tarefa */}
                    <Button
                        // Ao clicar, chama a função deleteTask passando o id da tarefa
                        onClick={() => onDeleteTaskClick(task.id)}
                        
                    >
                        <TrashIcon /> {/* Ícone de lixeira representando "deletar" */}
                    </Button>
                </li>
            ))}
        </ul>
    );
}

// Exporta o componente Tasks para que possa ser usado em outros arquivos
export default Tasks;
