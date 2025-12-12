'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

export default function ProjectScreenshots({ projectId, totalScreens }) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const overlayRef = useRef(null);

    useEffect(() => {
        setMounted(true);
        if (typeof window !== 'undefined') {
            const checkMobile = () => setIsMobile(window.innerWidth < 768);
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return () => window.removeEventListener('resize', checkMobile);
        }
    }, []);

    const mode = resolvedTheme === 'dark' ? 'dark' : 'light';
    const images = Array.from({ length: totalScreens }, (_, i) =>
        `/projects/${projectId}/${mode}/${i + 1}.png`
    );

    const maxThumbs = isMobile ? 3 : 4;
    const visibleImages = images.slice(0, maxThumbs);
    const extraCount = totalScreens - maxThumbs;

    useEffect(() => {
        if (!open) return;

        const handleKey = (e) => {
            if (e.key === 'ArrowLeft') {
                setCurrent((prev) => (prev - 1 + images.length) % images.length);
            } else if (e.key === 'ArrowRight') {
                setCurrent((prev) => (prev + 1) % images.length);
            } else if (e.key === 'Escape') {
                setOpen(false);
            }
        };

        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [open, images.length]);

    const handleOverlayClick = (e) => {
        if (e.target === overlayRef.current) {
            setOpen(false);
        }
    };

    if (!mounted || !resolvedTheme) return <div className="h-0" />;

    return (
        <>
            {/* Screenshot Thumbnails */}
            <div className="mt-4 flex gap-3 overflow-x-auto">
                {visibleImages.map((src, idx) => (
                    <div
                        key={idx}
                        className="relative cursor-pointer"
                        onClick={() => {
                            setCurrent(idx === visibleImages.length - 1 && extraCount > 0 ? maxThumbs : idx);
                            setOpen(true);
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Screenshot ${idx + 1}`}
                            width={180}
                            height={120}
                            className="rounded-md object-cover hover:opacity-80 transition"
                        />
                        {idx === visibleImages.length - 1 && extraCount > 0 && (
                            <div className="absolute inset-0 bg-black/30 dark:bg-black/60 text-white text-sm font-medium rounded-md flex items-center justify-center">
                                +{extraCount}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {open && (
                <>
                    {/* Fixed Close Button (Always on top) */}
                    <div className="fixed top-4 left-0 right-0 z-50 px-5 pointer-events-none">
                        <div className="w-8 h-8 bg-[#0a0a0a] md:bg-transparent rounded-full shadow-lg flex justify-center items-center ml-auto pointer-events-auto">
                            <button
                                onClick={() => setOpen(false)}
                                className="text-white hover:opacity-80"
                                aria-label="Close"
                            >
                                <X className="w-7 h-7" />
                            </button>
                        </div>
                    </div>

                    {/* Scrollable Backdrop Overlay */}
                    <div
                        ref={overlayRef}
                        onClick={handleOverlayClick}
                        className="fixed inset-0 z-40 bg-black/85 overflow-y-auto h-screen backdrop-blur"
                    >
                        {/* Desktop: Carousel */}
                        <div className="hidden md:flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
                            <div className="relative w-[90vw] max-w-5xl h-[80vh] flex items-center justify-center">
                                {/* Left Arrow */}
                                <button
                                    onClick={() =>
                                        setCurrent((current - 1 + images.length) % images.length)
                                    }
                                    className="absolute -left-12 xl:-left-16 z-10 text-white hover:opacity-80"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft className="w-10 h-10" />
                                </button>

                                {/* Image */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src={images[current]}
                                        alt={`Screenshot ${current + 1}`}
                                        fill
                                        className="object-contain rounded-md shadow-xl"
                                    />
                                </div>

                                {/* Right Arrow */}
                                <button
                                    onClick={() =>
                                        setCurrent((current + 1) % images.length)
                                    }
                                    className="absolute -right-12 xl:-right-16 z-10 text-white hover:opacity-80"
                                    aria-label="Next"
                                >
                                    <ChevronRight className="w-10 h-10" />
                                </button>
                            </div>

                            {/* Pagination Dots */}
                            <div className="flex gap-2 mt-4">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`w-2.5 h-2.5 rounded-full transition ${i === current ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                                            }`}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Mobile: Scrollable List with Indicator */}
                        <div className="md:hidden flex flex-col items-center gap-6 mt-6 pb-20">
                            {images.map((src, idx) => (
                                <div key={idx} className="w-full px-4">
                                    <div className="relative w-full h-[25vh]">
                                        <Image
                                            src={src}
                                            alt={`Screenshot ${idx + 1}`}
                                            fill
                                            className="object-contain rounded-md shadow-md"
                                        />
                                    </div>
                                    <div className="text-center text-sm text-white mt-2">
                                        {idx + 1} / {images.length}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
