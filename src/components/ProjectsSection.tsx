import { Sparkles, Mail, ArrowUpRight } from 'lucide-react';

interface ProjectItem {
  title: string;
  category: string;
  role: string;
  tools: string[];
  description: string;
  gif: string;
  status: 'preview_only' | 'case_study_soon';
}

const projects: ProjectItem[] = [
  {
    title: 'Space Voyage',
    category: 'Interactive WebGL / 3D Cosmos',
    role: '3D Artist & Motion Designer',
    tools: ['Three.js', 'Blender', 'GLSL'],
    description: 'Real-time interactive space exploration environment with dynamic celestial lighting and camera transitions.',
    gif: 'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
    status: 'case_study_soon',
  },
  {
    title: 'Stellar AI V2',
    category: 'Motion Identity & Shaders',
    role: 'Motion Designer & Shader Dev',
    tools: ['Cinema 4D', 'Octane Render', 'After Effects'],
    description: 'High-octane procedural motion graphics exploring futuristic holographic geometry and particle choreography.',
    gif: 'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
    status: 'case_study_soon',
  },
  {
    title: 'Orbit Web3',
    category: 'Realtime 3D Interface',
    role: 'Creative Technologist',
    tools: ['Spline 3D', 'Three.js', 'React'],
    description: 'Embedded interactive 3D web showcase with real-time responsive cursor tracking and fluid lighting physics.',
    gif: 'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
    status: 'case_study_soon',
  },
  {
    title: 'Planet Orbit',
    category: 'Procedural VFX & Lighting',
    role: '3D Simulation Artist',
    tools: ['Houdini', 'Redshift', 'Blender'],
    description: 'Atmospheric particle simulation and orbital ring geometry rendered with physically-based volumetrics.',
    gif: 'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
    status: 'case_study_soon',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto bg-[#0C0C0C] border-t border-[#1C1F24]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#646973] font-semibold font-mono">Selected Works</span>
          <h2 id="projects-heading" className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#D7E2EA] mt-2">
            Featured Projects
          </h2>
        </div>
        
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#818E97]">
          <Sparkles className="w-3.5 h-3.5 text-[#BBCCD7]" />
          <span>Case studies in active production</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <article
            key={proj.title}
            className="group rounded-3xl overflow-hidden bg-[#131417] border border-[#22252A] hover:border-[#646973] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Media Container */}
              <div className="aspect-[16/10] overflow-hidden relative bg-[#181A1E]">
                <img
                  src={proj.gif}
                  alt={`${proj.title} 3D animation preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131417] via-transparent to-transparent opacity-80" />
                
                {/* Status Pill on Image */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#0C0C0C]/80 backdrop-blur-md border border-[#2D3139] text-[#BBCCD7]">
                    Case Study Coming Soon
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#6A767F]">
                      {proj.category}
                    </span>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-[#D7E2EA] mt-1">
                      {proj.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#8C98A0] font-light leading-relaxed">
                  {proj.description}
                </p>

                {/* Role & Tools metadata */}
                <div className="pt-3 border-t border-[#1E2126] space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#7C8B96]">
                    <span className="text-[#555E66] uppercase">Role:</span>
                    <span className="text-[#BBCCD7]">{proj.role}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[#555E66] uppercase mr-1">Tools:</span>
                    {proj.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded bg-[#1A1C20] text-[#D7E2EA] text-[10px]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer action */}
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 flex justify-between items-center text-xs font-mono">
              <span className="text-[#555E66]">Status: Animated 3D Preview</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[#BBCCD7] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7] rounded px-1"
              >
                Inquire about similar work <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Footer / Social Section */}
      <footer className="mt-32 pt-16 border-t border-[#1C1F24] flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-mono text-[#646973] uppercase tracking-widest">
            © {new Date().getFullYear()} MANU — 3D Creator
          </p>
          <p className="text-xs text-[#4E565E]">
            Direct email: <a href="mailto:narukamanu77@gmail.com" className="text-[#818E97] hover:text-[#D7E2EA] transition-colors">narukamanu77@gmail.com</a>
          </p>
        </div>

        {/* Reachable Contact links */}
        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-[#9BA8B2]">
          <a
            href="mailto:narukamanu77@gmail.com?subject=Portfolio%20inquiry"
            className="flex items-center gap-2 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7] rounded px-1"
          >
            <Mail className="w-4 h-4 text-[#BBCCD7]" />
            <span>Email</span>
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7] rounded px-1"
          >
            <span>Contact Form</span>
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7] rounded px-1"
          >
            <span>About</span>
          </a>
        </div>
      </footer>
    </section>
  );
};
