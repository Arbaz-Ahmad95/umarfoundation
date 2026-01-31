export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-foundation.jpg"
                    alt="Umar Foundation Hero"
                    className="w-full h-full object-cover brightness-[0.5] object-center"
                />
            </div>

            <div className="relative z-10 text-center text-white px-6 py-20">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] md:text-sm font-bold tracking-widest uppercase mb-6 border border-white/20">
                    Hayaghat, Darbhanga
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[1.05]">
                    Building Hope. <br className="hidden md:block" /> Changing Lives.
                </h1>

                <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 opacity-90 font-medium leading-relaxed">
                    Umar Foundation is dedicated to empowering communities in Darbhanga through education, healthcare, and humanitarian support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#activities" className="bg-primary hover:bg-primary-light text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 text-sm md:text-base">
                        See Our Impact
                    </a>
                    <a href="#donate" className="bg-white text-primary hover:bg-gray-100 px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold transition flex items-center justify-center text-sm md:text-base shadow-xl">
                        Support Our Cause
                    </a>
                </div>
            </div>

            {/* Down Arrow for mobile hint */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full opacity-50"></div>
            </div>
        </section>
    );
}
