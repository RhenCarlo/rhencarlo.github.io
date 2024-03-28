import { useState } from 'react';

function Form () {

    const [selected, setSelected] = useState('');

    const radioHandler = (e) => {
        setSelected(e.target.value);
    }

    return (
        <form action='submit' className='text-center'>
            <input type="text" name="username" id="username" autoComplete="username" className="w-[37%] border-2 border-black px-[1%] py-[0.5%] text-black text-[115%] placeholder:text-gray " placeholder="Enter full name(s)"/>
            <div className='flex w-[37%] mx-auto my-[2.5%]'>
                <label className='cursor-pointer flex mr-10'>
                    <span className={'checkmark mr-5 h-[27px] w-[27px] border-2 border-black block ' + (selected == 'accept' ? 'bg-brown-dark before:content-["\\2713"] text-white':'bg-white')}></span>
                    <span className='text-[110%]'>Count me in - see you there!</span>
                    <input type='radio' value='accept' id='accept' checked={selected === 'accept'} onChange={radioHandler} className='opacity-0 h-0 w-0'/>
                </label>
                <label className='cursor-pointer flex'>
                    <span className={'checkmark mr-5 h-[27px] w-[27px] border-2 border-black block ' + (selected == 'reject' ? 'bg-brown-dark before:content-["X"] text-white':'bg-white')}></span>
                    <span className='text-[110%]'>Sorry, I can&apos;t make it.</span>
                    <input type='radio' value='reject' id='accept' checked={selected === 'reject'} onChange={radioHandler} className='opacity-0 h-0 w-0'/>
                </label>
            </div>
            <button type='submit' className='mx-auto border-2 border-black bg-black text-white px-[2%] py-[0.5%] text-[120%]'>Submit</button>
        </form>
    );
}

export default Form;