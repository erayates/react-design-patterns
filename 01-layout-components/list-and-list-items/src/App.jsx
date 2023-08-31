import "./App.css";
import { RegularList } from "./RegularList";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallProductListItem } from "./product/SmallProductListItem";
import { LargeProductListItem } from "./product/LargeProductListItem";

const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Doe",
    age: 22,
    hairColor: "blonde",
    hobbies: ["reading", "writing", "drawing"],
  },
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "A 32-inch flat-screen TV.",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology",
    rating: 4.2,
  },
];

function App() {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <hr></hr>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <hr></hr>
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <hr></hr>
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </>
  );
}

export default App;
