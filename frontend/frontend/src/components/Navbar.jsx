import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
      const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setIsSticky(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <>
        <nav>


        </nav>
        <div className={` text-[20px] font-[Roboto] px-8 fixed top-0 left-0 w-full z-10  transition-all ${isSticky ? 'bg-white shadow' : 'bg-transparent'}`}  style={{transition: 'background-color 0.5s ease' }}>
            <div className="flex  items-center  py-5 ">
                <ul className=" flex-1 flex gap-7 justify-start items-center w-[400]">
                    <li className="hover:underline  cursor-pointer" >Shop</li>

                    <li className="flex justify-center items-end cursor-pointer">About <span class="material-symbols-outlined cursor-pointer">expand_more</span></li>
                    <li className="hover:underline  cursor-pointer">Sustainability</li>
                </ul>
                <p className="font-bold text-5xl px-5">Bite</p>
                <div className="w-[100px] flex-1 flex justify-end ">
                    <span class="material-symbols-outlined mr-6 cursor-pointer">
                    person
                    </span>
                    <span class="material-symbols-outlined cursor-pointer">
                    shopping_cart
                    </span>
                </div>
            </div>
        </div>

        
        
        </>
      );
}
 
export default Navbar;