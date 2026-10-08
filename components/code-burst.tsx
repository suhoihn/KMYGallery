import type { CSSProperties } from "react";

const colors = ["#8be9fd", "#ff79c6", "#f1fa8c", "#bd93f9", "#50fa7b", "#ffb86c", "#ff7777"];
const glyphs = ["{", "}", "<", ">", "/", ";", "=", "λ", "01", "++", "[]", "::"];
const backdropGlyphs = ["{", "λ", "01", "</>", "[]", "++", "=", "::", ";", "}", "<", "/", "01", "λ", "[]", ">"]; 
const bursts = [
  { x: 68, y: 36, delay: 0 },
  { x: 84, y: 51, delay: -6 },
];

export function CodeBurst() {
  return (
    <div className="code-burst" aria-hidden="true">
      <div className="code-burst-backdrop">
        {backdropGlyphs.map((glyph, index) => <span key={index}>{glyph}</span>)}
      </div>
      {bursts.map((burst, burstIndex) => (
        <div className="firework" key={burstIndex} style={{ left: `${burst.x}%`, top: `${burst.y}%`, "--delay": `${burst.delay}s` } as CSSProperties}>
          <span className="firework-rocket" style={{ animationDelay: `${burst.delay}s` }} />
          {Array.from({ length: 22 }, (_, index) => {
            const angle = ((index / 22) * Math.PI * 2) + burstIndex * 0.15;
            const radius = 70 + ((index * 43 + burstIndex * 19) % 105);
            const drop = 540 + (index % 5) * 42;
            const drift = ((index * 17) % 120) - 60;
            const style = {
              "--dx": `${Math.round(Math.cos(angle) * radius)}px`,
              "--dy": `${Math.round(Math.sin(angle) * radius * 0.75)}px`,
              "--drift-04": `${Math.round(drift * .1)}px`,
              "--drift-21": `${Math.round(drift * .35)}px`,
              "--drift-53": `${Math.round(drift * .65)}px`,
              "--drift": `${drift}px`,
              "--drop-04": `${Math.round(drop * .04)}px`,
              "--drop-21": `${Math.round(drop * .21)}px`,
              "--drop-53": `${Math.round(drop * .53)}px`,
              "--drop": `${drop}px`,
              "--rotation": `${((index * 37) % 110) - 55}deg`,
              animationDelay: `${burst.delay}s`,
              color: colors[(index + burstIndex * 2) % colors.length],
              fontSize: `${15 + (index % 5) * 2}px`,
            } as CSSProperties;
            return <span className="firework-particle" style={style} key={index}>{glyphs[(index + burstIndex) % glyphs.length]}</span>;
          })}
        </div>
      ))}
    </div>
  );
}
