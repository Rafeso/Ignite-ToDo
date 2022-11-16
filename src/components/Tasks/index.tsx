import { ClipboardText } from "phosphor-react";
import { ITask } from "../../App";
import { Task } from "../Task/Index";

interface Props {
	tasks: ITask[];
	onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
	const tasksQuantity = tasks.length;
	const completedTasks = tasks.filter((task) => task.isCompleted).length;

	return (
		<section className="max-w-[46rem] m-auto mt-[5.625rem] p-1">
			<header className="flex items-center justify-between mb-6">
				<div className="flex items-center gap-3">
					<p className="text-blue-500 text-sm font-bold">Tarefas Criadas</p>
					<span className="bg-gray-400 text-gray-200 px-2 rounded-full text-[0.75rem] font-bold">
						{tasksQuantity}
					</span>
				</div>

				<div className="flex items-center gap-3">
					<p className="text-purple-500 text-sm font-bold">Concluídas</p>
					<span className="bg-gray-400 text-gray-200 px-2 rounded-full text-[0.75rem] font-bold">
						{completedTasks} de {tasksQuantity}
					</span>
				</div>
			</header>

			<div className="flex flex-col gap-3">
				{tasks.map((task) => (
					<Task
						key={task.id}
						task={task}
            onDelete={onDelete}
            onComplete={onComplete}
					/>
				))}

        {tasks.length <= 0 && (
          <section className="flex flex-col justify-center items-center border-t-2 border-gray-400 rounded-md">
            <ClipboardText className="text-gray-300 opacity-40 mt-16 mb-2" size={56}/>
            <div>
              <p className="text-gray-300 font-bold text-center text-base">Você ainda não tem tarefas cadastradas</p>
              <p className="text-gray-300 text-center text-base">Crie tarefas e organize seus itens a fazer </p>
            </div>
          </section>
        )}
			</div>
		</section>
	);
}
