import { useState } from "react";
import  styles from'../styles/WeatherCard.module.scss'

interface SearchProps {
  onSearch: (city: string) => void;
}

export const Search = ({ onSearch }: SearchProps) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) {
    setError("Please, enter a city name!")
    return;
    }
    setError(null);
    onSearch(city);
    setCity("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={`${styles.inputWrapper} ${error? styles.inputError:""}`}>
          <input className={styles.inputCity}
            type="text"
            placeholder="Enter city"
            value={city}

            onChange={(e) => {
              setCity(e.target.value);
              if (error) setError(null);

            }}

      />
{error && <p className={styles.errorText}>{error}</p>}

          <button className={styles.button} type="submit"> Get city</button>
        </div>

    </form>
    </>

  );
};
