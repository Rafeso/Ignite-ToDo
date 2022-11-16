import { ITask } from "../../App";
import { Task } from "../Task/Index";

interface Props {
	tasks: ITask[];
}

export function Tasks({ tasks }: Props) {
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
					/>
				))}
			</div>
		</section>
	);
}
