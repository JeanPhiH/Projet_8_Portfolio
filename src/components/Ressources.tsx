import RsCard from "./RsCard";

export default function Ressources() {
	return (
		<section className="">
			<div className="divbar"></div>
			<h2>Ressources</h2>
			<p className="mt-5 w-[90%] mx-auto">
				En plus des cours de la plateforme OpenClassrooms, voici les sites ou
				vidéos qui m’ont aidé et m’aident à me former. Les explications y sont
				claires et permettent de progresser plus facilement sur certains
				concepts.
			</p>
			<div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-5 mt-8">
				<RsCard
					RsName="Pierre Giraud"
					RsIcon="/icons/pierregiraud.png"
					RsPic="/photos/RsPic-PGcut.png"
					RsLink="https://www.pierre-giraud.com/"
					RsNote="Son cours m'a fait aimé JavaScript, même si c’est un peu trop détaillé parfois."
				/>
				<RsCard
					RsName="École du web"
					RsIcon="/icons/ecoleduweb.png"
					RsPic="/photos/RsPic-ecoleduwebcut.png"
					RsLink="https://www.youtube.com/@EcoleduWeb"
					RsNote="J'ai particulièrment aimé les vidéos sur le CSS et notamment le langage Sass (Scss)."
				/>
				<RsCard
					RsName="Code Concept"
					RsIcon="/icons/codeconcept.jpg"
					RsPic="/photos/RsPic-codeconceptcut.png"
					RsLink="https://www.youtube.com/watch?v=7KC8QQXXN1M"
					RsNote="Pour moi la meilleure explication de React qui existe."
				/>
				<RsCard
					RsName="ByteGrad"
					RsIcon="/icons/bytegrad.webp"
					RsPic="/photos/RsPic-bytegradthumb.webp"
					RsLink="https://www.youtube.com/@ByteGrad"
					RsNote="Je n'aurais jamais pu faire ce portfolio sans ses explications sur Next 14."
				/>
			</div>
		</section>
	);
}
