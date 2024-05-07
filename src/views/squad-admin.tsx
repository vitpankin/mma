import { Button } from "../components";
import ring from "../../src/assets/media/ring.svg"
import mooliIcon from "../../src/assets/media/mooli-app-icon.png"
import {
  Link,
} from "react-router-dom";


export const SquadAdmin = () => {
  return (<div id="gray-backdrop" className="flex flex-col gap-4">

    
<Link to="/main"><Button
      size="large"
      color="primary"
      className="absolute !w-20 shadow-transparent !h-10 !py-2 !bg-[#21282C]/40"
      style={{background: "none", boxShadow: "none"}}
    >Назад</Button></Link>
    <div className="px-4 py-16 text-3xl text-white font-bold flex flex-col justify-center items-center gap-2">
      <img src={mooliIcon} className="block w-[98px]"/> 
      <div>Mooli Base
        <svg className="inline-block ml-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
          <path d="M6.1102 2.022H4.2706C3.12585 2.022 2.55305 2.022 2.11582 2.24479C1.73121 2.44074 1.41874 2.75321 1.22279 3.13782C1 3.57505 1 4.14785 1 5.2926V13.0598C1 14.2045 1 14.7767 1.22279 15.2139C1.41874 15.5985 1.73121 15.9115 2.11582 16.1074C2.55262 16.33 3.12473 16.33 4.26724 16.33H12.0408C13.1833 16.33 13.7546 16.33 14.1914 16.1074C14.5759 15.9115 14.8895 15.5981 15.0854 15.2136C15.308 14.7768 15.308 14.2053 15.308 13.0628V11.22M16.33 6.11V1M16.33 1H11.22M16.33 1L9.176 8.154" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </div>
    </div>
    <div className="flex flex-col bg-[#8698A2]/40 backdrop-blur-sm text-white shrink-0 grow px-3 py-3 gap-3 rounded-xl">
      <div className="flex flex-row gap-3 w-full">
        <div className="flex flex-col bg-[#101416]/40 backdrop-blur-sm text-white shrink-0 grow px-4 py-3 gap-4 rounded-xl">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <div className="font-medium">2.383b</div>
              <div className="font-light text-sm opacity-[0.3]">Всего очков</div>
            </div>
            <div className=""><img src={ring} className="inline w-8"/></div>
          </div>
        </div>
        <div className="flex flex-col bg-[#101416]/40 backdrop-blur-sm text-white shrink-0 grow px-4 py-3 gap-4 rounded-xl">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <div className="font-medium">738</div>
              <div className="font-light text-sm opacity-[0.3]">Участников</div>
            </div>
            <div className=" text-4xl">🧑‍🤝‍🧑</div>
          </div>
        </div>
      </div>
      <Link to="/main"><Button
        size="large"
        color="primary"
        className="w-full"
      >Пригласить друга</Button></Link>
    </div>
    <div className="flex flex-col bg-[#8698A2]/40 backdrop-blur-sm text-white shrink-0 grow px-3 py-3 gap-3 rounded-xl">
      <div className="flex flex-row gap-3 w-full justify-start items-center">
        <div className="grow-0 shrink-0 text-3xl pl-1">🧑‍</div>
        <div className="flex flex-col">
              <div className="font-medium">Vit Pankin</div>
              <div className="font-light text-sm"><span className="opacity-[0.3]">Tribe leader · </span><img src={ring} className="inline w-4 mt-[-3px]"/> <span className="opacity-[0.6]">21.908.141</span></div>
            </div>
      </div>
      <div className="flex flex-row gap-3 w-full justify-start items-center">
        <div className="grow-0 shrink-0 text-3xl pl-1">🤝‍</div>
        <div className="flex flex-col">
              <div className="font-medium">Vit Pankin</div>
              <div className="font-light text-sm"><span className="opacity-[0.3]">Tribe leader · </span><img src={ring} className="inline w-4 mt-[-3px]"/> <span className="opacity-[0.6]">21.908.141</span></div>
            </div>
      </div>
      <div className="flex flex-row gap-3 w-full justify-start items-center">
        <div className="grow-0 shrink-0 text-3xl pl-1">🧑‍🤝‍🧑</div>
        <div className="flex flex-col">
              <div className="font-medium">Vit Pankin</div>
              <div className="font-light text-sm"><span className="opacity-[0.3]">Tribe leader · </span><img src={ring} className="inline w-4 mt-[-3px]"/> <span className="opacity-[0.6]">21.908.141</span></div>
            </div>
      </div>
      <div className="flex flex-row gap-3 w-full justify-start items-center">
        <div className="grow-0 shrink-0 text-3xl pl-1">🧑‍</div>
        <div className="flex flex-col">
              <div className="font-medium">Vit Pankin</div>
              <div className="font-light text-sm"><span className="opacity-[0.3]">Tribe leader · </span><img src={ring} className="inline w-4 mt-[-3px]"/> <span className="opacity-[0.6]">21.908.141</span></div>
            </div>
      </div>
      <div className="flex flex-row gap-3 w-full justify-start items-center">
        <div className="grow-0 shrink-0 text-3xl pl-1">🧑‍🤝‍🧑</div>
        <div className="flex flex-col">
              <div className="font-medium">Vit Pankin</div>
              <div className="font-light text-sm"><span className="opacity-[0.3]">Tribe leader · </span><img src={ring} className="inline w-4 mt-[-3px]"/> <span className="opacity-[0.6]">21.908.141</span></div>
            </div>
      </div>
    </div>
  </div>);
};
  

export default SquadAdmin;