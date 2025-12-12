import ProjectScreenshots from './ProjectScreenshots';
const projects = [
    {
        id: "Streamify",
        title: "Language Exchange platform",
        live: "",
        code: "https://github.com/Jay-kabdwal/Streamify",
        description:
            "Fullstack Language Exchange platform where users can practice languages via text, audio, and video chats. Implemented real-time messaging with Stream, including typing indicators and message reactions. Developed 1-on-1 and group video calls using WebRTC, with features like screen sharing and recording. Secured the application with JWT authentication and protected routes. Designed 32 unique UI themes for a personalized user experience. serverside pagination and lazy message loading",
        tags: ["React", "Express", "MongoDB", "TailwindCSS", "Zustand", "Tanstack query"],
        screens: 7,
    },
    {
        id: "Staff-Attendance-App",
        title: "Face Recognition Attendance System",
        live: "",
        code: "https://github.com/Jay-kabdwal/staff-attendance-app",
        description:
            "This is a full-stack, proof-of-concept mobile app to streamline staff attendance using facial recognition. Staff can mark attendance by entering their Staff ID and taking a photo. The admin panel allows adding staff and viewing attendance. A mobile-based staff attendance system using face recognition. Staff members can mark their attendance by entering their ID and taking a live photo. The admin can manage staff, upload training images, and view attendance records through a dedicated admin panel.",
        tags: ["React Native (Expo)", "TypeScript", "PostgreSQL", "FastAPI (Python)", "TailwindCSS", "face_recognition library"],
        screens: 10,
    },
    {
        id: "LocalFoodie",
        title: "food delivery WebApp",
        live: "https://local-foodie-kzlp.vercel.app/",
        code: "https://github.com/Jay-kabdwal/LocalFoodie",
        description:
            "localfoodie a frontend only web application which have feature like add to cart add to favorites carousal and filter search it was implemented using only reactjs and tailwind css Since it does not have a backend ive used local storage for data persistentce",
        tags: ["React", "PostgreSQL", "TailwindCSS", "Express"],
        screens: 5,
    },
];

export default function Projects() {
    return (
        <section className="max-w-6xl mx-auto p-6 mt-12 cursor-default">
            <h3 className="text-3xl font-bold mb-8">Projects</h3>
            <div className="space-y-10">
                {projects.map((project, index) => (
                    <div key={index} className="space-y-3">
                        {/* Title (links to live project) */}
                        <a
                            href={project.live || project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-semibold text-blue-500 hover:opacity-80 transition"
                        >
                            {project.title}
                        </a>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                        {project.screens && (
                            <ProjectScreenshots
                                projectId={project.id}
                                totalScreens={project.screens}
                            />
                        )}
                        {/* Buttons */}
                        <div className="flex gap-3">
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-sm rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition"
                            >
                                View Code
                            </a>
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1.5 text-sm rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition"
                                >
                                    Live Demo
                                </a>
                            )}
                        </div>


                        {/* Divider */}
                        {index < projects.length - 1 && (
                            <div className="border-t border-gray-300 dark:border-white/20 mt-6"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
