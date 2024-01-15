import React, { useCallback } from "react";
import avatarsPath from "../../images/avatars.webp";
import { Logo } from "../../components/base/Logo";
import { Icon } from "../../components/base/Icon";
import { IconType } from "../../enums/iconType";
import styles from "./styles.module.scss";
import { GummyAvatar } from "../../components/gummy/GummyAvatar";
import { GummyMood } from "../../enums/gummyMood";
import { SpeechBalloonWrapper } from "../../components/gummy/SpeechBalloonWrapper";

export const LoginPage = (): JSX.Element => {
  const onLogin = useCallback(() => {
    window.location.href = "/auth/gumroad";
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.form}>
        <div className={styles.row}>
          <Logo className={styles.logo} />
          <small className={styles.name}>by Piotr Mitręga</small>
          <a
            className={styles.linkedinLink}
            href={"https://www.linkedin.com/in/piotr-mitrega/"}
            target={"_blank"}
          >
            <Icon iconType={IconType.LinkedIn} className={styles.linkedin} />
          </a>
        </div>

        <h1>Log in</h1>

        <section className={styles.gummySection}>
          <SpeechBalloonWrapper className={styles.balloon}>
            Greetings, Creator!
            <br />
            <br />
            As your AI assistant, I'm here to help you turn your ideas into income. With smart
            analytics and personalized strategies, I'm committed to enhancing your sales and
            engaging your customers effectively.
          </SpeechBalloonWrapper>
          <GummyAvatar className={styles.gummyLogin} mood={GummyMood.Smiling} />
        </section>

        <button className={styles.button} onClick={onLogin}>
          <span>Login with Gumroad</span>
        </button>
      </main>

      <aside className={styles.avatars}>
        <img src={avatarsPath} />
      </aside>
    </div>
  );
};
