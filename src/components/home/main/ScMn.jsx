function SecondMenu() {
    const liMenu = `h-full w-1/9 transition-transform hover:scale-125 duration-500 flex justify-center`;
    const linkMenu = `font-sans font-bold hover:font-black`;

    return ( 
        <div className="my-3 w-full h-7 bg-slate-500 flex justify-center rounded-md">
            <ul className="mt-[1px] flex justify-between w-[95%] h-full flex-row text-slate-950">
                <li className={`${liMenu}`}><a href="" className={`${linkMenu}`}>JOGO</a></li>
                <li className={`${liMenu}`}><a href="" className={`${linkMenu}`}>NOTÍCIAS</a></li>
                <li className={`${liMenu}`}><a href="" className={`${linkMenu}`}>RANKING</a></li>
                <li className={`${liMenu}`}><a href="" className={`${linkMenu}`}>COMUNIDADE</a></li>
                <li className={`${liMenu}`}><a href="" className={`${linkMenu}`}>ARSENAIS</a></li>
                <li className={`${liMenu}`}><a href="" className={`${linkMenu}`}>CAMPEONATOS</a></li>
                <li className={`${liMenu}`}><a href="" className={`${linkMenu}`}>DOWNLOAD</a></li>
                <li className={`${liMenu}`}><a href="" className={`${linkMenu}`}>SUPORTE</a></li>
                <li className={`${liMenu}`}><a href="" className={`${linkMenu}`}>LOJA</a></li>
            </ul>
        </div>
    );
}



export default SecondMenu;