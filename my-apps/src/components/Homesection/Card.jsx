"use client";
import { useEffect, useState } from "react";

export default function ConnectedCards() {
  const [active, setActive] = useState(0);
  const total = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const Card = ({ index }) => (
    <div className="relative w-64">
      {/* connection line */}
      {index !== total - 1 && (
        <div className="absolute top-1/2 -right-6 w-6 h-[2px] bg-green-400"></div>
      )}

      {/* card */}
      <div
        className={`relative bg-white rounded-lg p-4 space-y-3 overflow-hidden
        ${
          active === index
            ? "border-2 border-green-500"
            : "border border-gray-200"
        }`}
      >
        {/* animated border overlay */}
        {active === index && (
          <span className="absolute inset-0 border-2 border-green-500 animate-borderFill rounded-lg pointer-events-none" />
        )}

        <div className="font-semibold text-sm">Guidance Start</div>

        {/* bars */}
        <div className={`h-2 bg-green-400 ${active === index && "animate-fill"}`} />
        <div className={`h-2 bg-green-400 ${active === index && "animate-fill delay-200"}`} />

        {/* blocks */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-6 bg-green-400 rounded ${
                active === index && "animate-fill-small"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-12 mt-16">
      {[0, 1, 2].map((i) => (
        <Card key={i} index={i} />
      ))}

      <style jsx>{`
        @keyframes fill {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-fill {
          animation: fill 2s linear forwards;
        }

        .animate-fill-small {
          animation: fill 1.5s ease forwards;
        }

        @keyframes borderFill {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }

        .animate-borderFill {
          animation: borderFill 2s linear forwards;
        }
      `}</style>
    </div>
  );
}