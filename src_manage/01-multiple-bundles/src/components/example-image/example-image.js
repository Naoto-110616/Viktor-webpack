import image from "./utada.png";
import "./example-image.scss";

class ExampleImage {
	render() {
		const img = createElement("img");
		img.src = image;
		img.alt = "example image";
		img.classList.add("example-img");

		const bodyDomElement = document.querySelector("body");
		bodyDomElement.appendChild(img);
	}
}

export default ExampleImage;
