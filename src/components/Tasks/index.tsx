export function Tasks() {
  return (
    <section className="max-w-[46rem] m-auto mt-[5.625rem] p-1">
      <header className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-3">
          <p className="text-blue-500 text-sm font-bold">Tarefas Criadas</p>
          <span className="bg-gray-400 text-gray-200 px-2 rounded-full text-[0.75rem] font-bold">10</span>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-purple-500 text-sm font-bold">Concluídas</p>
          <span className="bg-gray-400 text-gray-200 px-2 rounded-full text-[0.75rem] font-bold">5 de 10</span>
        </div>
      </header>
    </section>
  )
}