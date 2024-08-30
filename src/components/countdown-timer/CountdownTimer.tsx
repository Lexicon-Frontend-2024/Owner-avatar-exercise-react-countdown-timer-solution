import { FormEventHandler, ReactElement, useState } from "react";
import { Button } from "../button";

export function CountdownTimer(): ReactElement {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(80);
  const [value, setValue] = useState<number | string>("");

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setTimeLeft(value as number);
    setValue("");
  };

  return (
    <>
      <article id="countdown-timer">
        <header className="countdown-header">
          <h2>Timer</h2>
          <div className="actions">
            <Button icon="restart_alt" />
            <Button icon="pause" />
          </div>
        </header>
        <h1 className="countdown">{timeLeft}</h1>
        <form className="duration" onSubmit={handleOnSubmit}>
          <label htmlFor="duration">
            Set duration <em>( seconds )</em>
          </label>
          <input onChange={(e) => setValue(parseInt(e.target.value))} type="number" value={value} />
        </form>
      </article>
      <p className="feedback">Feedback</p>
    </>
  );
}
