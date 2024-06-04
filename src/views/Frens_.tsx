import { Button } from "../components";
import ring from "../../src/assets/media/ring.svg"
import tlg from "../../src/assets/media/tlg.png"
import {
  Link,
} from "react-router-dom";


export const Frens = () => {
  return (<div id="darkgray-backdrop" className="flex flex-col gap-4">

    
<Link to="/main"><Button
      size="large"
      color="primary"
      className="absolute !w-20 shadow-transparent !h-10 !py-2 !bg-[#21282C]/40"
      style={{background: "none", boxShadow: "none"}}
    >Назад</Button></Link>
    <div className="px-4 py-16 text-3xl text-white font-bold flex flex-col justify-center items-center gap-2">
    
      <div>21 frens</div>
    </div>
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
      <div className="text-[#00A99D] font-bold text-xl text-center">Invite and get points 🚀</div>
    <div className="flex flex-col bg-[#8698A2]/40 backdrop-blur-sm text-white shrink-0 grow px-3 py-3 gap-3 rounded-xl">
    <div className="flex flex-row gap-3 w-full justify-start items-center">
        <div className="grow-0 shrink-0 text-3xl pl-1"><img src={ring} className="inline w-10"/></div>
        <div className="flex flex-col">
              <div className="font-medium">Invite your friends</div>
              <div className="font-light text-sm"><img src={ring} className="inline w-4 mt-[-3px]"/> <span className="text-[#F6CB6A]">2,000</span> for you and fren</div>
            </div>
      </div>
      <div className="flex flex-row gap-3 w-full justify-start items-center">
        <div className="grow-0 shrink-0 text-3xl pl-1 w-[42px]"><img src={tlg} className="inline-block w-16 mt-[-3px] ml-[-3px]"/></div>
        <div className="flex flex-col">
              <div className="font-medium">Friends with Telegram Premium</div>
              <div className="font-light text-sm"><img src={ring} className="inline w-4 mt-[-3px]"/> <span className="text-[#F6CB6A]">25,000</span> for you and fren</div>
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
  

export default Frens;