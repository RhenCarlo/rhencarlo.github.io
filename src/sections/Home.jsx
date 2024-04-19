const Home = () => {

    return (
        <div id='home' className='h-screen relative'>
            <div className='lg:bg-home-bg bg-home-bg-sm bg-cover lg:h-full h-svh'>
                <div className="lg:hidden flex flex-col h-full justify-center text-center pt-[27rem] md:pt-[45rem]">
                    <div className="font-sans md:text-7xl text-5xl md:leading-normal leading-normal text-white"><span className="bg-brown">Rhenalyn &<br/>Carlo Angelo</span></div>
                    <div className="text-lg md:text-3xl text-black"><span className="bg-nude">are getting married</span></div>
                </div>
            </div>
        </div>
    );
}

export default Home;