"use client";

const flakes = [
  { left: "2%",   dur: "8s",  delay: "0s",    size: 14, op: 0.5 },
  { left: "6%",   dur: "11s", delay: "-3s",   size: 10, op: 0.35 },
  { left: "11%",  dur: "7s",  delay: "-5s",   size: 18, op: 0.55 },
  { left: "17%",  dur: "9s",  delay: "-1s",   size: 12, op: 0.4  },
  { left: "23%",  dur: "12s", delay: "-7s",   size: 10, op: 0.3  },
  { left: "29%",  dur: "8s",  delay: "-4s",   size: 16, op: 0.5  },
  { left: "35%",  dur: "10s", delay: "-2s",   size: 11, op: 0.4  },
  { left: "41%",  dur: "7s",  delay: "-6s",   size: 14, op: 0.45 },
  { left: "47%",  dur: "13s", delay: "-9s",   size: 10, op: 0.3  },
  { left: "53%",  dur: "9s",  delay: "-1.5s", size: 18, op: 0.5  },
  { left: "59%",  dur: "8s",  delay: "-4.5s", size: 12, op: 0.4  },
  { left: "65%",  dur: "11s", delay: "-3.5s", size: 10, op: 0.35 },
  { left: "71%",  dur: "7s",  delay: "-7s",   size: 16, op: 0.5  },
  { left: "77%",  dur: "10s", delay: "-2.5s", size: 11, op: 0.38 },
  { left: "83%",  dur: "9s",  delay: "-5.5s", size: 14, op: 0.45 },
  { left: "89%",  dur: "12s", delay: "-8s",   size: 10, op: 0.3  },
  { left: "94%",  dur: "8s",  delay: "-0.5s", size: 18, op: 0.5  },
  { left: "98%",  dur: "10s", delay: "-6.5s", size: 12, op: 0.4  },
  { left: "14%",  dur: "9s",  delay: "-10s",  size: 10, op: 0.35 },
  { left: "44%",  dur: "7s",  delay: "-11s",  size: 14, op: 0.45 },
  { left: "74%",  dur: "11s", delay: "-12s",  size: 11, op: 0.38 },
];

export default function Christmas() {
  return (
    <>
      <style>{`
        @keyframes snowfall {
          0%   { transform: translateY(-30px) translateX(0px) rotate(0deg);   opacity: 0; }
          5%   { opacity: 1; }
          50%  { transform: translateY(50vh)  translateX(12px)  rotate(180deg); }
          100% { transform: translateY(105vh) translateX(-8px)  rotate(360deg); opacity: 0; }
        }
        .xmas-flake {
          position: fixed;
          top: 0;
          pointer-events: none;
          z-index: 9999;
          animation: snowfall ease-in-out infinite;
          color: rgba(255,255,255,0.9);
          user-select: none;
          line-height: 1;
        }
      `}</style>
      {flakes.map((f, i) => (
        <span
          key={i}
          className="xmas-flake"
          style={{
            left: f.left,
            fontSize: f.size,
            animationDuration: f.dur,
            animationDelay: f.delay,
            opacity: f.op,
          }}
        >
          ❄
        </span>
      ))}
    </>
  );
}
