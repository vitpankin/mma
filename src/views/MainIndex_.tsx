import { Button } from "../components";
import ring from "../../src/assets/media/ring.svg"
import cn from 'classnames'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Slider } from "../components/Slider";


export const MainIndex = () => {
  return (<>

<div className={cn("fixed z-50 bottom-0 w-full left-0 p-4")}>
        <menu className={cn("flex flex-row justify-evenly items-center bg-[#00A99D]/25 backdrop-blur-md text-white w-full shrink-0 px-2 py-3 rounded-xl")}>
          {/* <li className='grow'><Link to="/frens"><button className={cn("flex flex-col w-full min-h-full items-center text-xs")}><span className='text-lg'>🤑</span>Earn</button></Link></li> */}
          <li className='grow'><Link to="/earn"><button className={cn("flex flex-col w-full min-h-full items-center text-xs")}><span className='text-lg'>🤑</span>Earn</button></Link></li>
          <div className="grow-0 w-px h-7 bg-[#00A99D]/25"></div>
          <li className='grow'><Link to="/frens"><button className={cn("flex flex-col w-full min-h-full items-center text-xs")}><span className='text-lg'>🧑‍🤝‍🧑🧻</span>Frens</button></Link></li>
          <div className="grow-0 w-px h-7 bg-[#00A99D]/25"></div>
          <li className='grow'><button className={cn("flex flex-col w-full min-h-full items-center text-xs")}><span className='text-lg'>📈</span>Boards</button></li>
        </menu>
      </div>
  <div className="flex flex-col gap-4 pb-[90px]">
  <div className="px-4 py-16 text-5xl text-white font-bold flex flex-row justify-center items-center gap-2"> <div className="ring ml-[-20px]"></div> <div className="ml-[-20px]">NaN</div></div>
    {/* <Link to="/squad"><Button
      size="large"
      color="primary"
      className="w-full !bg-[transparent]"
      style={{background: "none"}}
    >Найти отряд</Button></Link>

    
    <Slider>
      <div className="flex flex-col bg-[#101416]/30 text-white w-full shrink-0 px-4 py-4 gap-4 rounded-xl">
        <div className="flex flex-row justify-between items-center">
        <div className="font-medium">Мои доски</div>
          <div className="opacity-[.5]">Мои ассеты</div>
        </div>
        <Link to="/main"><Button
          size="large"
          color="primary"
          className="w-full"
          // style={{background: "none"}}
        >Создать борду</Button></Link>
      </div>
      <div className="flex flex-col bg-[#101416]/30  text-white w-full shrink-0 px-4 py-4 gap-4 rounded-xl">
        <div className="flex flex-row justify-between items-center">
          <div className="opacity-[.5]">Мои доски</div>
          <div className="font-medium">Мои ассеты</div>
        </div>
        <Link to="/main"><Button
          size="large"
          color="primary"
          className="w-full"
          // style={{background: "none"}}
        >Подключить кошелек</Button></Link>
      </div>
    </Slider> */}
    
    {/* <div className="flex flex-col gap-2">
      <span className="text-white font-medium">Followed Boards</span>
      <div className="flex flex-col bg-[#101416]/30 backdrop-blur-sm text-white w-full shrink-0 px-4 py-4 gap-4 rounded-xl">
        <div className="flex flex-row justify-between items-center">
          <div className="font-medium">Thorus Bohr</div>
          <div><span className="rounded-md text-green-600 bg-[#101416]/60 inline-block text-sm py-1 px-2 mr-1">↑ 0.49 %</span> <span className="opacity-[.75]">$92,580.33</span></div>
        </div>
      </div>
      <div className="flex flex-col bg-[#101416]/30 backdrop-blur-sm text-white w-full shrink-0 px-4 py-4 gap-4 rounded-xl">
        <div className="flex flex-row justify-between items-center">
          <div className="font-medium">Jose Solis</div>
          <div><span className="rounded-md text-red-600 bg-[#101416]/60 inline-block text-sm py-1 px-2 mr-1">$ −1.62 </span> <span className="opacity-[.75]">$21,019.46</span> </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#101416]/30 backdrop-blur-sm text-white w-full shrink-0 px-4 py-4 gap-4 rounded-xl">
        <div className="flex flex-row justify-between items-center">
          <div className="font-medium">Mira Lato</div>
          <div> <span className="rounded-md text-green-600 bg-[#101416]/60 inline-block text-sm py-1 px-2 mr-1">↑ 0.49 %</span> <span className="opacity-[.75]">$580.33 </span></div>
        </div>
      </div>
      <div className="flex flex-col bg-[#101416]/30 backdrop-blur-sm text-white w-full shrink-0 px-4 py-4 gap-4 rounded-xl">
        <div className="flex flex-row justify-between items-center">
          <div className="font-medium">Andrew Cai</div>
          <div><span className="rounded-md text-green-600 bg-[#101416]/60 inline-block text-sm py-1 px-2 mr-1">↑ 0.49 %</span> <span className="opacity-[.75]">$92,580.33</span></div>
        </div>
      </div>
      <div className="flex flex-col bg-[#101416]/30 backdrop-blur-sm text-white w-full shrink-0 px-4 py-4 gap-4 rounded-xl">
        <div className="flex flex-row justify-between items-center">
          <div className="font-medium">Nick Roman</div>
          <div><span className="rounded-md text-red-600 bg-[#101416]/60 inline-block text-sm py-1 px-2 mr-1">$ −1.62 </span> <span className="opacity-[.75]">$21,019.46</span> </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#101416]/30 backdrop-blur-sm text-white w-full shrink-0 px-4 py-4 gap-4 rounded-xl">
        <div className="flex flex-row justify-between items-center">
          <div className="font-medium">CryptoBabe</div>
          <div> <span className="rounded-md text-green-600 bg-[#101416]/60 inline-block text-sm py-1 px-2 mr-1">↑ 0.49 %</span> <span className="opacity-[.75]">$580.33 </span></div>
        </div>
      </div>
    </div> */}
  </div>
  </>);
};
  

export default MainIndex;