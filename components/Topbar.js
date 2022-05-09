import React from "react";
import Link from "next/link";

const Topbar = () => {
  return (
    <main className="top-0 fixed w-full z-10 ">
      <div className="bg-regal-blue flex-col">
        <div className=" text-light-gray relative justify-center sm:justify-center md:justify-start md:ml-[6rem] flex py-2 text-[14px] sm:[16px] md:text-[14px] text-w-a">
          <Link href="https://aws.com">
            <div className="bar-1 flex-row flex cursor-pointer">
              Powered by AWS
              <span className="relative transform duration-300 ml-2">→</span>
            </div>
          </Link>{" "}
          <div className="side-icons font-[400] right-0 fixed mr-[3rem] pl-4 hidden text-light-gray md:flex justify-end">
            <ul className="flex flex-row space-x-4 justify-end">
              <Link href='/apply'><li className="hover:text-white cursor-pointer">We're Hiring</li></Link>
              <Link href='/blogs'><li className="hover:text-white cursor-pointer">Blog</li></Link>
              <Link href='/docs'><li className="hover:text-white cursor-pointer">Docs</li></Link>
              <Link href='/support'><li className="hover:text-white cursor-pointer">Get Support</li></Link>
              <li className="hover:text-white cursor-pointer"><a href="https://github.com/Encodin" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Topbar;
