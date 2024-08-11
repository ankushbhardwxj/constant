import { Container, Typography } from "@mui/material";
import { Lora } from "next/font/google";
import styles from "./page.module.css";

const lora = Lora({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <title>constant</title>
      <Container maxWidth="sm">
        <Typography style={lora.style} className={styles.header} variant="h1">
          constant
        </Typography>
        <Typography className={styles.description} variant="h6">
          for humans who get shit done
        </Typography>
        <a href="/api/auth/login">Login</a>
      </Container>
    </main>
  );
}
