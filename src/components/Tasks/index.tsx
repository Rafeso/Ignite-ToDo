import { Task } from "../Task/Index";

export function Tasks() {
  return (
    <section className="max-w-[46rem] m-auto mt-[5.625rem] p-1">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <p className="text-blue-500 text-sm font-bold">Tarefas Criadas</p>
          <span className="bg-gray-400 text-gray-200 px-2 rounded-full text-[0.75rem] font-bold">5</span>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-purple-500 text-sm font-bold">Concluídas</p>
          <span className="bg-gray-400 text-gray-200 px-2 rounded-full text-[0.75rem] font-bold">2 de 5</span>
        </div>
      </header>

      <div className="flex flex-col gap-3">
        <Task />
        <Task />
      </div>
    </section>
  )
}