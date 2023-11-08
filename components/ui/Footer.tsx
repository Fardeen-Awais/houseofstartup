import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constant";
import Logo from "./Logo";

const Footer = () => (
  <footer className='flex flex-col -black-100  mt-5 border-t border-gray-100'>
    <div className='flex flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex justify-start items-start gap-6'>
        <Logo/>
        <p className='text-base'>
          Alfarnex 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center mx-auto justify-items-center gap-x-10">
        {footerLinks.map((item) => (
          <div key={item.title} className="flex flex-col gap-6 text-base ">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2023 Alfarnex. All rights reserved</p>

      <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10;">
        <Link href="/" >
          Privacy & Policy
        </Link>
        <Link href="/" >
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;