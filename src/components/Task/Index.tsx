import { Trash } from "phosphor-react";

export function Task() {
	return (
		<div className="bg-gray-500 border border-gray-400 rounded-lg p-4 flex items-center justify-between gap-3">
			<button className="bg-none border-none">
        <div className="w-5 h-5 border-[2px] border-blue-500 rounded-full"/>
      </button>

			<p className="text-sm text-gray-100 mr-auto">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde
				quidem sed iure, illo doloremque esse libero maxime atque, saepe ducimus
				odit excepturi tempore cupiditate nostrum! Ad magni nemo itaque!
			</p>

			<button className="text-gray-300 hover:text-red-500 transition-all"><Trash size={20} weight="thin"/></button>
		</div>
	);
}
