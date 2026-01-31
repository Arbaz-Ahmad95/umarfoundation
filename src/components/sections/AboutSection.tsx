export default function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                {/* Text Content */}
                <div className="relative order-2 lg:order-1">
                    <div className="absolute -top-10 -left-10 w-32 h-32 md:w-48 md:h-48 bg-secondary/10 rounded-full blur-3xl z-0"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-8 tracking-tighter leading-tight">
                            Making a Difference in <br />
                            <span className="text-secondary underline decoration-primary/10 underline-offset-8">Hayaghat</span>
                        </h2>

                        <p className="text-gray-600 text-lg md:text-xl mb-10 leading-[1.6]">
                            Founded with a vision to serve, Umar Foundation works tirelessly at the grassroots level in Darbhanga, Bihar. We focus on areas where help is needed most—from emergency relief to long-term educational support.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12">
                            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100 group hover:border-primary/20 transition duration-500">
                                <div className="text-4xl md:text-5xl font-black text-primary mb-2">500+</div>
                                <div className="text-[10px] md:text-xs text-gray-400 font-black uppercase tracking-[0.2em]">Lives Touched</div>
                            </div>
                            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100 group hover:border-primary/20 transition duration-500">
                                <div className="text-4xl md:text-5xl font-black text-primary mb-2">50+</div>
                                <div className="text-[10px] md:text-xs text-gray-400 font-black uppercase tracking-[0.2em]">Volunteers</div>
                            </div>
                        </div>

                        <button className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-xs group">
                            <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition duration-500">→</span>
                            Learn about our values
                        </button>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative order-1 lg:order-2">
                    <div className="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-[8px] md:border-[12px] border-white">
                        <img
                            src="/images/hayaghat-impact.png"
                            alt="Umar Foundation work in Hayaghat"
                            className="w-full h-full object-cover hover:scale-105 transition duration-1000"
                        />
                    </div>

                    <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-6 md:p-10 rounded-3xl shadow-2xl max-w-[200px] md:max-w-[280px] border border-gray-100 hidden sm:block">
                        <p className="italic text-gray-600 font-bold text-sm md:text-lg leading-relaxed">
                            "Our mission is to ensure no child in Hayaghat goes without education or food."
                        </p>
                        <p className="mt-4 font-black text-primary text-[10px] md:text-xs uppercase tracking-widest">— Team Umar Foundation</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
