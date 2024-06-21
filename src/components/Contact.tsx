import MenuItem from "./MenuItem";
import ContactForm from "./ContactForm";

export default function Contact() {
	return (
		<section id="contact" className="flex flex-col items-center">
			<div className="divbar"></div>
			<h2>Contact</h2>
			<p className="text-center">
				Mes compétences vous intéressent et vous souhaitez me contacter ?
			</p>
			<p className="text-center mb-5">
				Vous pouvez le faire avec le formulaire ci-dessous, via ma page LinkedIn
				ou tout simplement par mail.
			</p>
			<p className="mb-3">
				<span>jp.herfeld@gmail.com</span>
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
