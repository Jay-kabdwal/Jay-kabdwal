// import React from "react";

// const openSourcePRs = [
//     {
//         id: "godot-website",
//         title: "Godot Website - Fix Accessibility Issues",
//         link: "https://github.com/godotengine/godot-website/pull/1117",
//         description: "Improved the accessibility and usability of a carousel component by enhancing contrast for navigation arrows and text, adding autoplay with pause/resume controls, and including pagination indicators, making it easier for all users to navigate and interact with the content.",
//         tags: [{ label: "enhancement", color: "green" }],
//     },
//     {
//         id: "premid",
//         title: "PreMID - Fix Discord Rich Presence",
//         link: "https://github.com/PreMiD/Activities/pull/9907",
//         description: "Resolved undefined WPM and accuracy values in Monkeytype stats, corrected timestamp formatting to avoid duplicate session times, and introduced a loading state. These improvements ensure stable, accurate, and consistent display of live statistics without visual glitches during reload.",
//         tags: [{ label: "bugfix", color: "red" }],
//     },
// ];

// const tagStyles = {
//     red: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
//     green: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
//     yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
//     gray: "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300",
// };

// export default function OpenSource() {
//     return (
//         <section className="max-w-6xl mx-auto p-6 mt-12 cursor-default">
//             <h3 className="text-3xl font-bold mb-8">Open Source Contributions</h3>
//             <div className="space-y-10">
//                 {openSourcePRs.map((pr, idx) => (
//                     <div key={pr.id} className="space-y-2">
//                         <div className="items-center gap-3">
//                             <a
//                                 href={pr.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-xl font-semibold text-blue-500 hover:opacity-80 transition"
//                             >
//                                 {pr.title}
//                             </a>
//                             {pr.tags?.map((tag, tagIdx) => (
//                                 <span
//                                     key={tagIdx}
//                                     className={`px-2 py-1 text-xs rounded-full ${tagStyles[tag.color]} backdrop-blur-sm ml-2`}
//                                 >
//                                     {tag.label}
//                                 </span>
//                             ))}
//                         </div>
//                         <div className="">
//                             <p className="text-sm text-muted-foreground">{pr.description}</p>
//                         </div>
//                         {idx < openSourcePRs.length - 1 && (
//                             <div className="border-t border-gray-300 dark:border-white/20 mt-6"></div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }