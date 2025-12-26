import React from 'react';
import { Play } from 'lucide-react';

const VideoPlaceholder = ({ label }: { label: string }) => (
  <div className="w-full aspect-video bg-gray-900 border border-gray-800 rounded-xl flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
    <div className="z-20 flex flex-col items-center">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(34,197,94,0.5)]">
        <Play size={32} fill="black" className="text-black ml-1" />
      </div>
      <p className="text-white font-bold text-lg tracking-wide uppercase">{label}</p>
    </div>
    {/* Background Grid Effect */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
  </div>
);

export default VideoPlaceholder;
