import { useState } from "react";

export const Register = () => {
  const [user, setUser] = useState({
    username:"",
    email:"", 
    phone:"",
    password:"",
  });//user =state variable
  //setUser = updated funstion
//handle input value
const handleInput =(e) => {
  let { name, value } = e.target;
  setUser({
    ...user,
    [name]:value,//so name field becomes dynamic as it is diff for eeach field
  }
  );
}
//handling form submission
const handleSubmit = (e) => {
  e.preventDefault();
  alert(user);
  console.log(user);
  
}



  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="A girl illustration"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      id="username"
                      placeholder="username"
                      name="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>

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
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      id="phone"
                      placeholder="phone"
                      name="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
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
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
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
