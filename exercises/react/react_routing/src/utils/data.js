import Home from "../views/Home";
import List from "../views/List";

class Route {
  constructor(path, title, element) {
    this.path = path;
    this.title = title;
    this.element = element;
  }
}

export let routes = [
  new Route("/", "Home", Home),
  new Route("films", "Films", List),
  new Route("people", "People", List),
  new Route("vehicles", "Vehicles", List),
  new Route("locations", "Locations", List),
  new Route("species", "Species", List),
  new Route("test", "Test", (props) => <div><h1>Hello World</h1></div>)
];
