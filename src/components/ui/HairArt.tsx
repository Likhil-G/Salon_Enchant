/** Decorative illustration (not a photo): flowing colour strands inside an arch. Replace with a real photo via config.images.hero. */
export default function HairArt() {
  const strands = [
    { d: "M60 470 C 40 330, 150 300, 120 170 S 170 40, 200 30", g: "g1", w: 26 },
    { d: "M110 480 C 90 350, 210 320, 180 190 S 230 60, 250 40", g: "g2", w: 22 },
    { d: "M170 485 C 150 360, 260 330, 235 210 S 280 90, 300 60", g: "g3", w: 20 },
    { d: "M230 485 C 215 380, 310 350, 290 240 S 330 130, 345 100", g: "g1", w: 16 },
    { d: "M290 485 C 280 400, 350 380, 335 300 S 360 210, 372 180", g: "g2", w: 12 },
  ];
  return (
    <svg className="hairart" viewBox="0 0 420 500" role="img" aria-label="Illustration of flowing hair colour tones: honey, rose and caramel">
      <defs>
        <linearGradient id="g1" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#8E5B3A" /><stop offset=".55" stopColor="#C8A66A" /><stop offset="1" stopColor="#F0DDB4" /></linearGradient>
        <linearGradient id="g2" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#A5695A" /><stop offset=".55" stopColor="#E0A99A" /><stop offset="1" stopColor="#F8DCD2" /></linearGradient>
        <linearGradient id="g3" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#5A4030" /><stop offset=".6" stopColor="#B98A5E" /><stop offset="1" stopColor="#EBCFA6" /></linearGradient>
        <clipPath id="arch"><path d="M10 500V210C10 100 100 10 210 10s200 90 200 200v290z" /></clipPath>
      </defs>
      <path d="M10 500V210C10 100 100 10 210 10s200 90 200 200v290z" fill="#F3E4DA" />
      <g clipPath="url(#arch)">
        {strands.map((s, i) => <path key={i} d={s.d} fill="none" stroke={`url(#${s.g})`} strokeWidth={s.w} strokeLinecap="round" opacity=".92" />)}
      </g>
      <path d="M10 500V210C10 100 100 10 210 10s200 90 200 200v290z" fill="none" stroke="#C8A66A" strokeWidth="1.5" />
    </svg>
  );
}
