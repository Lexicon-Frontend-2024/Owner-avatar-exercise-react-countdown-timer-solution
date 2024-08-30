import { ReactElement } from "react";

export function CountdownTimer(): ReactElement {
  return (
    <>
      <article id="countdown-timer">
        <header className="countdown-header">
          <h2>Timer</h2>
          <div className="actions">
            <button>Reset</button>
            <button>Play/Paus</button>
          </div>
        </header>
        <h1 className="countdown">60</h1>
        <form className="duration">
          <label htmlFor="duration">
            Set duration <em>( seconds )</em>
          </label>
          <input type="number" />
        </form>
      </article>
      <p className="feedback">Feedback</p>
    </>
  );
}
