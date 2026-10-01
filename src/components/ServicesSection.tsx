import { Box, Film, Globe, Wand2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Box,
    title: '3D Modeling & Art Direction',
    description: 'Precision hard-surface modeling, organic sculpting, and custom procedural shading crafted for product visualization and digital worlds.',
    tags: ['Asset Creation', 'Procedural Texturing', 'Lighting Design'],
  },
  {
    icon: Film,
    title: 'Cinematic Motion Design',
    description: 'Dynamic 3D animations, product teasers, and title sequences that command attention and elevate brand presence.',
    tags: ['Product Teasers', 'Dynamic Physics', 'CGI Commercials'],
  },
  {
    icon: Globe,
    title: 'Interactive 3D Websites',
    description: 'Real-time WebGL, Three.js, and Spline 3D embedded into high-performance web applications with seamless motion transitions.',
    tags: ['Three.js', 'Shader Magic', 'Creative Dev'],
  },
  {
    icon: Wand2,
    title: 'VFX & Creative Technology',
    description: 'Complex particle simulations, procedural destruction, holographic displays, and generative art pipelines.',
    tags: ['Houdini Sim', 'Particle FX', 'Look Development'],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto bg-[#0C0C0C] border-t border-[#1C1F24]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#646973] font-semibold font-mono">Capabilities</span>
          <h2 id="services-heading" className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#D7E2EA] mt-2">
            Services &amp; Expertise
          </h2>
        </div>
        <p className="text-[#9BA8B2] max-w-md text-sm sm:text-base font-light">
          Tailored 3D creative pipelines designed for visionaries, creative studios, and high-growth brands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((srv) => {
          const Icon = srv.icon;
          return (
            <div
              key={srv.title}
              className="group p-8 sm:p-10 rounded-3xl bg-[#121316] border border-[#22252A] hover:border-[#BBCCD7]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1D2024] text-[#BBCCD7] flex items-center justify-center mb-6 group-hover:bg-[#D7E2EA] group-hover:text-[#0C0C0C] transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#D7E2EA] mb-3">
                  {srv.title}
                </h3>
                <p className="text-sm sm:text-base text-[#8C98A0] font-light leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1F2227] space-y-4">
                <div className="flex flex-wrap gap-2">
                  {srv.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono text-[#6A767F] uppercase tracking-wider bg-[#16181B] px-2.5 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#BBCCD7] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7] rounded px-1 -mx-1"
                  >
                    <span>Request a quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
