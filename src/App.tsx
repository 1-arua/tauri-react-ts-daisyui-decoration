import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

import { BookLock, CircleUserRound, Moon, Sun } from "lucide-react";

function App() {
	const imgs = [
		{ href: "https://vitejs.dev", src: "/vite.svg", alt: "Vite logo" },
		{ href: "https://tauri.app", src: "/tauri.svg", alt: "Tauri logo" },
		{ href: "https://reactjs.org", src: reactLogo, alt: "React logo" },
	];
	const [greetMsg, setGreetMsg] = useState("");
	const [secretGreetMsg, setSecretGreetMsg] = useState("");
	const [name, setName] = useState("");
	const [secretMsg, setSecretMsg] = useState("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		setGreetMsg(await invoke("greet", { name }));
		setSecretGreetMsg(await invoke("secret_greet", { secretMsg }));
		setName("");
		setSecretMsg("");
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
					onSubmit={(e) => {
						e.preventDefault();
						greet();
						(
							document.getElementById("greeting_modal") as HTMLDialogElement
						)?.showModal();
					}}
				>
					<label className="input input-bordered flex items-center gap-2">
						<CircleUserRound />
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.currentTarget.value)}
							className="grow"
							placeholder="Your name"
						/>
					</label>
					<label className="input input-bordered flex items-center gap-2">
						<BookLock />
						<input
							type="password"
							value={secretMsg}
							onChange={(e) => setSecretMsg(e.currentTarget.value)}
							className="grow"
							placeholder="Your secret meassage"
						/>
					</label>
					<button
						type="submit"
						className="bg-blue-500 text-white rounded-md p-2 ml-2 hover:bg-blue-700"
					>
						Greet
					</button>
				</form>

				<dialog id="greeting_modal" className="modal">
					<div className="modal-box">
						<p className="py-4">{greetMsg}</p>
						<p className="py-4">{secretGreetMsg}</p>
					</div>
					<form method="dialog" className="modal-backdrop">
						<button type="submit">close</button>
					</form>
				</dialog>
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
