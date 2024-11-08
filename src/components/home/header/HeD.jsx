import { MdAccountCircle, MdOutlineSupportAgent, MdShoppingCart} from "react-icons/md";

function header() {
    const icon_menu = 'size-5 mr-4 hover:animate-pulse cursor-pointer hover:mx-2 hover:size-7 hover:duration-200';
    return ( 
        <div className="w-full h-[41px] bg-zinc-900 flex justify-center items-center fixed text-slate-300">
            <div className="w-[95%] h-full flex justify-between items-center">
                <div className="w-1/2 justify-start items-center ">
                    <h1 className="font-RubikWetPaint text-lg">PROJECT REVOLUTION</h1>
                </div>
                <div className="w-1/2 flex justify-end items-center">
                    <MdAccountCircle className={`${icon_menu}`} onClick={() => alert("opa")}/>
                    <MdOutlineSupportAgent className={`${icon_menu}`}/>
                    <MdShoppingCart className={`${icon_menu}`}/>
                </div>
            </div>
        </div>
     );
}

export default header;