const Home = () => {

    return (
        <div id='home' className='h-screen relative'>
            <div className='lg:bg-home-bg bg-home-bg-sm bg-cover h-full lg:h-[73%] lg:mt-[4%]'>
                <div className="lg:hidden flex flex-col h-full justify-center text-center pt-[100%] md:pt-[80%]">
                    <div className="font-sans text-[300%] text-white md:text-[500%]"><span className="bg-brown">Rhenalyn &<br/>Carlo Angelo</span></div>
                    <div className="text-[120%] md:text-[180%] text-black"><span className="bg-nude">are getting married</span></div>
                </div>
            </div>
        </div>
    );
}

export default Home;