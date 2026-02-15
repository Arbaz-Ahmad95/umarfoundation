export default function DonateSection() {
    return (
        <section id="donate" className="py-20 md:py-32 px-6 md:px-12 bg-primary text-white">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">Your Support <br /> <span className="text-secondary underline decoration-white/10 underline-offset-8">Saves Lives.</span></h2>
                    <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                        Umar Foundation relies on the generosity of people like you. Every rupee contributes to education, healthcare, and emergency relief in Darbhanga.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <div className="bg-white/10 p-4 rounded-2xl border border-white/20 backdrop-blur-md w-full sm:w-auto">
                            <div className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">Scan for UPI</div>
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl flex items-center justify-center mx-auto sm:mx-0">
                                <span className="text-primary font-bold text-xs p-4 text-center">UPI QR Code Coming Soon</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl md:text-3xl font-black tracking-tight">Direct Support</div>
                            <p className="text-white/60 text-sm md:text-base font-medium">Use the bank details to the right for direct transfers.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white text-primary p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition duration-700"></div>

                    <h3 className="text-2xl md:text-3xl font-black mb-10 tracking-tight flex items-center gap-3">
                        <span className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary">🏦</span>
                        Bank Details
                    </h3>

                    <div className="space-y-8">
                        <div className="flex justify-between items-center border-b border-gray-100 pb-4 group/item">
                            <span className="text-gray-400 font-black text-[10px] md:text-xs uppercase tracking-widest">Account Name</span>
                            <span className="font-bold text-base md:text-xl group-hover/item:text-secondary transition-colors">Umar Foundation</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-100 pb-4 group/item">
                            <span className="text-gray-400 font-black text-[10px] md:text-xs uppercase tracking-widest">Bank Name</span>
                            <span className="font-bold text-base md:text-xl group-hover/item:text-secondary transition-colors">Punjab National Bank</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-100 pb-4 group/item">
                            <span className="text-gray-400 font-black text-[10px] md:text-xs uppercase tracking-widest">Account Number</span>
                            <span className="font-bold text-base md:text-xl group-hover/item:text-secondary transition-colors">***********</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-100 pb-4 group/item">
                            <span className="text-gray-400 font-black text-[10px] md:text-xs uppercase tracking-widest">IFSC Code</span>
                            <span className="font-bold text-base md:text-xl group-hover/item:text-secondary transition-colors">******</span>
                        </div>
                    </div>

                    <button className="w-full mt-10 bg-secondary text-white py-4 md:py-5 rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-xl shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-1 transition-all">
                        Notify Us of Transfer
                    </button>
                </div>
            </div>
        </section>
    );
}
