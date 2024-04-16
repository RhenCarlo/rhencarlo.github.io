import { useState, useEffect } from "react";

const Nav = (props) => {

    const [lgPos, setLgPos] = useState("top");
    const [pos, setPos] = useState("top");
    const [open, setOpen] = useState(false);

    useEffect (() => {
        document.addEventListener("scroll", () => {
            let lgNavTop = document.getElementById("nav-lg").getBoundingClientRect().top;
            let smNav = document.documentElement.scrollTop;

            lgNavTop <= 0 ? setLgPos("moved") : setLgPos("top");
            smNav > 0 ? setPos('moved') : setPos('top');
        })
    },[])

    const handleNav = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* desktop */}
            
            <img src={props.data.assets.flower} className='sm:hidden md:hidden lg:block mx-auto mt-[-30%] z-30 min-w-[30%] relative'/>
            <nav id='nav-lg' className={'sm:hidden md:hidden lg:block w-3/4 mx-auto top-0 -mt-[4%] mb-[5%] z-20 sticky transition-all duration-[0.5s]' + (lgPos == "top" ? ' bg-cream py-[4%]':' bg-white w-full py-[2%]')}>
                <ul className={'text-[110%] flex items-center ' + (lgPos == 'top' ? 'space-x-[6%] justify-center ' : 'justify-around')}>
                    <li className={'font-sans text-brown-dark ' + (lgPos == 'top' ? ' leading-snug text-[250%] text-center' : 'text-[200%] mr-[20%]')}>
                        <a className="whitespace-pre" href='#'>{lgPos == 'top' ? props.data.title.two : props.data.title.one}</a>
                    </li>
                    {props.data.section && props.data.section.map((o, i) => {
                        if (o.nav == true){
                            return <li className={lgPos == 'top' ? 'underline' : 'hover:text-brown'} key={i}>
                                        <a href={o.link}>{o.name}</a>
                                    </li>
                        }
                    })}
                </ul>
            </nav>

            {/* mobile and tablet */}

            <div id='nav' className={'lg:hidden fixed top-0 md:p-7 p-3.5 w-screen flex justify-between z-20' + (pos == 'top' ? ' text-white' : ' bg-white text-brown-dark')}>
                <div className="md:text-3xl text-xl">{props.data.title.hashtag}</div>
                <img onClick={handleNav} src={pos == 'top' ? props.data.assets.white : props.data.assets.brown}/>
                <div className={
                    open
                    ? "fixed right-0 top-0 md:w-96 w-60 h-screen bg-white text-black ease-in-out duration-500 md:py-8 py-4 md:pl-14 pl-8 md:pr-7 pr-4"
                    : "ease-in-out md:w-96 w-60 duration-500 fixed top-0 bottom-0 md:-right-96 -right-60"
                    }
                >
                    <img onClick={handleNav} src={props.data.assets.close} className='ml-auto md:mb-10 mb-5'/>
                    <ul>
                        <li onClick={handleNav} className="active:text-brown md:mb-10 mb-5 text-base md:text-xl">
                            <a href="#" className="active:text-brown">Home</a>
                        </li>
                        {props.data.section && props.data.section.map((o, i) => {
                            if (o.nav == true){
                                return <li onClick={handleNav} className="md:mb-10 mb-5 text-base md:text-xl" key={i}>
                                            <a href={o.link} className="active:text-brown">{o.name}</a>
                                        </li>
                            }
                        })}
                    </ul>
                </div>
            </div>
            
        </>
    );
}

export default Nav;