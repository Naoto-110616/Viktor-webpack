import Heading from "./components/heading/heading";
import ExampleImage from "./components/example-image/example-image";
import _ from "lodash";

const heading = new Heading();
heading.render(_.upperFirst("img"));
const exampleImage = new ExampleImage();
exampleImage.render();
