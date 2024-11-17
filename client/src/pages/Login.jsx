import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  }); //user =state variable
  //setUser = updated funstion
  //handle input value
  const handleInput = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value, //so name field becomes dynamic as it is diff for eeach field
    });
  };

  //handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(user);
    console.log(user);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/login.png"
                  alt="Fill login form"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="enter your email"
                      name="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="password"
                      name="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
