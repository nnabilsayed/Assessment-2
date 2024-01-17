import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-white flex flex-col items-stretch">
      <div className="bg-stone-50 flex justify-between gap-5 px-3 py-2.5 items-start max-md:max-w-full max-md:flex-wrap">
        <Link href={"/"}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3833ad54abbe71b5e1e165734558950c7b02e0292a0f4592d0ce6d1b5e3ee6da?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
            className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
          />
        </Link>
        <div className="flex gap-5 py-3 max-md:max-w-full max-md:flex-wrap items-center">
          <button className="flex items-center flex-col py-0.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16fad5cd443da89a473c6b2291a559f0c7fcfe041163285f32e6d17b5f570b4?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
              className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden max-w-full"
            />
            <div className="not-italic font-Montserrat text-xxs text-zinc-800 text-center font-semibold leading-3 tracking-normal self-stretch whitespace-nowrap mt-1">
              All courses
            </div>
          </button>

          <div className="justify-center items-stretch flex gap-5">
            <button className="items-center flex basis-[0%] flex-col py-0.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b8fd6a12c5717523368c24736b9189f00e331f6698b0965265afde1e1a723d0?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden"
              />
              <div className=" not-italic  font-Montserrat text-xxs text-zinc-800  text-center  font-semibold leading-3 tracking-normal self-stretch whitespace-nowrap mt-1">
                Search
              </div>
            </button>
            <button className="items-center flex grow basis-[0%] flex-col py-0.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e9c2d6c2e9ba3e072144bb28ca685f840e57f03a0a10dc41d6445f66ce2ff31?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden max-w-full"
              />
              <div className="not-italic  font-Montserrat text-xxs text-zinc-800 text-center  font-semibold leading-3 tracking-normal self-stretch whitespace-nowrap mt-1">
                My profile
              </div>
            </button>
            <button className="items-center flex grow basis-[0%] flex-col py-0.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b03391fe4aed5dd81db75a159449172e7fe5bf8636a3270fcc5a7dbbdb97dc7d?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden max-w-full"
              />
              <div className="not-italic  font-Montserrat text-xxs text-zinc-800 text-center font-semibold leading-3 tracking-normal self-stretch whitespace-nowrap mt-1">
                Notifications
              </div>
            </button>
            <button className="items-center flex grow basis-[0%] flex-col py-0.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/42b261774d0db1265b8a7e803d0d5d24714319cb17914f2a3d94a818a170c263?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden max-w-full"
              />
              <div className="not-italic  font-Montserrat text-xxs text-zinc-800 text-center  font-semibold leading-3 tracking-normal self-stretch whitespace-nowrap mt-1">
                Support
              </div>
            </button>
            <button className="items-center flex basis-[0%] flex-col py-0.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8a374aeb20eb82f07025ee5222b4965286001de895cf981ea638a7be221b07c?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                className="aspect-[1.69] object-contain object-center w-[27px] justify-center items-center overflow-hidden"
              />
              <div className="not-italic  font-Montserrat text-xxs text-zinc-800 text-center  font-semibold leading-3 tracking-normal self-stretch whitespace-nowrap mt-1">
                FAQs
              </div>
            </button>
            <button className="items-center flex grow basis-[0%] flex-col py-0.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e2ee47bcd6d3fd8a6d68631e11a215edf58d3af9111f7e35110360d6f82865a?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden max-w-full"
              />
              <div className="not-italic  font-Montserrat text-xxs text-zinc-800 text-center  font-semibold leading-3 tracking-normal self-stretch whitespace-nowrap mt-1">
                Settings
              </div>
            </button>
            <button className="items-center flex grow basis-[0%] flex-col py-0.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e722c108b776aed86b6879e57095111efcb50996e89f3b126ebe62c900af58e0?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden max-w-full"
              />
              <div className="not-italic  font-Montserrat text-xxs text-zinc-800 text-center  font-semibold leading-3 tracking-normal self-stretch whitespace-nowrap mt-1">
                Log out
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
