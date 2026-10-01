import { Magnet } from './Magnet';

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
}

export const ContactButton = ({ className = '', onClick }: ContactButtonProps) => {
  return (
    <Magnet padding={80} strength={2.5}>
      <a
        href="#contact"
        onClick={onClick}
        aria-label="Navigate to contact section"
        className={`inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899] hover:opacity-95 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)] border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7] ${className}`}
      >
        CONTACT ME
      </a>
    </Magnet>
  );
};
