// import { useState } from 'react';

// const Form = () => {

//     const [selected, setSelected] = useState('accept');

//     const radioHandler = (e) => {
//         setSelected(e.target.value);
//     }

//     return (
//         <form action='submit' className='text-center'>
//             {/* <input type="text" name="username" id="username" autoComplete="username" className="lg:w-[37%] w-[80%] border-2 border-black lg:p-[0.5%_1%] p-[2%] text-black lg:text-[115%] text-[85%] placeholder:text-gray " placeholder="Enter full name(s)"/>
//             <div className='lg:flex lg:w-[37%] w-[80%] mx-auto lg:my-[2.5%] my-[7%]'>
//                 <label className='cursor-pointer flex items-center lg:mr-10 mr-5 sm:mb-[4%]'>
//                     <span className={'checkmark lg:mr-4 mr-3 h-[27px] w-[27px] border-2 border-black block ' + (selected == 'accept' ? 'bg-brown-dark before:content-["\\2713"] text-white':'bg-white')}></span>
//                     <span className='lg:text-[110%] text-[90%]'>Count me in - see you there!</span>
//                     <input type='radio' value='accept' id='accept' checked={selected === 'accept'} onChange={radioHandler} className='opacity-0 h-0 w-0'/>
//                 </label>
//                 <label className='cursor-pointer flex items-center'>
//                     <span className={'checkmark lg:mr-4 mr-3 h-[27px] w-[27px] border-2 border-black block ' + (selected == 'reject' ? 'bg-brown-dark before:content-["X"] text-white':'bg-white')}></span>
//                     <span className='lg:text-[110%] text-[90%]'>Sorry, I can&apos;t make it.</span>
//                     <input type='radio' value='reject' id='accept' checked={selected === 'reject'} onChange={radioHandler} className='opacity-0 h-0 w-0'/>
//                 </label>
//             </div>
//             <button type='submit' className='mx-auto border-2 border-black bg-black text-white lg:p-[0.5%_2%] p-[2%_5%] lg:text-[120%] text-[90%]'>Submit</button> */}
//         </form>
//     );
// }

// export default Form;