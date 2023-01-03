import { useState } from "react";
import Spinner from "./spinner";

interface FormProps {
  onSubmit: (age: number, hobbies: string) => void;
  loading: boolean;
}

const Form = ({ onSubmit, loading }: FormProps): JSX.Element => {
  const [age, setAge] = useState("");
  const [hobbies, setHobbies] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formatAge = Number.parseInt(age);
    // TODO : handle errors
    if (Number.isNaN(formatAge)) {
      return false;
    }

    onSubmit(formatAge, hobbies);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="age">Quel âge a la personne ?</label>
      <input
        type="number"
        placeholder="Âge de la personne"
        id="age"
        value={age}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAge(e.target.value)
        }
      />

      <label htmlFor="hobbies">Thèmes que la personne aime ?</label>
      <input
        type="text"
        placeholder="Sport, lego, films, ..."
        id="hobbies"
        value={hobbies}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setHobbies(e.target.value)
        }
      />

      <div className="flex items-center bg-primary-500">
        {loading ? <Spinner /> : null}
        <input
          type="submit"
          value="Trouver des idées"
          className="hover:cursor-pointer text-white bg-orange-700 hover:bg-orange-800 disabled:hover:cursor-not-allowed disabled:opacity-75 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          disabled={loading}
        />
      </div>
    </form>
  );
};

export default Form;
