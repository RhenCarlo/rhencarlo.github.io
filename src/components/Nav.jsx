import { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <>
                <img src='/public/assets/flower.png' className='m-auto absolute inset-x-0 bottom-[calc(28%)] z-20 min-w-[calc(30%)]'/>
                <nav className='bg-nude h-[calc(28%)] w-3/4 grid items-center m-auto absolute inset-x-0 bottom-[calc(8%)]'>
                    <ul className='text-2xl flex items-center space-x-[calc(6%)] justify-center'>
                        <li className='font-sans text-brown-dark text-5xl text-center leading-snug'>
                            <a href='/'>Rhenalyn &<br/>Carlo Angelo</a>
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
}

export default Nav;