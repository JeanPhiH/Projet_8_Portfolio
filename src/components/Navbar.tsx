import Image from 'next/image'

export default function Navbar() {
	return (
		<nav className="flex flex-row p-2">
			<ul className="flex gap-1 md:gap-5">
				<li className="relative group p-2">
          <div className="absolute inset-0 border-highlight group-hover:border-t-2 rounded-full group-hover:animate-spin-quick"></div>
          <Image className="text-light md:hidden relative z-10" src="/icons/home.svg" alt="HomePage" width={24} height={24} />
          <span className="hidden md:flex">Home</span>
        </li>
				<li><Image className="md:hidden" src="/icons/project.svg" alt="HomePage" width={24} height={24} /><span className="hidden md:flex">Projects</span></li>
				<li><Image className="md:hidden" src="/icons/testimonial.svg" alt="HomePage" width={24} height={24} /><span className="hidden md:flex">Testimonials</span></li>
				<li><Image className="md:hidden" src="/icons/cv.svg" alt="HomePage" width={24} height={24} /><span className="hidden md:flex">Resume</span></li>
				<li><Image className="md:hidden" src="/icons/mail.svg" alt="HomePage" width={24} height={24} /><span className="hidden md:flex">E-mail</span></li>
				<li><Image className="text-light md:hidden" src="/icons/linkedin.svg" alt="HomePage" width={24} height={24} /><span className="hidden md:flex">LinkedIn</span></li>
			</ul>
		</nav>
	);
}