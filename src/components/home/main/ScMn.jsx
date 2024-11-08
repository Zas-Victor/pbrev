function SecondMenu() {
    const liMenu = `flex items-center h-full w-1/9`;
    const linkMenu = `font-BowlbyOne`;
    return ( 
        <div className="my-5 w-full h-16 bg-slate-300 flex justify-center rounded">
            <ul className="flex justify-between w-[95%] h-full flex-row text-slate-950 items-center">
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