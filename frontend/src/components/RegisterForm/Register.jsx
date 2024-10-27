import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import * as Components from "./Register.js";

function Register() {
    const [signIn, toggle] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const navigate = useNavigate();
    const { handleSignIn, handleSignUp } = useAuth();

    const handleSignInClick = async (e) => {
        e.preventDefault();
        const result = await handleSignIn(email, password);
        if (result.success) {
            navigate("/");
            window.location.reload();
        } else {
            // Handle error (e.g., display an error message)
            console.error(result.error);
        }
    };

    const handleSignUpClick = async (e) => {
        e.preventDefault();
        const result = await handleSignUp(name, email, password, passwordConfirm);
        if (result.success) {
            navigate("/");
            window.location.reload();
        } else {
            // Handle error (e.g., display an error message)
            console.error(result.error);
        }
    };

    return (
        <div>
            <Components.Container>
                <Components.SignUpContainer $signin={signIn}>
                    <Components.Form onSubmit={handleSignUpClick}>
                        <Components.Title>зареєструватись</Components.Title>
                        <Components.Input
                            type="text"
                            placeholder="ім'я..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Components.Input
                            type="email"
                            placeholder="пошта..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Components.Input
                            type="password"
                            placeholder="пароль..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Components.Input
                            type="password"
                            placeholder="підтвердження паролю..."
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                        <Components.Button type="submit">зареєструватись</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer $signin={signIn}>
                    <Components.Form onSubmit={handleSignInClick}>
                        <Components.Title>увійти</Components.Title>
                        <Components.Input
                            type="email"
                            placeholder="пошта..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Components.Input
                            type="password"
                            placeholder="пароль..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
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
