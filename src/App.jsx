// Importando useState do React para gerenciar o estado e os componentes AddTask e Tasks
import { useEffect, useState } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import Title from './components/Title';

// Componente principal do aplicativo
function App() {

  // Estado inicial que contém uma lista de tarefas
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
    
  );

  useEffect(() =>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);
 
  //essa função so é executada uma vez, quando os usuario acessa
  useEffect(() => {
    /* async function fetchTask() {

      //Usando api
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',
        {
          method: "GET",
        }
      )

      //PEGANDO OS DADOS Q RETORNAN NA ASPI
      const data = await response.json();
      console.log(data)

      //armazena no state 
      setTasks(data)
      
    } */
    //fetchTask();
  }, [])

  
 

  // Função chamada ao clicar em uma tarefa para alternar seu estado de conclusão111
  function onTaskClick(taskId) {
    // Atualiza a lista de tarefas mapeando sobre as existentes
    const newTask = tasks.map(task => {
      // Verifica se a tarefa atual corresponde ao taskId
      if (task.id === taskId) {
        // Retorna a tarefa com seu estado de conclusão invertido
        return { ...task, isCompleted: !task.isCompleted };
      }

      // Retorna a tarefa sem alterações se não for a correspondente
      return task;
    });

    // Atualiza o estado com a nova lista de tarefas
    setTasks(newTask);
  }

  // Função para deletar uma tarefa com base no seu ID
  function onDeleteTaskClick(taskId) {
    // Atualiza o estado filtrando as tarefas que não correspondem ao ID fornecido
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  function onAddtaskSubmit(title, description){

    const newTask = {
      id: tasks.length +1,
      title: title,
      description : description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask])

  }

  return (
    // Layout da aplicação
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space-y-4  ">
     
        {/* Título da aplicação */}
        <Title>
          Gerenciador de tarefas
        </Title>

          <AddTask onAddtaskSubmit ={onAddtaskSubmit} />
    
        {/* Componente que exibe a lista de tarefas */}

        <Tasks 
          tasks={tasks} // Passa a lista de tarefas como prop
          onTaskClick={onTaskClick} // Passa a função para alternar o estado da tarefa
          onDeleteTaskClick={onDeleteTaskClick} // Passa a função para deletar uma tarefa
        />
      </div>
      
      {/* Componente para adicionar novas tarefas */}
     
    </div>
  );
}

export default App;
