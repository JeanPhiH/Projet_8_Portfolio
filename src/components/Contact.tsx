export default function Contact() {
	return (
		<section id="contact">
			<h2>Contact</h2>
			<form className="sm:w-2/3 md:w-1/2 lg:w-1/3 p-5 mx-auto flex flex-col items-center gap-2 bg-light/50">
				<label htmlFor="name">Nom</label>
				<input type="text" name="name" placeholder="Nom" required className=""/>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" placeholder="Email" required />
				<label htmlFor="message">Message</label>
				<textarea
					name="message"
					placeholder="Message"
					maxLength={5000}
					required
					className="h-52"
					
					 />
				<button type="submit" className="bg-light rounded-lg text-dark p-1 hover:border-2 border-highlight">Envoyer</button>
			</form>
		</section>
	);
}
