import { FormEventHandler, ReactElement, useEffect, useRef, useState } from "react";
import { Button } from "../button";

export function CountdownTimer(): ReactElement {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(5);
  const [value, setValue] = useState<number | string>("");

  const timerId = useRef<number>();
  const computedCountdownState = isActive ? "pause" : "play_arrow";

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setTimeLeft(value as number);
    setValue("");
  };

  useEffect(() => {
    if (isActive === true) {
      timerId.current = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);

      console.log("Timer is running..");
    }

    if (isActive === false) {
      clearInterval(timerId.current);
      console.log("Timer has stopped.");
    }
  }, [isActive]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsActive(false);
    }
  }, [timeLeft]);

  return (
    <>
      <article id="countdown-timer">
        <header className="countdown-header">
          <h2>Timer</h2>
          <div className="actions">
            <Button icon="restart_alt" />
            <Button icon={computedCountdownState} />
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
