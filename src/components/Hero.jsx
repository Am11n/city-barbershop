export default function Hero() {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600&auto=format&fit=crop&q=80"
                    alt="Barbershop interior"
                    className="w-full h-full object-cover"
                    loading="eager" // Hero image should be eager loaded for LCP
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                <div className="flex items-center justify-center gap-6 mb-12">
                    <div className="hidden md:block w-24 h-[2px] bg-white/60"></div>
                    <img
                        src="/logo.png"
                        alt="City Barbershop Emblem"
                        className="w-48 md:w-96 h-auto drop-shadow-2xl"
                    />
                    <div className="hidden md:block w-24 h-[2px] bg-white/60"></div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#book"
                        className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide text-lg transition-all transform hover:scale-105 min-w-[200px]"
                    >
                        Bestill Time
                    </a>
                    <a
                        href="#services"
                        className="border-2 border-white hover:border-accent hover:text-accent text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide text-lg transition-all min-w-[200px]"
                    >
                        Våre Tjenester
                    </a>
                </div>

                <div className="mt-12 flex justify-center gap-8 text-gray-400 text-sm font-medium uppercase tracking-widest">
                    <span>Drammen Sentrum</span>
                    <span>•</span>
                    <span>Est. 2024</span>
                </div>
            </div>
        </section>
    );
}
