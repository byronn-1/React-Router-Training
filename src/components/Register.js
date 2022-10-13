import { useRef } from "react";
import { useNavigate } from "react-router-dom";


//Here we imported useNavigate
//in the handleSubmit we call the useNavigate hook passing in the component to be routed to
// dont for get to create a route for the component to be routed to in the Router component (in this case app.js)
//Note: this is navigating in response to a button click
export default function Register() {
  const navigate = useNavigate()
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed");
  }

  return (
    <div className="container">
      <h1>Register for Red30 Tech</h1>
      <p>
        Make sure to grab your spot for this year's conference! We love
        technology and consistently work towards being the premier provider of
        technology solutions and events that connect the world.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
