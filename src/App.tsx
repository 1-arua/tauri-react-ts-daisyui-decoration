import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

import { Moon, Sun } from "lucide-react";

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
			<div className="navbar bg-base-200">
				<div className="flex-1">
					<p className="btn btn-ghost text-xl">Tauri Starter App</p>
				</div>
				<div className="flex-none">
					<label className="swap swap-rotate">
						<input type="checkbox" className="theme-controller" value="dim" />
						<Sun className="swap-off" />
						<Moon className="swap-on" />
					</label>
				</div>
			</div>
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

				<p className="mb-4">
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

			<footer className="footer bg-base-200 text-base-content p-10">
				<aside>
					<img src="/icon.png" alt="1_arua icon" width={50} />
					<p>こんにちは、ああるあです</p>
				</aside>
				<nav>
					<h6 className="footer-title">Author</h6>
					<a className="link link-hover" href="https://zenn.dev/1_arua">
						About me
					</a>
				</nav>
				<nav>
					<h6 className="footer-title">favorites</h6>
					<a className="link link-hover" href="https://www.kaldi.co.jp/">
						Coffee
					</a>
					<a className="link link-hover" href="https://www.sentaro.co.jp/">
						Sweets
					</a>
				</nav>
			</footer>
		</>
	);
}

export default App;
