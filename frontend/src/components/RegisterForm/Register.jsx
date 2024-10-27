import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as Components from "./Register.js";

function Register() {
  const [signIn, toggle] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("token", result.token);
  
        const profileResponse = await fetch(`http://localhost:5000/users/username?email=${encodeURIComponent(email)}`, {
          method: "GET",
          headers: { "Content-type": "application/json" },
        });
        const profileResult = await profileResponse.json();
        if (profileResponse.ok) {
          setUsername(profileResult.data.user.name);
          localStorage.setItem("username", profileResult.data.user.name); 
          navigate("/");
          window.location.reload();
        } else {
          console.error(profileResult.message);
        }
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, passwordConfirm }),
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", name); 
        setUsername(name);
        navigate("/");
        window.location.reload();
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };
  

  return (
    <div>
      <Components.Container>
        <Components.SignUpContainer $signin={signIn}>
          <Components.Form onSubmit={handleSignUp}>
            <Components.Title>зареєструватись</Components.Title>
            <Components.Input type="text" placeholder="ім'я..." value={name} onChange={(e) => setName(e.target.value)} />
            <Components.Input type="email" placeholder="пошта..." value={email} onChange={(e) => setEmail(e.target.value)} />
            <Components.Input type="password" placeholder="пароль..." value={password} onChange={(e) => setPassword(e.target.value)} />
            <Components.Input type="password" placeholder="підтвердження паролю..." value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
            <Components.Button type="submit">зареєструватись</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer $signin={signIn}>
          <Components.Form onSubmit={handleSignIn}>
            <Components.Title>увійти</Components.Title>
            <Components.Input type="email" placeholder="пошта..." value={email} onChange={(e) => setEmail(e.target.value)} />
            <Components.Input type="password" placeholder="пароль..." value={password} onChange={(e) => setPassword(e.target.value)} />
            <Components.Button type="submit">увійти</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer $signin={signIn}>
          <Components.Overlay $signin={signIn}>
            <Components.LeftOverlayPanel $signin={signIn}>
              <Components.Title>ласкаво просимо!</Components.Title>
              <Components.Paragraph>
                щоб залишатися на зв'язку з нами, увійдіть, використовуючи свої особисті дані
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>увійти</Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel $signin={signIn}>
              <Components.Title>привіт, друже!</Components.Title>
              <Components.Paragraph>
                введіть свої особисті дані та розпочніть свою подорож з нами
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>зареєструватись</Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default Register;
