import { type SearchBarProps } from "../types/types"

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
    return(
        <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-slate-400">🔍</span>
            </div>
            <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 sm:text-sm transition-all"
                placeholder={placeholder || "Cari data..."}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {value && (
                <button 
                    onClick={() => onChange("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                    ✕
                </button>
            )}
        </div>
    )
}