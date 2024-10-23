import React from "react";
import * as Components from "./Register.js";
function Register({signIn}) {
    return (
        <div>
            <Components.Container>
                <Components.SignUpContainer $signin={signIn}>
                    <Components.Form>
                        <Components.Title>зареєструватись</Components.Title>
                        <Components.Input type="text" placeholder="ім'я..." />
                        <Components.Input type="email" placeholder="пошта..." />
                        <Components.Input type="password" placeholder="пароль..." />
                        <Components.Input type="password" placeholder="підтвердження паролю..." />
                        <Components.Button type="submit">зареєструватись</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer $signin={signIn}>
                    <Components.Form>
                        <Components.Title>увійти</Components.Title>
                        <Components.Input type="email" placeholder="пошта..." />
                        <Components.Input type="password" placeholder="пароль..." />
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
                            <Components.GhostButton>увійти</Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel $signin={signIn}>
                            <Components.Title>привіт, друже!</Components.Title>
                            <Components.Paragraph>
                                введіть свої особисті дані та розпочніть свою подорож з нами
                            </Components.Paragraph>
                            <Components.GhostButton>
                                зареєструватись
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </div>
    );
};

export default Register;
