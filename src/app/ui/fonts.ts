import { Ubuntu, Ubuntu_Mono, Galindo } from 'next/font/google';

export const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'], variable: '--font-ubuntu' });
export const ubuntu_mono = Ubuntu_Mono({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'], variable: '--font-ubuntumono' });
export const galindo = Galindo({ subsets: ['latin'], weight: ['400'], style: ['normal'], variable: '--font-galindo' });