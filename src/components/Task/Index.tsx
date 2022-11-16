import { Trash } from "phosphor-react";
import { ITask } from "../../App";

interface Props {
	task: ITask;
	onDelete: (taskId: string) => void;
}

export function Task({ task, onDelete }: Props) {
	return (
		<div className="bg-gray-500 border border-gray-400 rounded-lg p-4 flex items-center justify-between gap-3">
			<button className="bg-none border-none">
				<div className="w-5 h-5 border-[2px] border-blue-500 rounded-full" />
			</button>

			<p className="text-sm text-gray-100 mr-auto">{task.title}</p>

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
