import { useState } from "react";
import { Header } from "./components/Header/Index";
import { Tasks } from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";

export interface ITask {
	id: string;
	title: string;
	isCompleted: boolean;
}

export function App() {
	const [tasks, setTasks] = useState<ITask[]>([]);

	function addTask(taskTitle: string) {
		setTasks([
			...tasks,
			{
				id: uuidv4(),
				title: taskTitle,
				isCompleted: false,
			},
		]);
	}

	function handleDeleteTaskById(taskId: string) {
		const newTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(newTasks);
	}

	function handleToggleTaskCompletedById(taskId: string) {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) {
				return {
					...task,
					isCompleted: !task.isCompleted,
				};
			}
			return task;
		});
		setTasks(newTasks);
	}
	return (
		<div className="bg-gray-600 h-screen">
			<Header onAddTask={addTask} />
			<Tasks
				tasks={tasks}
				onDelete={handleDeleteTaskById}
				onComplete={handleToggleTaskCompletedById}
			/>
		</div>
	);
}
