import React from "react";
import ProjectCard from "./ProjectCard";

interface SectionProps {
    id: string;
    title: string;
    projects: { name: string; link: string }[];
}

const Section: React.FC<SectionProps> = ({ id, title, projects }) => {
    return (
        <section id={id} className="my-8">
            <h1 className="text-2xl  font-bold mb-10  w-fit pb-3 border-zinc-400 text-zinc-700 ">{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <ProjectCard key={project.name} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Section;
