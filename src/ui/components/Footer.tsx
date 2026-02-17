export default function Footer() {
    return (
        <footer className="w-full py-8 mt-auto flex justify-center animate-in fade-in duration-1000 delay-500">
        <a 
            href="https://github.com/SugusGamberra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
            <img 
            src="https://github.com/SugusGamberra.png" 
            alt="SugusGamberra" 
            className="w-8 h-8 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
            />
            
            <div className="flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-white/40 group-hover:text-white/60 transition-colors leading-tight">
                Created by
            </span>
            <span className="font-serif font-bold text-sm text-white/70 group-hover:text-white transition-colors leading-tight">
                SugusGamberra
            </span>
            </div>
        </a>
        </footer>
    );
}