import { For, createResource } from "solid-js";
import Card from "../components/Card";
import { A } from "@solidjs/router";
const fetchProds = async () =>
  await fetch("http://localhost:4000/products")
    .then((res) => res.json())
    .catch((err) => console.log(err));

const Home = () => {
  const [products] = createResource(fetchProds);
  return (
    <div class="grid grid-cols-4 gap-10 my-4">
      <For each={products()} fallback={<div>loading...</div>}>
        {(prod, _idx) => (
          <>
            <Card key={prod.id} rounded={true} flat={false}>
              <h2 class="font-semibold mb-2">{prod.title}</h2>
              <p>{prod.description.slice(0, 20)}...</p>
              <A class="btn" href={`/product/${prod.id}`}>
                View
              </A>
            </Card>
          </>
        )}
      </For>
    </div>
  );
};

export default Home;
