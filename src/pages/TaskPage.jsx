import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage(){
    const navigate = useNavigate();

    const [serchParams] = useSearchParams();
    const title = serchParams.get("title");
    const description = serchParams.get("description");

    function onBackHomePage() {
        navigate("/");
    }
    
    return (
        <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative mb-6 ">
                    <button 
                        onClick={onBackHomePage}    
                        //outra forma
                        // onClick={() => navigate(-1)} 
                        className="absolute left-0 bottom-0 top-0 text-slate-100">
                         <ChevronLeftIcon />
                    </button>
                    <Title>
                        Detalhes da tarefa
                    </Title>
                    

                </div>
                

                <div className="bg-slate-200 p-4 rounded-md">

                    <h2 className="text-xl text-slate-700 font-bold">{title}</h2>
                    <p className="text-slate-700">{description}</p>

                </div>
             </div>
        </div>
    )
}

export default TaskPage;