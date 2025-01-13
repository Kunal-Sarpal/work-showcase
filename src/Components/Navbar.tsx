import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className=" p-4 text-zinc-800  flex justify-between  border-b-2 p-5 m-2 items-center">
            <h1 className="text-2xl font-extrabold ">Work <span className="font-semibold tracking-widest text-green-500">Showcase</span></h1>
            <div className="space-x-4 ">
                <a href="#fullstack" className="hover:p-2 transition-all ease-in-out duration-150  hover:border-b border-zinc-700">Full Stack</a>
                <a href="#frontend" className="hover:p-2 transition-all ease-in-out duration-150  hover:border-b border-zinc-700">Frontend</a>
                <a href="#html" className="hover:p-2 transition-all ease-in-out duration-150  hover:border-b border-zinc-700">HTML/CSS</a>
                <a href="#apps" className="hover:p-2 transition-all ease-in-out duration-150  hover:border-b border-zinc-700">Apps</a>
            </div>
        </nav>
    );
};

export default Navbar;
