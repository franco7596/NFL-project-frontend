import "./footer.css";
import logoNfl from "../../assets/icons/National_Football_League_logo.png";

export default function Footer() {
	return (
		<footer className="footer">
			<img src={logoNfl} alt="logo-nfl" />
			<p>
				This project showcases full stack programming skills using React for the
				front-end, Node.js, PostgreSQL, and Scrapy for the back-end, all
				deployed on AWS. The project involves automatically extracting
				information from NFL teams and players and displaying it in a dynamic
				and visually appealing way.
			</p>
		</footer>
	);
}
