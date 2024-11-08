import LogoMarcaRevolution from "./LmPr";
import SecondMenu from "./ScMn";
import SlideMainPage from "./SlMp";

function PrimaryPageMain() {
    return ( 
        <div className="w-full h-auto flex justify-center">
            <div className="w-[85%] h-full flex flex-col justify-center">
                <LogoMarcaRevolution/>
                <SecondMenu/>
                <div className="w-full h-full flex bg-zinc-800 rounded-sm">
                    <div className="w-[75%] h-auto flex">
                        <SlideMainPage/>
                    </div>
                    <div className="w-[25%] h-auto"></div>
                </div>
            </div>
        </div>
     );
}

export default PrimaryPageMain;