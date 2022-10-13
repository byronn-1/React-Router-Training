import { useLocation } from "react-router-dom";

//here we destructure state from the useLocation hook to render the email entered
//using short circuit evaluation we can render the email only if it is there to prevent the app from breaking if there is no value
export default function Confirmation() {
  const { state } = useLocation();

  return (
    <div className="container">
      <h1>Thank You!</h1>
      <p>You're now registered for Red30 Tech.</p>
      {state && (
        <p>
          We have sent more details to <strong>{state.email}</strong>
        </p>
      )}
    </div>
  );
}
