import { FormEventHandler, ReactElement, useEffect, useRef, useState } from "react";
import { Button } from "../button";

export function CountdownTimer(): ReactElement {
  const [duration, setDuration] = useState<number>(60);
  const [feedback, setFeedback] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(duration);
  const [value, setValue] = useState<number | string>("");

  const timerId = useRef<number>();
  const computedCountdownState = isActive ? "pause" : "play_arrow";

  const handleOnReset = () => {
    setIsActive(false);
    setTimeLeft(duration);
    setFeedback("");
  };

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if ((value as number) < 0) {
      setDuration(0);
      setTimeLeft(0);
      setValue("");
    } else {
      setDuration(value as number);
      setTimeLeft(value as number);
      setValue("");
    }
  };

  useEffect(() => {
    if (isActive === true) {
      timerId.current = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    }

    if (isActive === false) {
      clearInterval(timerId.current);
    }
  }, [isActive]);

  useEffect(() => {
    if (timeLeft === 0) {
      setFeedback("Game over!");
      setIsActive(false);
    }
  }, [timeLeft]);

  return (
    <>
      <article id="countdown-timer">
        <header className="countdown-header">
          <h2>Timer</h2>
          <div className="actions">
            <Button icon="restart_alt" onClick={handleOnReset} />
            <Button
              disabled={timeLeft <= 0}
              icon={computedCountdownState}
              onClick={() => setIsActive((ia) => !ia)}
            />
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
      <p className="feedback">{feedback}</p>
    </>
  );
}
