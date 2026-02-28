"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-transparent text-primary/80 fixed top-0 z-50 w-full">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <Link href="/" className="flex items-center gap-1">
                        <Image src={"/Logo 2.png"} alt="logo" width={32} height={32} />
                        <span className="text-lg font-semibold text-primary">QuickHire</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8 text-gray-300">
                        <Link href="/jobs" >
                            Find Jobs
                        </Link>

                        <Link href="/companies" >
                            Browse Companies
                        </Link>
                    </div>

                </div>


                <div className="hidden md:flex items-center gap-3">

                    <Link href="/login">
                        <Button

                            className="text-blue-600 bg-transparent "
                        >
                            Login
                        </Button>
                    </Link>


                    <div className="w-px h-5 bg-blue-600/40" />

                    <Link href="/signup">
                        <Button className="bg-blue-600 text-white hover:bg-blue-700">
                            Sign Up
                        </Button>
                    </Link>

                </div>

                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-black border-t border-gray-800 px-6 pb-6">
                    <div className="flex flex-col gap-4 pt-4 text-gray-300">
                        <Link href="/jobs" onClick={() => setOpen(false)}>
                            Find Jobs
                        </Link>

                        <Link href="/companies" onClick={() => setOpen(false)}>
                            Browse Companies
                        </Link>

                        <hr className="border-gray-800" />

                        <Link
                            href="/login"
                            onClick={() => setOpen(false)}
                        >
                            Login
                        </Link>

                        <Link
                            href="/signup"
                            onClick={() => setOpen(false)}
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}