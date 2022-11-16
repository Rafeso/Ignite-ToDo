import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

import Logo from "../../assets/Logo.svg";

interface Props {
	onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
	const [title, setTitle] = useState("");

	function handleSubmit(event: FormEvent) {
		event.preventDefault();

		onAddTask(title);
		setTitle("");
	}

	function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
		setTitle(event.target.value);
	}

	return (
		<div className="h-52 bg-gray-700">
			<header className="flex pt-20 justify-center">
				<img
					src={Logo}
					alt=""
				/>
			</header>

			<form
				className="flex justify-center pt-14 gap-2 items-center"
				onSubmit={handleSubmit}
			>
				<input
					placeholder="Adicione uma nova tarefa"
					className="flex w-[40rem] p-3 rounded bg-gray-400 placeholder:text-gray-300 text-gray-100 leading-normal outline-none outline-1 focus:outline-purple-700 transition-all"
					onChange={onChangeInput}
					value={title}
          required
				/>
				<button className="flex bg-gray-100 p-[0.8rem] rounded items-center bg-blue-700 text-gray-200 font-bold leading-normal text-sm hover:bg-blue-500 transition-all gap-1">
					Criar
					<PlusCircle
						className="inline-block text-gray-100"
						size={17}
					/>
				</button>
			</form>
		</div>
	);
}
