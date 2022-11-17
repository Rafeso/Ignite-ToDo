import { CheckCircle, Circle, Trash } from "phosphor-react";

import { ITask } from "../../App";

interface Props {
	task: ITask;
	onDelete: (taskId: string) => void;
	onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
	return (
		<div className="bg-gray-500 border border-gray-400 rounded-lg p-4 flex items-center justify-between gap-3">
			<button
				className="bg-none border-none"
				onClick={() => onComplete(task.id)}
			>
				{task.isCompleted ? (
					<CheckCircle
						className="p-0 m-0"
						size={20}
						color="#8284FA"
					/>
				) : (
					<Circle
						size={20}
						color="#4EA8DE"
					/>
				)}
			</button>

			<p
				className={
					task.isCompleted
						? "text-sm text-gray-300 line-through mr-auto overflow-hidden break-words"
						: "text-sm text-gray-100 mr-auto overflow-hidden break-words"
				}
			>
				{task.title}
			</p>

			<button
				className="text-gray-300 hover:text-red-500 transition-all"
				onClick={() => onDelete(task.id)}
			>
				<Trash
					size={20}
					weight="thin"
				/>
			</button>
		</div>
	);
}

