const TrustSection = () => {
    const partners = ['FORBES', 'TECHCRUNCH', 'BLOOMBERG', 'REUTERS', 'WSJ'];

    return (
        <section className="border-y border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 py-8 transition-colors">
            <div className="mx-auto max-w-7xl px-4 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6 font-display">
                    Trusted by 10,000+ clients and featured in
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 transition-all hover:opacity-100">
                    {partners.map(partner => (
                        <span key={partner} className="text-xl font-black text-slate-400 dark:text-slate-600 hover:text-primary transition-colors cursor-default">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
