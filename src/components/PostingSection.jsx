"use client";

import Image from "next/image";
import { Button } from "./ui/button";

export default function PostingSection() {
    return (
        <section className="py-20 ">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative overflow-hidden w-full ">

                    <div
                        className="absolute inset-0 bg-no-repeat bg-contain"
                        style={{ backgroundImage: "url('/bg2.png')" }}
                    />


                    <div className="relative grid lg:grid-cols-2 items-center gap-10 px-10 md:px-16 py-14 text-white">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                Start posting <br />
                                jobs today
                            </h2>

                            <p className="text-blue-100 mb-8 font-epilogue">
                                Start posting jobs for only $10.
                            </p>

                            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-base font-semibold ">
                                Sign Up For Free
                            </Button>
                        </div>

                        <div className="relative  lg:flex justify-start">
                            <Image
                                src="/Dashboard Company.png"
                                alt="Dashboard preview"
                                width={420}
                                height={420}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}