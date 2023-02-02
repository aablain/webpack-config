import { Recipes } from "./recipes";

import "../styles/index.scss";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hello Re🐈!</h1>

          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
