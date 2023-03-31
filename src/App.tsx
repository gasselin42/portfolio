import React, {useState} from 'react';
import Linkedin from './linkedin.png';
import Transcendence from './transcendence.png'
import Cub3D from "./Cub3d.png";
import Minesweeper from "./Minesweeper.png";
import SoLong from "./So_Long.png";
import './App.css';
import PDF from "./CV_Gabriel_Asselin.pdf";
import { Email, AddCircle, Computer, Terminal, Code, GitHub } from "@mui/icons-material";

function App() {
	const [hoverTrans, setHoverTrans] = useState(false);
	const [hoverCub, setHoverCub] = useState(false);
	const [hoverSweeper, setHoverSweeper] = useState(false);
	const [hoverSolong, setHoverSolong] = useState(false);

	const [colorState, setColorState] = useState('#fff');

  return (
    <div className="w-screen h-screen overflow-y-scroll scrollbar-hide bg-[#030f24]">

      <div className="w-full h-fit min-h-[750px] bg-main bg-cover bg-center bg-no-repeat flex grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2" >
				<div className='h-fit my-auto col-span-1'>
					<p className='text-6xl text-white font-bold w-fit pl-4'>Hi, I'm Gabriel Asselin</p>
					<div className='h-fit py-2 my-4 pl-4'>
						<div className='h-fit border-[4px] border-white w-fit'>
							<p className='text-4xl text-white font-bold w-fit my-4 mx-8'>WEB DEV</p>
						</div>
						<div className='flex h-fit border-[4px] border-white w-fit mt-4'>
							<p className='text-4xl text-white font-bold w-fit my-4 mx-8'>GAME DESIGNER</p>
						</div>
					</div>
					<div className='flex flex-col pl-4'>
						<p className='text-white text-xl font-bold'>Let's keep in touch</p>
						<div className='flex flex-col'>
							<div className='pl-2 py-2 flex'>
								<Email sx={{color: 'white', height: 20, width: 20, mt: "4px"}} />
								<p className='text-white text-lg pl-2'>gabhabs@yahoo.com</p>
							</div>
						</div>
					</div>
					<div className='w-[200px] bg-slate-700 rounded-lg ml-4 mt-4'>
						<a href={PDF} target="_blank" rel="noreferrer">
							<p className='w-full text-center text-white text-lg font-bold'>DOWNLOAD MY CV</p>
            </a>
					</div>
					<div className='flex'>
						<div className='h-[46px] w-[46px] bg-slate-700 rounded-lg ml-4 mt-2'>
							<a href="https://www.linkedin.com/in/gabriel-asselin-986768236/" target="_blank" rel="noreferrer" className='h-[40px]'>
								<img src={Linkedin} alt="" height="30" width="30" className='py-2 ml-2'/>
							</a>
						</div>
						<div className='h-[46px] w-[46px] bg-slate-700 rounded-lg ml-2 mt-2'>
							<a href="https://github.com/gasselin42/" target="_blank" rel="noreferrer" className='h-[40px]'>
								<GitHub sx={{height: 30, width: 30, color: 'white', ml: "8px", mt: "8px"}} />
							</a>
						</div>
					</div>
				</div>

				<div className='h-fit my-auto col-span-1'>
					<p className='text-white text-3xl'>Technicals skills</p>
					<div className='flex flex-col'>
						<div className='pl-2 flex'>
							<AddCircle sx={{color: 'white', height: 20, width: 20, mt: "4px"}} />
							<p className='text-white text-lg pl-2'>C++ / C# / C</p>
						</div>
						<div className='pl-2 flex'>
							<Computer sx={{color: 'white', height: 20, width: 20, mt: "4px"}} />
							<p className='text-white text-lg pl-2'>Unix / Linux / Windows</p>
						</div>
						<div className='pl-2 flex'>
							<Terminal sx={{color: 'white', height: 20, width: 20, mt: "4px"}} />
							<p className='text-white text-lg pl-2'>VS Code / Docker</p>
						</div>
						<div className='pl-2 flex'>
							<Code sx={{color: 'white', height: 20, width: 20, mt: "4px"}} />
							<p className='text-white text-lg pl-2'>React / Typescript / HTML / JavaScript / CSS / Tailwind CSS</p>
						</div>
						<div className='pl-2 flex'>
							<GitHub sx={{color: 'white', height: 20, width: 20, mt: "4px"}} />
							<p className='text-white text-lg pl-2'>Git</p>
						</div>
					</div>

					<p className='text-white text-3xl mt-6'>Projects</p>
					<div className='grid grid-cols-2 grid-rows-2 h-[460px] w-fit'>
						<a href="https://github.com/Kampouse/trans-pong" target="_blank" rel="noreferrer" className='flex items-center justify-center'>
							{ hoverTrans &&
								<div className='absolute mx-auto z-50 hover:cursor-pointer' onMouseEnter={() => setHoverTrans(true)} onClick={() => setHoverTrans(false)} >
									<p className='text-lg text-white font-bold'>ft_transcendence</p>
								</div>
							}
							<img src={Transcendence} alt="" width="200" height="200" className={`rounded-lg border-[6px] border-zinc-500 m-[15px] relative ${hoverTrans ? 'brightness-50 cursor-pointer' : ''}`} onMouseEnter={() => setHoverTrans(true)} onMouseLeave={() => setHoverTrans(false)} onClick={() => setHoverTrans(false)}/>
						</a>
						<a href="https://github.com/gasselin42/cub3d.git" target="_blank" rel="noreferrer" className='flex items-center justify-center'>
							{ hoverCub &&
								<div className='absolute mx-auto z-50 hover:cursor-pointer' onMouseEnter={() => setHoverCub(true)} onClick={() => setHoverCub(false)} >
									<p className='text-lg text-white font-bold'>Cub3D</p>
								</div>
							}
							<img src={Cub3D} alt="" width="200" height="200" className={`rounded-lg border-[6px] border-zinc-500 m-[15px] relative ${hoverCub ? 'brightness-50 cursor-pointer' : ''}`} onMouseEnter={() => setHoverCub(true)} onMouseLeave={() => setHoverCub(false)} onClick={() => setHoverCub(false)}/>
						</a>
						<a href="https://github.com/gasselin42/Minesweeper" target="_blank" rel="noreferrer" className='flex items-center justify-center'>
							{ hoverSweeper &&
								<div className='absolute mx-auto z-50 hover:cursor-pointer' onMouseEnter={() => setHoverSweeper(true)} onClick={() => setHoverSweeper(false)} >
									<p className='text-lg text-white font-bold'>Minesweeper</p>
								</div>
							}
							<img src={Minesweeper} alt="" width="200" height="200" className={`rounded-lg border-[6px] border-zinc-500 m-[15px] relative ${hoverSweeper ? 'brightness-50 cursor-pointer' : ''}`} onMouseEnter={() => setHoverSweeper(true)} onMouseLeave={() => setHoverSweeper(false)} onClick={() => setHoverSweeper(false)}/>
						</a>
						<a href="https://github.com/gasselin42/so_long" target="_blank" rel="noreferrer" className='flex items-center justify-center'>
							{ hoverSolong &&
								<div className='absolute mx-auto z-50 hover:cursor-pointer' onMouseEnter={() => setHoverSolong(true)} onClick={() => setHoverSolong(false)} >
									<p className='text-lg text-white font-bold'>So_Long</p>
								</div>
							}
							<img src={SoLong} alt="" width="200" height="200" className={`rounded-lg border-[6px] border-zinc-500 m-[15px] relative ${hoverSolong ? 'brightness-50 cursor-pointer' : ''}`} onMouseEnter={() => setHoverSolong(true)} onMouseLeave={() => setHoverSolong(false)} onClick={() => setHoverSolong(false)}/>
						</a>
					</div>
				</div>
			</div>
    </div>
  );
}

export default App;
