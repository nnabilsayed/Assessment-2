import React from "react";

const Sidebar = () => {
  return (
    <>
      <button className="w-justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] bg-slate-800 flex flex-col w-7 h-7 px-2 rounded-[70px] border-solid">
        <img
          loading="lazy"
          src="icon.png"
          className="mt-2 aspect-square object-contain object-center w-full justify-center items-center overflow-hidden"
        />
      </button>
      <div className="items-center self-stretch flex flex-col mt-6 mb-[580px] pl-4 pr-8 py-2">
        <button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a8a494c5374191464628c32f59170127d7f0509c1dbbdcc898577dac075b7ff?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
            className="aspect-[1.33] object-contain object-center w-4 justify-center items-center overflow-hidden"
          />
        </button>
        <button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/663b62b15ec6a8be01d4fe01f46b9e3cdef96376a95a6f02dbf5078bdd69917d?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
            className="aspect-[1.33] object-contain object-center w-4 justify-center items-center overflow-hidden mt-10"
          />
        </button>
        <button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/33d802558c65a15c1ee809920905da10723b94353d1b1aa3272b5cea939de930?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
            className="aspect-[1.33] object-contain object-center w-4 justify-center items-center overflow-hidden  mt-10"
          />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
