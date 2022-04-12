import Home from "../views/Home";
import Item from "../views/Item";
import List from "../views/List";

class Route {
  constructor(path, title, element, props) {
    this.path = path;
    this.title = title;
    this.element = element;
    this.values = props;
  }
}

export let routes = [
  new Route("/", "Home", Home),
  new Route("films", "Films", List),
  new Route("people", "People", List),
  new Route("vehicles", "Vehicles", List),
  new Route("locations", "Locations", List),
  new Route("species", "Species", List),
  new Route("test", "Test", (props) => (
    <div>
      <h1>Hello World</h1>
    </div>
  )),
  new Route("films/:id", null, Item, {
    displayProperties: [
      "id",
      "title",
      "original_title",
      "description",
      "director",
      "producer",
      "release_date",
    ],
  }),
  new Route("people/:id", null, Item, {
    displayProperties: ["id", "name", "gender", "eye_color", "hair_color"],
  }),
  new Route("vehicles/:id", null, Item, {
    displayProperties: ["id", "name", "description", "vehicle_class", "length"],
  }),
  new Route("locations/:id", null, Item, {
    displayProperties: ["id", "name", "climate", "terrain", "surface_water"],
  }),
  new Route("species/:id", null, Item, {
    displayProperties: [
      "id",
      "name",
      "classification",
      "eye_colors",
      "hair_colors",
    ],
  }),
];
