import { useState, useEffect } from "react";

const StatusWidget = () => {
  const getBelgradeTime = () => {
    return new Date().toLocaleTimeString("sr-RS", {
      timeZone: "Europe/Belgrade",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const [time, setTime] = useState(getBelgradeTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getBelgradeTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border border-white/10 p-4 bg-white/2 backdrop-blur-sm font-mono text-[10px] uppercase tracking-[0.2em] w-fit">
      <div className="flex items-center gap-3 mb-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-text/80">System: Operational</span>
      </div>

      <div className="space-y-1 text-text/50">
        <p>
          Location: <span className="text-secondary">Belgrade, SRB</span>
        </p>
        <p>
          Local Time: <span className="text-secondary">{time} GMT+1</span>
        </p>
        <p>
          Availability: <span className="text-primary">Open to Work</span>
        </p>
      </div>

      <div className="mt-4 flex gap-1">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="h-1 w-2 bg-white/10 animate-pulse"
            style={{
              opacity: Math.random(),
              animationDelay: `${i * 0.1}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StatusWidget;
