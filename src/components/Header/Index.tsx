import { PlusCircle } from "phosphor-react";

import Logo from "../../assets/Logo.svg";

export function Header() {
	return (
		<div className="h-52 bg-gray-700">
			<header className="flex pt-20 justify-center">
				<img
					src={Logo}
					alt=""
				/>
			</header>

			<form className="flex justify-center pt-14 gap-2 items-center">
				<input
					placeholder="Adicione uma nova tarefa"
					className="flex w-[40rem] p-3 rounded bg-gray-400 placeholder:text-gray-300 leading-normal outline-none outline-1 focus:outline-purple-700 transition-all"
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
