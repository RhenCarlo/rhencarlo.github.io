function Location() {

    return (
        <div id='location' className='bg-nude flex items-center justify-around text-center py-[6%]'>
            <div>
                <div className='text-[130%]'>Ceremony & Reception</div>
                <div className='font-sans text-brown-dark text-[300%] text-center leading-loose'>Alta Guia</div>
                <div className='text-[150%]'>37 Bagong Calzada Street,<br/>Ususan, Taguig City, 1632</div>
            </div>
            <div>
                <iframe
                    className='border-2 border-brown-light min-w-[500px] min-h-[450px]'
                    src="https://www.openstreetmap.org/export/embed.html?bbox=121.06841325759889%2C14.534138459290633%2C121.07122689485553%2C14.536059767496228&amp;layer=mapnik&amp;marker=14.535099115481458%2C121.06982007622719" >
                </iframe>
            </div>
        </div>
    );
}

export default Location;