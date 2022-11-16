import { Header } from "./components/Header/Index";
import { Tasks } from "./components/Tasks";

export function App() {
	return (
		<div className="bg-gray-600 h-screen">
			<Header />
      <Tasks />
		</div>
	);
}
