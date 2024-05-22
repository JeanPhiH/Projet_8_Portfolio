import Technos from '@/components/Technos';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default function Home() {
  return (
		<>
			<Technos />
			<About />
			<Projects />
			<section>Ressources</section>
			<section>Contact</section>
		</>
  );
}
