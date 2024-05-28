import Technos from '@/components/Technos';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Ressources from '@/components/Ressources';
import Contact from '@/components/Contact';

export default function Home() {
  return (
		<>
			<Technos />
			<About />
			<Projects />
			<Ressources />
			<Contact />
		</>
  );
}
