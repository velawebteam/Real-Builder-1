import { Key, Zap, Car, Truck } from 'lucide-react';

export default function MobilitySolutions() {
  const handleSelectVehicle = (vehicleId: string) => {
    window.dispatchEvent(new CustomEvent('planSelected', { detail: 'course_vehicle' }));
    window.dispatchEvent(new CustomEvent('vehicleSelected', { detail: vehicleId }));
    
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <section id="mobility" className="py-24 bg-[#111315] relative border-t border-white/5">
      {/* Yellow border accents */}
      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-[#FFB800]/30"></div>
      <div className="absolute right-6 top-0 bottom-0 w-[1px] bg-[#FFB800]/30"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Choose Your <span className="text-[#FFB800]">Mobility Solution</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Mobile Toolbox */}
          <button 
            onClick={() => handleSelectVehicle('mobile_toolbox')}
            className="bg-[#1a1d21] rounded-2xl overflow-hidden border border-white/5 flex flex-col hover:border-[#FFB800]/50 transition-colors text-left w-full cursor-pointer"
          >
            <div className="h-48 bg-white relative w-full">
              <img 
                src="https://lh3.googleusercontent.com/d/1n1hlKM4AOQ9g73HteeUgPm0a6KE-W1X7" 
                alt="Mobile Toolbox" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="flex items-center gap-2 text-white font-bold mb-2">
                <div className="w-5 h-5 rounded-full bg-[#FFB800] flex items-center justify-center text-black">
                  <Key size={12} />
                </div>
                Mobile Toolbox
              </div>
              <div className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-6">
                RB STARTER
              </div>
              <div className="mt-auto flex items-baseline gap-1">
                <span className="text-[#FFB800] text-3xl font-bold">€249</span>
                <span className="text-gray-500 text-xs">/ month</span>
              </div>
            </div>
          </button>

          {/* Card 2: Electric 3-Wheeler */}
          <button 
            onClick={() => handleSelectVehicle('electric_3_wheeler')}
            className="bg-[#1a1d21] rounded-2xl overflow-hidden border border-white/5 flex flex-col hover:border-[#FFB800]/50 transition-colors text-left w-full cursor-pointer"
          >
            <div className="h-48 bg-gray-300 relative w-full">
              <img 
                src="https://lh3.googleusercontent.com/d/1xVu-eCm-bBAUQMkCPX77Hk40JcpMqs9N" 
                alt="Electric 3-Wheeler" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="flex items-center gap-2 text-white font-bold mb-2">
                <div className="w-5 h-5 rounded-full bg-[#FFB800] flex items-center justify-center text-black">
                  <Zap size={12} />
                </div>
                Electric 3-Wheeler
              </div>
              <div className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-6">
                1-2 MAN BUSINESS IN TOWN
              </div>
              <div className="mt-auto flex items-baseline gap-1">
                <span className="text-[#FFB800] text-3xl font-bold">€389</span>
                <span className="text-gray-500 text-xs">/ month</span>
              </div>
            </div>
          </button>

          {/* Card 3: Tool Buggy / Quad */}
          <button 
            onClick={() => handleSelectVehicle('tool_buggy')}
            className="bg-[#1a1d21] rounded-2xl overflow-hidden border border-[#FFB800]/30 flex flex-col relative transform lg:-translate-y-2 shadow-[0_0_30px_rgba(255,184,0,0.1)] hover:border-[#FFB800] transition-colors text-left w-full cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 bg-[#FFB800] text-black text-[10px] font-bold text-center py-1 z-10 tracking-widest uppercase">
              MOST POPULAR
            </div>
            <div className="h-48 bg-gray-400 relative mt-6 w-full">
              <img 
                src="https://lh3.googleusercontent.com/d/1-rzX3X8Lf-3bFpC1auxN_RREX_4ldFwa" 
                alt="Tool Buggy / Quad" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="flex items-center gap-2 text-white font-bold mb-2">
                <div className="w-5 h-5 rounded-full bg-[#FFB800] flex items-center justify-center text-black">
                  <Car size={12} />
                </div>
                Tool Buggy / Quad
              </div>
              <div className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-6">
                1-4 MAN BUSINESS IN TOWN
              </div>
              <div className="mt-auto flex items-baseline gap-1">
                <span className="text-[#FFB800] text-3xl font-bold">€489</span>
                <span className="text-gray-500 text-xs">/ month</span>
              </div>
            </div>
          </button>

          {/* Card 4: Tool Van */}
          <button 
            onClick={() => handleSelectVehicle('tool_van')}
            className="bg-[#1a1d21] rounded-2xl overflow-hidden border border-white/5 flex flex-col hover:border-[#FFB800]/50 transition-colors text-left w-full cursor-pointer"
          >
            <div className="h-48 bg-gray-500 relative w-full">
              <img 
                src="https://lh3.googleusercontent.com/d/1iefT26tARQu5H7tEhmmHCtvf8b8RAlsN" 
                alt="Tool Van" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="flex items-center gap-2 text-white font-bold mb-2">
                <div className="w-5 h-5 rounded-full bg-[#FFB800] flex items-center justify-center text-black">
                  <Truck size={12} />
                </div>
                Tool Van
              </div>
              <div className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-6">
                1-4 MAN BUSINESS MULTI...
              </div>
              <div className="mt-auto flex items-baseline gap-1">
                <span className="text-[#FFB800] text-3xl font-bold">€589</span>
                <span className="text-gray-500 text-xs">/ month</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
