import { Button } from "../components";
import ring from "../../src/assets/media/ring.svg"
import ringBig from "../../src/assets/media/ring-big.png"
import toncoin from "../../src/assets/media/toncoin.png"
import mooli from "../../src/assets/media/mooli-icon.svg"
import premium from "../../src/assets/media/telegram_premium.png"
import {
  Link,
} from "react-router-dom";
import { ReactNode } from "react";

const Cell = ({id, className, title, subtitle, icon, image, children }:{
  id?: string,
  className?: string,
  title?: ReactNode,
  subtitle?: ReactNode,
  icon?: ReactNode,
  image?: ReactNode,
  children?: ReactNode
}) => {
  return (
    <div id={id} className={`flex flex-col bg-[#8698A2]/40 backdrop-blur-md text-white shrink-0 grow px-3 py-3 gap-3 rounded-xl ${className}`}>
      <div className={`flex flex-row gap-3 w-full justify-start items-center relative `}>
        {image ? <div className="grow-0 shrink-0 flex w-[60px] h-[60px] bg-[#ffffff12] justify-center items-center text-3xl text-center rounded-xl">{image}</div> :  <div className="grow-0 shrink-0 w-[60px]">{image}</div>}
        <div className="grow flex flex-col">
          <div className="font-regular text-[#ffffff]/65 text-[0.95rem]">{title}</div>
          <div className="font-semibold text-sm">{subtitle}</div>
        </div>
        {icon && <div className="grow-0 shrink-0 text-3xl pl-1">{icon}</div>}
      </div>
      {children}
    </div>
  );
}

const Chevron = () => <svg width="12" height="22" className="mr-2" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 10.8594C11 11.125 10.9062 11.3516 10.6953 11.5547L4.60156 17.5156C4.42969 17.6875 4.21875 17.7734 3.96875 17.7734C3.46094 17.7734 3.05469 17.3828 3.05469 16.8672C3.05469 16.6172 3.16406 16.3906 3.32812 16.2188L8.82812 10.8594L3.32812 5.5C3.15625 5.32031 3.05469 5.09375 3.05469 4.84375C3.05469 4.33594 3.46094 3.94531 3.96875 3.94531C4.21875 3.94531 4.42969 4.03125 4.60156 4.20312L10.6953 10.1641C10.8984 10.3672 11 10.5938 11 10.8594Z" fill="white" fillOpacity="0.3"/>
</svg>;

export const Earn = () => {
  return (<div id="darkgray-backdrop" className="flex flex-col gap-4">

<Link to="/main"><Button
      size="large"
      color="primary"
      className="absolute !w-20 shadow-transparent !h-10 !py-2 !bg-[#21282C]/40"
      style={{background: "none", boxShadow: "none"}}
    >Назад</Button></Link>
  
    <div className="px-4 py-3 text-3xl text-white font-bold flex flex-col justify-center items-center gap-0">
      <img id="ring-big" src={ringBig} className="inline w-[160px]"/>
      <div>Earn rings</div>
      <div className="text-[#00A99D] font-bold text-sm text-center">Full guide</div>
    </div>
    
      <Cell
        id={"invite-friend"}
        title={"Invite bonus"}
        subtitle={<>up to <img src={ring} className="inline w-4 mt-[-3px]"/> <span className="text-[#F6CB6A]">20k</span> <span className="text-gray-400">for friend</span></>}
        icon={<Chevron/>}
        image={""}
      />
    <div className="text-lg text-white font-bold tracking-[0.01em]">Onboarding</div>
    <div className="flex flex-col gap-3">
    <Cell
        className={"!bg-[#00857C]/20"}
        title={"Что такое Mooli"}
        subtitle={<>up to <img src={ring} className="inline w-4 mt-[-3px]"/> <span className="text-[#F6CB6A]">20k</span> <span className="text-gray-400">for friend</span></>}
        icon={<></>}
        image={"☝️"}
      />
      <Cell
        className={"!bg-[#00948A]/40"}
        title={"Присоединиться к Mooli"}
        subtitle={<>Telegram Premium и <img src={ring} className="inline w-4 mt-[-3px]"/> <span className="text-[#F6CB6A]">150k</span></>}
        icon={""}
        image={"✌️"}
      />
      <Cell
        className={"!bg-[#00948A]/80"}
        title={"Ваша первая доска"}
        subtitle={<>Telegram Premium и <img src={ring} className="inline w-4 mt-[-3px]"/> <span className="text-[#F6CB6A]">150k</span></>}
        icon={""}
        image={"🐣"}
      />
    </div>

    <Cell
      id={"toncoin"}
      className={"!bg-[#00B2FF]/15"}
      title={"Крипто-гид: начни тут"}
      subtitle={<>Telegram Premium и <img src={ring} className="inline w-4 mt-[-3px]"/> <span className="text-[#F6CB6A]">150k</span></>}
      icon={""}
      image={<img src={toncoin} />
      }
    >
    {/* <Link to="/"><Button
      size="large"
      color="primary"
      className="w-full !bg"
    >Пригласить друга</Button></Link> */}
    </Cell>

    <div className="text-lg text-white font-bold tracking-[0.01em]">Specials</div>
    
    <div className="flex flex-col backdrop-blur-md !bg-[#121618]/40  text-white shrink-0 grow px-3 py-3 gap-3 rounded-xl">
      <Cell
        className={"!p-0 !px-0 !py-0 !bg-transparent !backdrop-blur-[none]"}
        title={"Telegram Wallet"}
        subtitle={<><span className="font-semibold">+100,000</span> <img src={ring} className="inline w-4 mt-[-3px]"/> <span className="text-[#F6CB6A]"></span></>}
        icon={<Chevron/>}
        image={<>🐥</>}
      />
      <Cell
        className={"!p-0 !px-0 !py-0 !bg-transparent !backdrop-blur-[none]"}
        title={"Telegram Premiun"}
        subtitle={<><span className="font-semibold">+10,000</span> <img src={ring} className="inline w-4 mt-[-3px]"/> <span className="text-[#F6CB6A]"></span></>}
        icon={<Chevron/>}
        image={<img src={premium} className="w-8"/>}
      />
      <Cell
        className={"!p-0 !px-0 !py-0 !bg-transparent !backdrop-blur-[none]"}
        title={"X про Mooli"}
        subtitle={<><span className="font-semibold">+30,000</span> <img src={ring} className="inline w-4 mt-[-3px]"/> <span className="text-[#F6CB6A]"></span></>}
        icon={<Chevron/>}
        image={<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27.251" version="1.1" viewBox="0 0 300 300">
        <path fill="#ffffff" d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
       </svg>}
      />
      <Cell
        className={"!p-0 !px-0 !py-0 !bg-transparent !backdrop-blur-[none]"}
        title={"Присоединиться к отряду"}
        subtitle={<><span className="font-semibold">+50,000</span> <img src={ring} className="inline w-4 mt-[-3px]"/> <span className="text-[#F6CB6A]"></span></>}
        icon={<Chevron/>}
        image={"🤼"}
      />
    </div>
  </div>);
};
  

export default Earn;