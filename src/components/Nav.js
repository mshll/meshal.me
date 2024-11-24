import { ArrowUpRight } from 'lucide-react';
import Box from './Box';

export default function Nav({ data, timeline }) {
  const contentAnimation = delay => {
    timeline
      .from('.logo', { x: -30, opacity: 0 }, delay + 0.3)
      .from('.cta', { x: 30, opacity: 0 }, delay + 0.3);
  };

  return (
    <Box
      timeline={timeline}
      className='translate-y-full scale-0 opacity-0'
      callbackAnimation={contentAnimation}
    >
      <nav className='flex size-full items-center justify-between max-lg:gap-4 max-md:flex-col max-md:justify-center'>
        <div className='logo overflow-hidden font-heading text-2xl font-normal'>
          <span className='block'>{data?.logo}</span>
        </div>
        <div className='cta flex flex-wrap items-center justify-center gap-4'>
          {data?.links?.map(link => (
            <a
              key={link.title}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
            >
              <button
                className={`flex items-center justify-center rounded-xl px-4 py-3 pt-3.5 font-medium uppercase text-text transition-colors duration-300 ${
                  link.title.toLowerCase() === 'resume'
                    ? 'bg-secondary hover:bg-accent'
                    : 'hover:text-muted'
                }`}
              >
                {link.title}
                {link.title.toLowerCase() === 'resume' && (
                  <ArrowUpRight className='ml-1 inline-block h-4 w-4' />
                )}
              </button>
            </a>
          ))}
        </div>
      </nav>
    </Box>
  );
}
