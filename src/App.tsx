import React, { useEffect } from 'react';
import { LinkedIn, GitHub, Mail } from '@mui/icons-material';
import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";

import { Carousel } from 'flowbite-react';

function App() {

	useEffect(() => {
		AOS.init({
			duration:1200,
			once: true
		})
	})

	return (
		<div className="w-full min-h-full bg-black">
			<div className="w-full min-h-screen my-auto flex grid-cols-2 grid-rows-1 bg-[#000000]" data-aos="fade-in">
				<div className="w-[60%] h-fit my-auto col-span-1">
					<p className="pl-24 text-7xl font-bold text-white">Gabriel Asselin</p>
					<p className="pl-24 text-6xl font-bold text-[#52b4f9]">Software Dev</p>
					<p className="pl-24 text-6xl font-bold text-[#52b4f9]">Game Dev</p>
					<p className="pl-24 text-6xl font-bold text-[#52b4f9]">Web Dev</p>
				</div>
				<div className="w-[40%] h-fit my-auto col-span-1">
					<p className="text-6xl text-white">WORK IN PROGRESS</p>
				</div>
			</div>
			<div className="w-full min-h-fit bg-[#303030]">
				<div className="w-full h-full flex grid-cols-2 grid-rows-1" data-aos="slide-right">
					<div className="py-12 w-[50%] col-span-1">
						<p className="pl-24 text-5xl font-medium text-[#52b4f9]">BIENVENUE</p>
						<p className="pl-24 pt-6 pr-14 text-lg font-normal text-justify text-white">
							Je m'appelle Gabriel Asselin et je me suis lancé en 2021 afin de poursuivre une passion
							que j'ai depuis mon adolescence : le développement informatique.
							<br /><br />
							Persévérant, ambitieux, dévoué et dynamique, je suis à la recherche de mon premier emploi.
							Je souhaite apporter mes qualités personnelles acquises lors de mes expériences de bénévolat
							et lors de mon parcours scolaire au profit de votre entreprise. Toujours à l’écoute et ouvert
							d’esprit, aucun défi n’est à mon épreuve.
						</p>
					</div>
					<div className="w-[50%] col-span-1 m-auto">
						<div className="grid grid-cols-6 grid-rows-3 w-fit">
							<img src="C_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="Cpp_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="Cs_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="html_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="JS_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="CSS_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="unity.png" alt="" width="75" height="75" className="m-4" />
							<img src="Docker_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="PHP_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="Typescript_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="React_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="Tailwind_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="apple_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="linux_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="Windows_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="Git_logo.png" alt="" width="75" height="75" className="m-4" />
							<img src="vs_logo.png" alt="" width="75" height="75" className="m-4" />
						</div>
					</div>
				</div>
			</div>
			<div className="w-full min-h-fit flex grid-cols-2 grid-rows-1 bg-[#000000]">
				<div className="my-8 mx-8 col-span-1 w-[40%] h-96">
					<Carousel>
						<img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
						<img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
						<img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
						<img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
						<img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
					</Carousel>
				</div>
				<div className="w-[60%] col-span-1">
					<p className="pl-12 pt-8 text-4xl text-white">Chibi Adventure</p>
					<p className="pl-12 text-xl text-white">Work In Progress</p>
				</div>
			</div>
			<div className="w-full h-fit">
				<p className="py-8 text-5xl font-medium text-[#52b4f9] text-center">PORTFOLIO</p>
			</div>
			<div className="w-full h-fit">
				<div className="grid grid-cols-6 grid-rows-2 w-full">
					<div className="col-span-2 group h-80 w-80 [perspective:1000px] my-4 justify-self-end" data-aos="zoom-in-up">
						<div className="relative h-full w-full rounded-2xl border-[8px] border-zinc-500 shadow-x1 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
							<div className="absolute inset-0">
								<img className="w-full h-full object-cover rounded-lg" src="transcendence.png" alt=""></img>
							</div>
							<div className="absolute inset-0 rounded-md bg-[#3e7ca8] h-full w-full text-center text-slate-200 [transform:rotateY(-180deg)] [backface-visibility:hidden]">
								<a href="https://github.com/Kampouse/trans-pong" target="_blank" rel="noreferrer">
									<p className="text-4xl font-medium pt-6 hover:text-[#52b4f9]">ft_transcendence</p>
								</a>
								<p className="text-2xl font-normal pt-4">Jeu en ligne de pong multijoueur</p>
								<p className="text-xl font-normal pt-2 pl-2"><b>&#10003;</b> Dev Frontend</p>
								<p className="text-xl font-normal pl-2"><b>&#10003;</b> Algorithme du jeu</p>
								<div className="absolute inset-x-[80px] bottom-4 flex w-fit py-auto">
									<img src="React_logo.png" alt="" width="50" height="50" className="" />
									<img src="Typescript_logo.png" alt="" width="50" height="50" className="mx-2" />
									<img src="Tailwind_logo.png" alt="" width="50" height="50" className="" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-2 group h-80 w-80 [perspective:1000px] mx-auto my-4" data-aos="zoom-in-up">
						<div className="relative h-full w-full rounded-2xl border-[8px] border-zinc-500 shadow-x1 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
							<div className="absolute inset-0">
								<img className="w-full h-full object-cover rounded-lg" src="PureSlime.png" alt=""></img>
							</div>
							<div className="absolute inset-0 rounded-md bg-[#3e7ca8] h-full w-full text-center text-slate-200 [transform:rotateY(-180deg)] [backface-visibility:hidden]">
								<a href="https://github.com/tastycool/PureSlime" target="_blank" rel="noreferrer">
									<p className="text-4xl font-medium pt-6 hover:text-[#52b4f9]">PureSlime</p>
								</a>
								<p className="text-2xl font-normal pt-4">Jeu de puzzle / plateformer</p>
								<p className="text-xl font-normal pt-2"><b>&#10003;</b> Dev Unity</p>
								<div className="absolute inset-x-[105px] bottom-4 flex">
									<img src="Cs_logo.png" alt="" width="50" height="50" className="" />
									<img src="unity.png" alt="" width="50" height="50" className="ml-2" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-2 group h-80 w-80 [perspective:1000px] my-4" data-aos="zoom-in-up">
						<div className="relative h-full w-full rounded-2xl border-[8px] border-zinc-500 shadow-x1 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
							<div className="absolute inset-0">
								<img className="w-full h-full object-cover rounded-lg" src="Cub3d.png" alt=""></img>
							</div>
								<div className="absolute inset-0 rounded-md bg-[#3e7ca8] h-full w-full text-center text-slate-200 [transform:rotateY(-180deg)] [backface-visibility:hidden]">
									<a href="https://github.com/gasselin42/cub3d.git" target="_blank" rel="noreferrer">
										<p className="text-4xl font-medium pt-6 hover:text-[#52b4f9]">Cub3d</p>
									</a>
									<p className="text-2xl font-normal pt-4">Raytracing en 3D d'un labyrinthe</p>
									<p className="text-xl font-normal pt-2"><b>&#10003;</b> Algorithme du Raytracing</p>
									<p className="text-xl font-normal"><b>&#10003;</b> Parsing</p>
									<div className="absolute inset-x-0 bottom-4">
										<img src="C_logo.png" alt="" width="50" height="50" className="mx-auto" />
									</div>
								</div>
						</div>
					</div>
					<div className="col-span-1"></div>
					<div className="col-span-2 group h-80 w-80 [perspective:1000px] my-4 mx-auto" data-aos="zoom-in-up">
						<div className="relative h-full w-full rounded-2xl border-[8px] border-zinc-500 shadow-x1 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
							<div className="absolute inset-0">
								<img className="w-full h-full object-cover rounded-lg" src="Minesweeper.png" alt=""></img>
							</div>
							<div className="absolute inset-0 rounded-md bg-[#3e7ca8] h-full w-full text-center text-slate-200 [transform:rotateY(-180deg)] [backface-visibility:hidden]">
								<a href="https://github.com/gasselin42/Minesweeper" target="_blank" rel="noreferrer">
									<p className="text-4xl font-medium pt-6 hover:text-[#52b4f9]">Minesweeper</p>
								</a>
								<p className="text-2xl font-normal pt-4">Reproduction du célèbre Démineur</p>
								<p className="text-xl font-normal pt-2">Projet d'un jour en solo</p>
								<div className="absolute inset-x-0 bottom-4">
									<img src="C_logo.png" alt="" width="50" height="50" className="mx-auto" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-2 group h-80 w-80 [perspective:1000px] mx-auto my-4" data-aos="zoom-in-up">
						<div className="relative h-full w-full rounded-2xl border-[8px] border-zinc-500 shadow-x1 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
							<div className="absolute inset-0">
								<img className="w-full h-full object-cover rounded-lg" src="So_Long.png" alt=""></img>
							</div>
							<div className="absolute inset-0 rounded-md bg-[#3e7ca8] h-full w-full text-center text-slate-200 [transform:rotateY(-180deg)] [backface-visibility:hidden]">
								<a href="https://github.com/gasselin42/so_long" target="_blank" rel="noreferrer">
									<p className="text-4xl font-medium pt-6 hover:text-[#52b4f9]">So_Long</p>
								</a>
								<p className="text-2xl font-normal pt-4">Simple jeu 2D</p>
								<p className="text-xl font-normal pt-2">Projet en solo</p>
								<div className="absolute inset-x-0 bottom-4">
									<img src="C_logo.png" alt="" width="50" height="50" className="mx-auto" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-fit h-fit py-6 flex mx-auto my-auto">
				<a href="CV_Gabriel_Asselin.pdf" target="_blank" rel="noreferrer">
					<button className="h-[50px] text-white bg-[#52b4f9] rounded-2xl font-bold px-4 mx-1 ">TÉLÉCHARGER MON CV</button>
				</a>
				<a href="https://www.linkedin.com/in/gabriel-asselin-986768236/" target="_blank" rel="noreferrer">
					<LinkedIn sx={{height: 50, width: 50, color: 'white', mx: "4px"}} />
				</a>
				<a href="https://github.com/gasselin42/" target="_blank" rel="noreferrer">
					<GitHub sx={{height: 50, width: 50, color: 'white', mx: "4px"}} />
				</a>
				<a href="mailto:gabhabs@yahoo.com" target="_blank" rel="noreferrer">
					<Mail sx={{height: 50, width: 50, color: 'white', mx: "4px"}} />
				</a>
			</div>
		</div>
	);
}

export default App;
