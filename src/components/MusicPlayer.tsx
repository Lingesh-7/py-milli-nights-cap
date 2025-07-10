
import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotation, setRotation] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      // Pause
      setIsPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      // In a real app, you'd pause the audio here
      // audioRef.current?.pause();
    } else {
      // Play
      setIsPlaying(true);
      // In a real app, you'd play the JD Theme from Master movie here
      // audioRef.current?.play();
      
      // Start rotation animation
      intervalRef.current = setInterval(() => {
        setRotation(prev => prev + 2);
      }, 50);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-8">
          Feel the Vibe
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Experience the premium atmosphere with our signature sound
        </p>

        {/* CD Player */}
        <div className="relative inline-block">
          {/* CD Base */}
          <div className="relative w-80 h-80 mx-auto mb-8">
            {/* Outer Ring */}
            <div 
              className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-2xl"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {/* CD Surface */}
              <div className="absolute inset-4 rounded-full bg-gradient-conic from-purple-400/20 via-blue-400/20 via-yellow-400/20 via-red-400/20 to-purple-400/20 animate-pulse">
                {/* Inner Ring */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-gray-900 to-black shadow-inner">
                  {/* Center Hole */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black shadow-lg"></div>
                </div>
              </div>
              
              {/* Reflection Lines */}
              <div className="absolute inset-8 rounded-full">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                    style={{
                      top: '20%',
                      left: '50%',
                      transformOrigin: '0 120px',
                      transform: `rotate(${i * 30}deg)`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400/80 to-yellow-600/80 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-black font-bold text-sm mb-1">PY MILLI</div>
                <div className="text-black text-xs">JD THEME</div>
                <div className="text-black text-xs opacity-75">Master OST</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-6">
            <Button
              onClick={togglePlay}
              size="lg"
              className={`w-16 h-16 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black transition-all duration-300 transform hover:scale-110 shadow-lg ${
                isPlaying ? 'shadow-yellow-500/50 animate-pulse' : 'shadow-yellow-500/25'
              }`}
            >
              {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
            </Button>
            
            <div className="flex items-center space-x-2 text-gray-300">
              <Volume2 className="h-5 w-5" />
              <div className="text-sm">
                {isPlaying ? 'Now Playing: JD Theme - Master' : 'Click to play JD Theme'}
              </div>
            </div>
          </div>

          {/* Sound Waves Animation */}
          {isPlaying && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-yellow-400 animate-bounce"
                  style={{
                    height: `${Math.random() * 20 + 10}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '0.8s'
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Audio element (hidden) */}
        <audio ref={audioRef} preload="none">
          {/* In a real application, you would have the actual JD Theme audio file here */}
          {/* <source src="/path-to-jd-theme.mp3" type="audio/mpeg" /> */}
        </audio>

        <p className="text-gray-400 text-sm mt-8">
          * In a production environment, this would play the actual JD Theme from the movie "Master"
        </p>
      </div>
    </section>
  );
};

export default MusicPlayer;
