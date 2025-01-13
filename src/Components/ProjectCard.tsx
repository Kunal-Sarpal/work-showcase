import React from "react";

interface ProjectCardProps {
    name: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, link }) => {
    return (
        <div className="border p-4 rounded shadow border-b-4 hover:scale-[103%] transition-all duration-300 ease-in-out">
            <h2 className="text-lg font-semibold">{name}</h2>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                Visit Project
            </a>
        </div>
    );
};

export default ProjectCard;
