import { config } from "@/config/config"
import { HomeIcon, PencilLineIcon } from "lucide-react"
import Link from "next/link.js"

export default function Navigation(){
  return (
    <aside className="w-[250px] h-full border-x border-white/20 fixed top-0">
      <div className="py-[20px] px-[15px] border-b border-white/20">
        <Link href="/">
          <h1 className="leading-6 text-2xl font-bold">Hall of <br/> Tweets</h1>
        </Link>
      </div>

      <div className="h-[90%] flex flex-col justify-between">
        <div className="py-[20px] px-[20px] flex flex-col gap-[10px]">
          <Link href="/tweet" className="w-full py-[10px] px-[15px] bg-blue-400 text-white font-bold rounded-full flex items-center gap-[10px] cursor-pointer">
            <PencilLineIcon />
            Tweet
          </Link>
          <Link href="/" className="w-full py-[10px] px-[15px] hover:bg-white/10 text-white font-bold rounded-full flex items-center gap-[10px] cursor-pointer">
            <HomeIcon />
            Home
          </Link>
        </div>

        <div className="py-[20px] px-[20px] border-t border-white/20">
          <div className="flex items-center gap-[10px]">
            <div className="w-[46px] h-[46px] bg-white/20 rounded-full overflow-hidden">
              <img src={config.AVATAR} alt="avatar" />
            </div>
            <p className="font-medium">Wvoyak Akne</p>
          </div>
        </div>
      </div>
    </aside>
  )
}