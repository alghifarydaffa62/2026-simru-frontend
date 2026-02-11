import { type SearchBarProps } from "../types/types"
import { Search, X } from "lucide-react"

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
    return(
        <div className="relative w-full max-w-md group">
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-slate-400 group-focus-within:text-black transition-colors" />
            </div>

            {/* Input Field */}
            <input
                type="text"
                className="block w-full pl-11 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-black focus:bg-white focus:border-transparent transition-all placeholder:text-slate-400 text-slate-900"
                placeholder={placeholder || "Cari data..."}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />

            {/* Clear Button */}
            {value && (
                <button 
                    onClick={() => onChange("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-red-500 transition-colors"
                    aria-label="Clear search"
                >
                    <X className="w-4 h-4" />
                </button>
            )}
        </div>
    )
}