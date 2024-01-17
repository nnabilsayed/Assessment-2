import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function App() {
  return (
    <Card className="py-4 rounded-lg border border-solid border-gray-300 bg-white shadow-md mb-28">
      <img
        alt="Card background"
        className="rounded-2xl p-2 -mt-4"
        src="test.png"
      />
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start p-2">
        <p className="text-tiny uppercase font-bold">Website SEO 2.0</p>
        <small className="text-default-500 w-80 ">
          Learn how to create compelling copy using keywords to increase your
          website's ranking.
        </small>
      </CardHeader>
      <CardBody className="pt-1 pl-1">
        {" "}
        {/* Adjusted top padding with pt-1 */}
        <div className="flex w-105 gap-2">
          <button className="flex items-center justify-center w-105 h-28 text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] grow px-3 py-2.5 rounded-[70px] border-solid">
            Learn More
          </button>
          <button className="flex items-center justify-center w-105 h-28 text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] grow px-3 py-2.5 rounded-[70px] border-solid">
            Enroll
          </button>
        </div>
      </CardBody>
    </Card>
  );
}
