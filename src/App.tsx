import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
	const imgs = [
		{ href: "https://vitejs.dev", src: "/vite.svg", alt: "Vite logo" },
		{ href: "https://tauri.app", src: "/tauri.svg", alt: "Tauri logo" },
		{ href: "https://reactjs.org", src: reactLogo, alt: "React logo" },
	];
	const [greetMsg, setGreetMsg] = useState("");
	const [name, setName] = useState("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		setGreetMsg(await invoke("greet", { name }));
	}

	return (
		<>
			<div className="mx-auto mt-10 max-w-xl text-center">
				<h1 className="text-4xl">Welcome to Tauri!</h1>

				<div className="join">
					{imgs.map((img) => (
						<div className="avatar join-item h-28 rounded" key={img.src}>
							<a href={img.href}>
								<img src={img.src} alt={img.alt} className="p-2" />
							</a>
						</div>
					))}
				</div>

				<p className="text-center">
					Click on the Tauri, Vite, and React logos to learn more.
				</p>

				<form
					className="flex justify-center mt-10"
					onSubmit={(e) => {
						e.preventDefault();
						greet();
					}}
				>
					<input
						id="greet-input"
						onChange={(e) => setName(e.currentTarget.value)}
						placeholder="Enter a name..."
						className="border-2 border-gray-300 p-2 rounded-md"
					/>
					<button
						type="submit"
						className="bg-blue-500 text-white rounded-md p-2 ml-2 hover:bg-blue-700"
					>
						Greet
					</button>
				</form>

				<p>{greetMsg}</p>
			</div>
		</>
	);
}

export default App;
