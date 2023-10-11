import { FC } from 'react'
const Card: FC<{ title: string; name: string, bgColor: string; textColor: string, img: string, children: string }> =
  ({ title, name, bgColor, textColor, img, children }) => {

    return <>
      <li className="w-[853px] min-h-[408px] list-none flex mt-10 max-sm:w-[300px]  max-sm:flex-col max-sm:min-h-[408px] " style={{ backgroundColor: bgColor }}>
        <div className="flex items-center justify-center w-6/12 max-sm:w-full ">
          <div className="w-[321px] h-[306px] max-sm:w-[200px] max-sm:h-[250px] flex justify-center items-center"><img src={img} alt="" /></div>
        </div>
        <div className="w-6/12 font-sofia flex items-center  justify-evenly flex-col max-sm:w-full" style={{ color: textColor }}>
          <p className="w-[353px] text-left font-bold text-[28px] max-sm:w-4/5 max-sm:text-[14px]">{title}</p>
          <p className="m-2 text-[15px] font-normal w-[353px] min-h-[80px]  max-sm:w-4/5 max-sm:text-[10px]">{children}</p>
          <p className="w-4/5 text-right text-[14px] font-bold pt-5 max-sm:w-4/5 max-sm:text-[12px] max-sm:p-2">{name}</p>
        </div>
      </li>
    </>

  }

export default Card;