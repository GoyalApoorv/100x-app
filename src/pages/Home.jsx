// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LoginMain from "../components/LoginMain";
import { URLs } from "../constants.js";

function Home() {
  const navigate = useNavigate();

  const onSignIn = async () => {
    const res = await fetch(`${URLs.BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "batman@example.com",
        password: "gothamrocks",
      }),
    });
    if (!res.ok) {
      alert("Login failed! Invalid credentials");
      throw new Error(res.statusText);
    }
    const jsonResponse = await res.json();
    console.log(jsonResponse);
    navigate(URLs.feed);
  };

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <LoginMain onSignIn={onSignIn} />
    </div>
  );
}

export default Home;
