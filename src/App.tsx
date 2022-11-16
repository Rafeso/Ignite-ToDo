import { Header } from "./components/Header/Index";
import { Tasks } from "./components/Tasks";

export function App() {
	return (
		<div className="bg-gray-600 min-h-screen min-w-screen">
			<Header />
      <Tasks />
		</div>
	);
}
