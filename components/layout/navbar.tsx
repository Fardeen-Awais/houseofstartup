import { Button } from "../ui/button";
import Logo from "./Logo";
import Navigation from './navigation';

const Navbar = () => {
    return (
        <header className='sticky top-0 z-20 border-b border-transparent bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out mx-auto px-5 h-20 flex items-center justify-between'>
            <nav className='flex justify-between items-center w-full'>
                <Logo />
                <Navigation/>
                <div>
                    <Button className="rounded-3xl bg-[#edededed]">Get started</Button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
