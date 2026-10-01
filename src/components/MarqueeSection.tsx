const marqueeGifs = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
];

export const MarqueeSection = () => {
  const row1 = marqueeGifs.slice(0, 10);
  const row2 = marqueeGifs.slice(10);

  return (
    <section aria-label="Selected 3D project animations showcase" className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden relative">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#646973]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Row 1: Leftward Scroll */}
      <div className="flex w-max space-x-5 md:space-x-8 mb-6 md:mb-8 animate-marquee-left hover:[animation-play-state:paused]">
        {[...row1, ...row1].map((gifUrl, idx) => (
          <div
            key={`row1-${idx}`}
            className="w-[260px] sm:w-[320px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden bg-[#16181B] border border-[#26292E] shadow-2xl flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:border-[#BBCCD7]/50 group"
          >
            <img
              src={gifUrl}
              alt="3D Project Animation Preview"
              className="w-full h-full object-cover group-hover:contrast-110 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Row 2: Rightward Scroll */}
      <div className="flex w-max space-x-5 md:space-x-8 animate-marquee-right hover:[animation-play-state:paused]">
        {[...row2, ...row2].map((gifUrl, idx) => (
          <div
            key={`row2-${idx}`}
            className="w-[260px] sm:w-[320px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden bg-[#16181B] border border-[#26292E] shadow-2xl flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:border-[#BBCCD7]/50 group"
          >
            <img
              src={gifUrl}
              alt="3D Project Animation Preview"
              className="w-full h-full object-cover group-hover:contrast-110 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
