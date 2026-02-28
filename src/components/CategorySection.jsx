import { ArrowRight, Briefcase, Code, LineChart, Megaphone, Monitor, PenTool, Users, Wallet } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

function CategorySection() {
    return (
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-4">
                <h2 className="text-3xl md:text-5xl font-bold ">
                    Explore by <span className="text-blue-500">category</span>
                </h2>
                <Link href="#" className="text-blue-600 font-medium hidden md:flex items-center gap-2 hover:underline">
                    Show all jobs <ArrowRight size={16} />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <CategoryCard icon={PenTool} title="Design" count="235" />
                <CategoryCard icon={LineChart} title="Sales" count="756" />
                <CategoryCard icon={Megaphone} title="Marketing" count="140" active />
                <CategoryCard icon={Wallet} title="Finance" count="325" />
                <CategoryCard icon={Monitor} title="Technology" count="436" />
                <CategoryCard icon={Code} title="Engineering" count="542" />
                <CategoryCard icon={Briefcase} title="Business" count="211" />
                <CategoryCard icon={Users} title="Human Resource" count="346" />
            </div>
        </section>
    )
}

export default CategorySection


const CategoryCard = ({ icon: Icon, title, count, active }) => (
    <div
        className={`
      group cursor-pointer border transition-all flex items-center gap-4 p-5 md:flex-col md:items-start md:gap-4 md:p-6

      ${active
                ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20"
                : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-md"
            }
    `}
    >
        <div
            className={`p-3 rounded-lg flex-shrink-0
        ${active ? "bg-white/20" : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"}
        transition-colors
      `}
        >
            <Icon size={24} />
        </div>

        <div className="flex-1 md:w-full">
            <h3
                className={`font-semibold text-lg md:text-2xl ${active ? "text-white" : "text-slate-900"}`}
            >
                {title}
            </h3>

            <div className="flex items-center justify-between md:mt-1 font-epilogue">
                <p className={`text-sm ${active ? "text-blue-100" : "text-slate-500"
                    }`}
                >
                    {count} jobs available
                </p>

                <ArrowRight
                    size={16}
                    className={`
            ${active ? "text-white" : "text-slate-400 group-hover:text-blue-600"}
          `}
                />
            </div>
        </div>
    </div>
);