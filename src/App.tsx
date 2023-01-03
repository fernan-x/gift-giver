import { useState } from "react";
import { Form } from "./components";
import Loader from "./components/Loader";
import { formatQuery } from "./helpers/formatQuery";

function App() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (age: number, hobbies: string) => {
    setLoading(true);
    const prompt = formatQuery(age, hobbies);
    console.log(prompt);
  };

  return (
    <div className="App">
      <header>
        <h1>Gift giver</h1>
        <p>
          Précisez l'âge d'une personne et ce qu'elle aime et trouvez des idées
          de cadeau.
        </p>
      </header>
      <Form onSubmit={onSubmit} loading={loading} />
      <footer>{loading ? <Loader /> : null}</footer>
    </div>
  );
}

export default App;
