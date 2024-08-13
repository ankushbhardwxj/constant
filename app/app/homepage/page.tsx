import { Container } from "@mui/material";
import { Lora, Roboto } from "next/font/google";
import { LoginForm } from "../../components/auth";
import styles from "./page.module.css";

const lora = Lora({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <title>constant</title>
      <Container className={styles.mainContainer}>
        <p style={lora.style} className={styles.header}>
          constant
        </p>
        <p style={roboto.style} className={styles.description}>
          for humans who get shit done
        </p>
        <div className={styles.loginFormContainer}>
          <LoginForm />
        </div>
      </Container>
    </main>
  );
}
