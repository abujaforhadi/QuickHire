import { Zap } from 'lucide-react'
import React from 'react'
import { SiAmd, SiVodafone } from 'react-icons/si';
import { BsAmd } from "react-icons/bs";

function CompaniesSection() {
    return (

        <section className='bg-white py-10'>
            <div className='max-w-7xl mx-auto px-6'>
                <p className='text-md  mb-6 md:mb-8 text-center md:text-left font-epilogue text-[#202430]'>Companies we helped grow</p>
                <div className='flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300'>
                    <div className='text-2xl flex items-center gap-1 font-bold font-sans tracking-tighter'><SiVodafone  size={24}/>vodafone</div>
                    <div className='text-3xl font-black tracking-widest '>intel</div>
                    <div className='text-2xl font-bold tracking-[0.2em]'>TESLA</div>
                    <div className='text-2xl flex items-center gap-1 font-bold font-sans tracking-tighter'>AMD<BsAmd  size={24} /></div>
                    <div className='text-2xl font-bold  flex items-center gap-1'>Talkit</div>
                </div>
            </div>
        </section>
    )
}

export default CompaniesSection