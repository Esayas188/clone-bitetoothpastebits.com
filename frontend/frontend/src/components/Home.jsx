import '../index.css'
import home from '../img/home.webp';
import backgroundq from '../img/backgroundq.webp'
import a1 from '../img/a1.webp';
import b1 from '../img/b1.webp';
import a2 from '../img/a2.webp';
import b2 from '../img/b2.webp';
import a3 from '../img/a3.webp';
import b3 from '../img/b3.webp';
import a4 from '../img/a4.webp';
import b4 from '../img/b4.webp';
import a5 from '../img/a5.webp';
import b5 from '../img/b5.webp';
import daily from '../img/daily.webp';
import holiday from '../img/holiday.webp';






import Navbar from './Navbar';
const Home = () => {
    return ( 
        <>
        
        <div className="font-[Roboto]  px-8  pb-10  min-h-screen min-w-screen bg-cover bg-center " style={{backgroundImage: `url(${home})`,}}>
            <Navbar/>

            <div className='flex justify-start items-end  min-h-screen'>
                <div className=' w-[400px] pb-8'>
                    <div className=' my-7'>
                        <p className=' text-[60px] leading-[70px] tracking-tight'>Anything but routine.</p>
                        <p className=' text-[26px] leading-[31px] tracking-tight '>Effective, earth-friendly daily essentials made clean ingredients.</p>
                    </div>

                    <a className=' bg-[#131313]  hover:bg-white hover:text-[#131313] cursor-pointer text-white px-10 py-4 rounded-full font-extrabold transition-all duration-500' >Shop All</a>
                </div>




            </div>

        </div>
        <div className=' h-full pt-10 pb-28 overflow-x-auto '>
            <div className='  mx-[100px]  grid grid-cols-5 gap-4 min-w-[1000px]  '>
                <div class="  rounded-xl overflow-hidden z-0">
                    <div className='container'>
                        <img src={a1} alt="Avatar"  className='image'/>
                        <img className="overlay " src={b1} alt="" />
                    </div>

                    <div className='flex pt-2 flex-col justify-center items-center space-y-2'>
                        <p className=' text-lg font-extrabold'>Toothpaste Bits</p>
                        <p className=' text-xs font-bold'>FROM $8 / MONTH</p>
                        <a className='  w-full text-center bg-white text-[#131313] hover:bg-[#131313] hover:text-white cursor-pointer border border-[#131313] px-10 py-2 rounded-full font-extrabold transition-all duration-500' >Shop Now</a>
                    </div>
                </div>
                <div class="  rounded-xl overflow-hidden z-0">
                    <div className='container'>
                        <img src={a2} alt="Avatar"  className='image'/>
                        <img className="overlay " src={b2} alt="" />
                    </div>

                    <div className='flex pt-2 flex-col justify-center items-center space-y-2'>
                        <p className=' text-lg font-extrabold'>Body Balm</p>
                        <p className=' text-xs font-bold'>FROM $11 / MONTH</p>
                        <a className='  w-full text-center bg-white text-[#131313] hover:bg-[#131313] hover:text-white cursor-pointer border border-[#131313] px-10 py-2 rounded-full font-extrabold transition-all duration-500' >Shop Now</a>
                    </div>
                </div>
                <div class="  rounded-xl overflow-hidden z-0">
                    <div className='container'>
                        <img src={a3} alt="Avatar"  className='image'/>
                        <img className="overlay " src={b3} alt="" />
                    </div>

                    <div className='flex pt-2 flex-col justify-center items-center space-y-2'>
                        <p className=' text-lg font-extrabold'>Cleansing Bar</p>
                        <p className=' text-xs font-bold'>FROM $3 / MONTH</p>
                        <a className='  w-full text-center bg-white text-[#131313] hover:bg-[#131313] hover:text-white cursor-pointer border border-[#131313] px-10 py-2 rounded-full font-extrabold transition-all duration-500' >Shop Now</a>
                    </div>
                </div>
                <div class="  rounded-xl overflow-hidden z-0">
                    <div className='container'>
                        <img src={a4} alt="Avatar"  className='image'/>
                        <img className="overlay " src={b4} alt="" />
                    </div>

                    <div className='flex pt-2 flex-col justify-center items-center space-y-2'>
                        <p className=' text-lg font-extrabold'>Deodorant</p>
                        <p className=' text-xs font-bold'>FROM $11 / MONTH</p>
                        <a className='  w-full text-center bg-white text-[#131313] hover:bg-[#131313] hover:text-white cursor-pointer border border-[#131313] px-10 py-2 rounded-full font-extrabold transition-all duration-500' >Shop Now</a>
                    </div>
                </div>
                <div class="  rounded-xl overflow-hidden z-0">
                    <div className='container'>
                        <img src={a5} alt="Avatar"  className='image'/>
                        <img className="overlay " src={b5} alt="" />
                    </div>

                    <div className='flex pt-2 flex-col justify-center items-center space-y-2'>
                        <p className=' text-lg font-extrabold'>Whitening Gel</p>
                        <p className=' text-xs font-bold'>FROM $5 / MONTH</p>
                        <a className='  w-full text-center bg-white text-[#131313] hover:bg-[#131313] hover:text-white cursor-pointer border border-[#131313] px-10 py-2 rounded-full font-extrabold transition-all duration-500' >Shop Now</a>
                    </div>
                </div>
                

            </div>


        </div>
        <div className='min-h-[700px] bg-no-repeat bg-cover bg-center m-8 flex flex-col justify-center items-center' style={{backgroundImage: `url(${backgroundq})`,}}>

            <div className='flex flex-col justify-center items-center  w-[500px] '>
                <p className=' text-2xl'>Bite stands for </p>
                <p className=' text-2xl'>Because It's The Earth</p>
                <p className=' text-sm text-center '>We make daily routines better for your body and better for our planet — because small changes can make a big impact.</p>
                <a className=' bg-[#131313] mt-4  hover:bg-white hover:text-[#131313] border-2 border-[#131313] cursor-pointer text-white px-10 py-2 rounded-full font-extrabold transition-all duration-500' >About Us</a>
                
            </div>

        </div>
        <div className='grid grid-cols-2 m-[100px] mt-[100px] gap-4 rounded-none'>
            <div className=' p-6 h-[650px] bg-center bg-cover flex flex-col justify-end items-center' style={{backgroundImage: `url(${daily})`,}}>
                <p className=' text-2xl'>Impress your dentist</p>
                <a href="" className='px-6 mt-4 border-2 border-[#131313] py-2 font-bold bg-[#131313] text-white hover:bg-white hover:text-[#131313] rounded-full transition-all duration-500'>Shop the Daily Habits Set</a>
            </div>
            <div className='p-6  bg-cover bg-center flex flex-col justify-end items-center' style={{backgroundImage: `url(${holiday})`,}}>
                <p className='text-2xl'>Holiday gift sets for you or them</p>
                <p className='text-2xl font-[Roboto]'>(But,probably you)</p>
                <a href="" className=' mt-4 px-6  border-2 border-[#131313] py-2 font-bold bg-[#131313] text-white hover:bg-white hover:text-[#131313] rounded-full transition-all duration-500'>Shop the Daily Habits Set</a>

            
            </div>

        </div>

        </>
     );
}
 
export default Home;