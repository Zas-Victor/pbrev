import { TiSocialFacebook } from "react-icons/ti";
import { FaYoutube, FaTwitch, FaTwitter, FaDiscord} from "react-icons/fa";
import { MdForum } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";


function footerPrimary() {
    const liMenuFooter =`flex flex-col mr-3 text-left w-full`;
    const alink = `text-white text-sm hover:underline`;
    const ulFooter = `text-cyan-50 items-center w-1/3 h-full justify-between ml-5`;
    const icon_model = `ml-3 transition-transform hover:scale-150 hover:duration-700`;

    return (
        <div className="mt-4 w-full h-auto bg-black border-t-red-900 border-l-0 border-r-0 border-b-0 border flex flex-col justify-center"> 
            <div className="mt-4 w-full h-auto flex flex-row  justify-center">
                <div className="w-1/3 ml-20 h-full flex flex-row my-5 sca">
                    <ul className={`${ulFooter} mr-5`}>
                        <li className={`${liMenuFooter} mb-1 text-lg text-red-900 font-semibold`}>Point Blank</li>
                        <li className={`${liMenuFooter}`}><a href="" className={`${alink}`}>Baixe Grátis</a></li>
                        <li className={`${liMenuFooter}`}><a href="" className={`${alink}`}>Guia do Jogo</a></li>
                        <li className={`${liMenuFooter}`}><a href="" className={`${alink}`}>Notícias</a></li>
                        <li className={`${liMenuFooter}`}><a href="" className={`${alink}`}>GM Blog</a></li>
                        <li className={`${liMenuFooter}`}><a href="" className={`${alink}`}>E-Sports</a></li>
                        <li className={`${liMenuFooter}`}><a href="" className={`${alink}`}>Status do Serviço</a></li>
                    </ul>
                    <ul className={`${ulFooter } mr-5`}>
                        <li className={`${liMenuFooter} mb-1 text-lg text-red-900 font-semibold`}>Links Úteis</li>
                        <li className={`${liMenuFooter}`}><a href="" className={`${alink}`}>O que é cash?</a></li>
                        <li className={`${liMenuFooter}`}><a href="" className={`${alink}`}>Termos de Uso</a></li>
                        <li className={`${liMenuFooter}`}><a href="" className={`${alink}`}>Política de Privacidade</a></li>
                        <li className={`${liMenuFooter}`}><a href="" className={`${alink}`}>Suporte</a></li>
                        <li className={`${liMenuFooter}`}><a href="" className={`${alink}`}>Loja</a></li>
                    </ul>
                    <ul className={`${ulFooter}`}>
                        <li className={`${liMenuFooter} mb-1 text-lg text-red-900 font-semibold`}>Empresa</li>
                        <li className={`${liMenuFooter}`}><a href="" className={`${alink}`}>Business</a></li>
                        <li className={`${liMenuFooter}`}><a href="" className={`${alink}`}>Trabalhe Conosco</a></li>
                        <li className={`${liMenuFooter}`}><a href="" className={`${alink}`}>Informações aos Pais</a></li>
                    </ul>
                </div>
                <div className="flex-row justify-center w-1/3 h-full items-center">
                    <h2 className="mb-4 mt-5 text-center text-red-900 text-lg font-semibold">Comunidade</h2>
                    <div className="flex flex-row justify-center items-center text-2xl w-auto h-auto">
                        <TiSocialFacebook className={`${icon_model}`}/>
                        <FaYoutube className={`${icon_model}`}/>
                        <FaTwitch className={`${icon_model}`}/>
                        <MdForum className={`${icon_model}`}/>
                        <FaInstagram className={`${icon_model}`}/>
                        <FaTwitter className={`${icon_model}`}/>
                        <FaDiscord className={`${icon_model}`}/>
                    </div>
                </div>
                <div className="w-1/3"></div>
            </div>
            <div className="flex flex-row w-full h-auto mb-4 justify-center items-start">
                <div className="border border-slate-600 w-[30%] h-[55px] flex flex-row">
                    <div className=" w-[19%] h-full bg-red-600 flex justify-center items-center">
                        <h1 className="text-3xl font-bold">16</h1>
                    </div>
                    <div className="w-[80%] h-full flex flex-col justify-center items-center">
                        <h5 className="text-[11px]"> NÃO RECOMENDADO PARA MENORES DE 16 ANOS</h5>
                        <h6 className="text-[10px]">Tema: Jogo Eletrônico - Tiro em primeira pessoa</h6>
                        <h6 className="text-[10px]">Contém: Agressão Física Grave, Assassinato.</h6>
                    </div>
                </div>
            </div>
            <div className="w-auto h-3 bg-slate-500">

            </div>
        </div>
    );
}

export default footerPrimary;