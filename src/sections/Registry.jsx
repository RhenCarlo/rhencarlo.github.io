const Registry = (props) => {

    return (
        <div id='registry' className='bg-cream lg:py-24 py-16 lg:px-40 md:px-16 px-8 scroll-m-[5rem]'>
            <div className='text-center'>
                <div className='text-xl mb-5'>{props.data.section[3].alias}</div>
                <div className='lg:px-32 px-0'>Your presence and prayers on our big day are all we ask for! However, should you wish to help us celebrate with a gift, please find our registry information below.</div>
            </div>
            <div className='lg:flex justify-between mt-14'>
                {props.data.qr && props.data.qr.map((o, i) => {
                    return <div key={i} className="lg:mb-0 mb-10 lg:w-[30rem] md:w-[30rem] mx-auto">
                        <div className='text-brown text-2xl text-center mb-4'>{o.name}</div>
                        <img src={o.photo} referrerPolicy="no-referrer"/>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Registry;