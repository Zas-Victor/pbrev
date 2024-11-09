function ConteinerLogin() {
    const input_form = `mt-3 w-[87%] h-7 bg-blue-950 text-center font-bold font-mono font-black hover:bg-sky-800 opacity-85`;

    return ( 
        <div className="w-[90%] h-40 border border-slate-600 mt-5 mr-4 flex flex-col items-center">
            <button className={`${input_form} mt-[15px]`}>ENTRAR</button>
            <button className={`${input_form}`}>CADASTRA</button>
            <span className={`mt-3 text-center text-sm`}><a href="">Recuperar Conta</a></span>
            <span className={`mt-1 text-center text-sm`}><a href="">Esqueci a minha senha</a></span>
        </div>
    );
}

export default ConteinerLogin;