function Nav () {

    return (
        <>
            <img src='/assets/flower.png' className='mx-auto mt-[-30%] z-10 min-w-[30%] relative'/>
            <nav className='bg-nude w-3/4 mx-auto top-0 mt-[-4%] mb-[5%] py-[4%] z-0 sticky'>
                <ul className='text-[110%] flex items-center space-x-[6%] justify-center'>
                    <li className='font-sans text-brown-dark text-[250%] text-center leading-snug'>
                        <a href='#'>Rhenalyn &<br/>Carlo Angelo</a>
                    </li>
                    <li className='underline'>
                        <a href='#when'>When</a>
                    </li>
                    <li className='underline'>
                        <a href='#location'>Location</a>
                    </li>
                    <li className='underline'>
                        <a href='#registry'>Registry</a>
                    </li>
                    <li className='underline'>
                        <a href='#rsvp'>RSVP</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;