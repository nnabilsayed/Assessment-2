"use client";
import Image from "next/image";
import Card from "./Components/Card";
import Cards from "./Components/Card";
import Link from "next/link";
import Sidebar from "./Components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="bg-white flex flex-col items-stretch">
        <div className="flex flex-col md:flex-row gap-0 max-md:max-w-full">
          <div className="hidden md:flex md:flex-none w-[80px] overflow-hidden flex-col pl-4 pt-6 pb-12 border-r border-solid items-end max-md:flex-wrap">
            <Sidebar></Sidebar>
          </div>

          <div className="items-stretch flex-grow flex-col pl-5 pr-10 pt-5 pb-10 max-md:max-w-full max-md:pr-5">
            <div className="justify-between items-stretch bg-slate-300 flex w-full gap-5 p-6 rounded-lg max-md:max-w-full max-md:flex-wrap max-md:px-5">
              <div className="items-center flex justify-between gap-3">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/374cd90dcce37fddd6fe30d969e6f52733b9d4a842ba8ae1472bd1a2f50b3773?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/374cd90dcce37fddd6fe30d969e6f52733b9d4a842ba8ae1472bd1a2f50b3773?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/374cd90dcce37fddd6fe30d969e6f52733b9d4a842ba8ae1472bd1a2f50b3773?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/374cd90dcce37fddd6fe30d969e6f52733b9d4a842ba8ae1472bd1a2f50b3773?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/374cd90dcce37fddd6fe30d969e6f52733b9d4a842ba8ae1472bd1a2f50b3773?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/374cd90dcce37fddd6fe30d969e6f52733b9d4a842ba8ae1472bd1a2f50b3773?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/374cd90dcce37fddd6fe30d969e6f52733b9d4a842ba8ae1472bd1a2f50b3773?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/374cd90dcce37fddd6fe30d969e6f52733b9d4a842ba8ae1472bd1a2f50b3773?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                  className="aspect-square object-contain object-center w-[30px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                />
                <span className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="text-zinc-800 text-xl font-medium leading-7 tracking-tight ">
                    Hi, Craig
                  </div>
                  <div className="text-zinc-800 text-xs font-medium leading-4 tracking-tight whitespace-nowrap">
                    ORGANIZATION NAME
                  </div>
                </span>
              </div>
              <span className="items-stretch self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
                <div className="text-zinc-800 text-base font-medium leading-5 tracking-tight grow whitespace-nowrap">
                  Influence Readiness Score:{" "}
                  <span className="font-bold">76</span>
                </div>
                <div className="text-zinc-800 text-base font-medium leading-5 tracking-tight grow whitespace-nowrap">
                  Your status: <span className="font-bold">Celebrity</span>
                </div>
              </span>
              <div className="justify-center items-stretch self-center flex gap-0 my-auto">
                <span className="justify-between items-stretch flex gap-2.5 px-3 py-2 rounded-[70px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4d3d85849101b976a7de21fb2f3168dd5e073258c875ebeab11dcc98fbd684b?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                    className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden shrink-0 max-w-full"
                  />
                  <button className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight grow whitespace-nowrap self-start">
                    LaunchPad
                  </button>
                </span>
                <span className="justify-between items-stretch flex gap-2.5 px-3 py-2 rounded-[70px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/adb50685b53b60b306c01d40c7a8774d5e6c2dc476d52e97a97e06c7f4233211?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                    className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden shrink-0 max-w-full"
                  />
                  <Link href={"/test"}>
                    <div className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight grow whitespace-nowrap self-start">
                      Readiness test
                    </div>
                  </Link>
                </span>
              </div>
            </div>
            <span className="justify-between items-center bg-rose-200 flex w-full gap-5 mt-2 px-6 py-1.5 rounded-lg max-md:max-w-full max-md:flex-wrap max-md:px-5">
              <div className="text-zinc-800 text-base font-bold leading-5 tracking-tight grow shrink basis-auto my-auto">
                Complete your Influence Readiness Test
              </div>
              <span className="justify-between items-stretch self-stretch flex gap-2.5 px-3 py-2 rounded-[70px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/806127dc2a854f81bc2d9ace7a5d203ea113d1f46c2c0771a3f83f6194d9c8fd?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                  className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
                <Link href={"/test"}>
                  <div className="text-zinc-800 text-center text-sm font-semibold leading-4 tracking-tight grow whitespace-nowrap self-start">
                    Readiness test
                  </div>
                </Link>
              </span>
            </span>
            <div className="mt-6 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <div className=" justify-center items-stretch  flex grow flex-col w-full  max-md:max-w-full max-md:mt-5">
                    <div className="rounded-xl flex-col overflow-hidden relative flex min-h-[330px] w-full pl-3 pr-16 pt-12 pb-3 items-start max-md:max-w-full max-md:pr-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d3c85e2e4e40d2cb09ba2769b0c4af0695eb09920393d48cfbffd8555687663a?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3c85e2e4e40d2cb09ba2769b0c4af0695eb09920393d48cfbffd8555687663a?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3c85e2e4e40d2cb09ba2769b0c4af0695eb09920393d48cfbffd8555687663a?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3c85e2e4e40d2cb09ba2769b0c4af0695eb09920393d48cfbffd8555687663a?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3c85e2e4e40d2cb09ba2769b0c4af0695eb09920393d48cfbffd8555687663a?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3c85e2e4e40d2cb09ba2769b0c4af0695eb09920393d48cfbffd8555687663a?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3c85e2e4e40d2cb09ba2769b0c4af0695eb09920393d48cfbffd8555687663a?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3c85e2e4e40d2cb09ba2769b0c4af0695eb09920393d48cfbffd8555687663a?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <span className="relative justify-end items-stretch bg-white flex w-[223px] flex-col mt-20 p-4 rounded-lg   ">
                        <div className="text-red-600 text-xs font-black leading-3 tracking-tight uppercase">
                          New course
                        </div>
                        <div className="text-zinc-800 text-base font-bold leading-5 tracking-tight whitespace-nowrap mt-2">
                          Social media strategy
                        </div>
                        <div className="text-zinc-800 text-sm font-medium leading-5 tracking-tight mt-2">
                          Learn how to leverage your social media following to
                          create a community and increase your reach.
                        </div>
                        <button className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight justify-center items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] mt-2 px-3 py-2.5 rounded-[70px] border-solid">
                          Learn more
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <span className="items-start self-stretch bg-white flex grow flex-col w-full py-px max-md:max-w-full max-md:mt-5">
                    <div className="text-zinc-800 text-lg font-semibold leading-5 tracking-tight self-stretch max-md:max-w-full">
                      Next steps
                    </div>
                    <span className="items-center bg-stone-50 self-stretch flex justify-between gap-2 mt-4 px-4 py-3 rounded-lg max-md:max-w-full max-md:flex-wrap">
                      <div className="text-zinc-800 text-sm font-medium leading-5 tracking-tight grow my-auto max-md:max-w-full">
                        Complete task________
                      </div>

                      <button className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] self-stretch px-3 py-2.5 rounded-[70px] border-solid">
                        View action plan
                      </button>
                    </span>
                    <span className="items-center bg-stone-50 self-stretch flex justify-between gap-2 mt-2 px-4 py-3 rounded-lg max-md:max-w-full max-md:flex-wrap">
                      <div className="text-zinc-800 text-sm font-medium leading-5 tracking-tight grow my-auto max-md:max-w-full">
                        Start class Modules 2 of _____________
                      </div>
                      <button className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] self-stretch px-3 py-2.5 rounded-[70px] border-solid">
                        Jump back in
                      </button>
                    </span>
                    <span className="items-center bg-stone-50 self-stretch flex justify-between gap-2 mt-2 px-4 py-3 rounded-lg max-md:max-w-full max-md:flex-wrap">
                      <div className="text-zinc-800 text-sm font-medium leading-5 tracking-tight grow my-auto max-md:max-w-full">
                        Attend office hours
                      </div>
                      <span className="justify-between border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] self-stretch flex gap-2.5 px-3 py-2 rounded-[70px] border-solid items-start">
                        <button className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight">
                          Register
                        </button>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/442102fcf96f6bb8f65e7191f6ca13a18f4db50bdb1c5acbc3239094ed7a74c4?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                          className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                      </span>
                    </span>
                    <span className="items-center bg-stone-50 self-stretch flex justify-between gap-2 mt-2 px-4 py-3 rounded-lg max-md:max-w-full max-md:flex-wrap">
                      <div className="text-zinc-800 text-sm font-medium leading-5 tracking-tight grow my-auto max-md:max-w-full">
                        Connect with a Vetted Expert
                      </div>
                      <button className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] self-stretch px-3 py-2.5 rounded-[70px] border-solid">
                        Vetted experts
                      </button>
                    </span>
                    <button className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] mt-4 px-6 py-4 rounded-[70px] border-solid self-start max-md:px-5">
                      View more
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <span className="justify-between flex w-full gap-5 mt-6 items-start max-md:max-w-full max-md:flex-wrap">
              <div className="text-zinc-800 text-2xl font-bold leading-6 tracking-tight">
                New courses
              </div>
              <div className="items-stretch self-stretch flex justify-between gap-4 mt-2 max-md:flex-wrap">
                <div className="justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-100,#BEC1C8)] flex aspect-[1.2857142857142858] flex-col px-3 py-2 rounded-[70px] border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c7058113b83c0e184e9c948056970a75651d8ab4f90500f5b1bf2ddd97ef6f3?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                    className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden"
                  />
                </div>
                <button className="justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] flex aspect-[1.2857142857142858] flex-col px-3 py-2 rounded-[70px] border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3901e09e15b921286a9591e25fe9843bfd7a0fc12e654a4d4e4dba99182011c9?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                    className="aspect-square object-contain object-center w-3 justify-center items-center overflow-hidden"
                  />
                </button>
              </div>
            </span>
            <div className="items-stretch overflow-x-auto flex gap-5 mt-3 max-md:max-w-full max-md:flex-wrap max-xl:max-w-4xl max-2xl:flex-wrap max-2xl:max-w-9xl">
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
              <Cards></Cards>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
