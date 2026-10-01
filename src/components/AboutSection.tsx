import { motion } from 'framer-motion';
import { Sparkles, Box, Compass, Cpu, Palette } from 'lucide-react';

const creativePillars = [
  {
    icon: Box,
    title: '3D & Hard Surface',
    description: 'Bespoke character modeling, organic assets, and detailed product visualizations.',
  },
  {
    icon: Palette,
    title: 'Motion & Lighting',
    description: 'Cinematic camera choreographies, physics simulations, and octane shader development.',
  },
  {
    icon: Cpu,
    title: 'WebGL & Interactive',
    description: 'Bringing 3D assets to life on the web with Three.js, Spline, and reactive layouts.',
  },
  {
    icon: Compass,
    title: 'Concept to Render',
    description: 'End-to-end creative direction tailored for high-impact brands and digital products.',
  },
];

const skills = [
  'Blender', 'Cinema 4D', 'Unreal Engine 5', 'Three.js / WebGL', 
  'Houdini FX', 'Octane Render', 'Redshift', 'Figma', 'Spline 3D', 'GLSL Shaders'
];

export const AboutSection = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto bg-[#0C0C0C]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#646973]/30 bg-[#16181b] text-xs uppercase tracking-widest text-[#BBCCD7] font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#BBCCD7]" /> About Manu
          </div>

          <h2 id="about-heading" className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#D7E2EA] leading-[1.1]">
            Transforming bold ideas into <span className="hero-heading">immersive realities</span>
          </h2>

          <p className="text-base sm:text-lg text-[#9BA8B2] font-light leading-relaxed max-w-2xl">
            I am a 3D creator focused on crafting striking visual worlds, expressive motion identities, and next-generation interactive web experiences. Merging technical precision with visionary storytelling to shape unforgettable digital encounters.
          </p>

          {/* Skill Badges */}
          <div>
            <span className="block text-xs uppercase tracking-widest text-[#646973] font-semibold mb-3 font-mono">
              Core Toolkit &amp; Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-lg bg-[#15171A] border border-[#272B30] text-xs font-mono uppercase tracking-wider text-[#D7E2EA] hover:border-[#BBCCD7] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Pillars Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {creativePillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-[#131417] border border-[#23262B] flex flex-col justify-between hover:border-[#646973] transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1D2024] text-[#BBCCD7] flex items-center justify-center mb-4 group-hover:bg-[#D7E2EA] group-hover:text-[#0C0C0C] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-[#D7E2EA] mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#818E97] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
