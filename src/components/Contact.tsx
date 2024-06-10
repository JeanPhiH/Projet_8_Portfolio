import MenuItem from "./MenuItem";
import ContactForm from "./ContactForm";

export default function Contact() {
	return (
		<section id="contact" className="flex flex-col items-center">
			<h2>Contact</h2>
			<p>Mes compétences vous intéressent et vous souhaitez me contacter ?</p>
			<p className="mb-3">
				Vous pouvez le faire avec le formulaire ci-dessous, ou via ma page
				LinkedIn.
			</p>
			<MenuItem
				title="LinkedIn"
				href="https://www.linkedin.com/in/jp-herfeld/"
				target="_blank"
				src="/icons/linkedin.svg"
				width={24}
				height={27}
			/>
			<ContactForm />
		</section>
	);
}
