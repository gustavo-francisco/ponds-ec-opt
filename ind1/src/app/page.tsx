"use client";
import { Button, Stack, Typography, Box } from "@mui/material";
import {useRouter} from "next/navigation"

export default function LandPage() {
  const router = useRouter()
  return (
    <Box 
      sx={{
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "100vh",
        textAlign: "center"
      }}
    >
      <Typography variant="h1" gutterBottom>
        Oi Murilo, Bem vindo!
      </Typography>
      <Typography variant="h2" gutterBottom>
        Selecione a experiência imersiva que você deseja:
      </Typography>
      <Stack spacing={2} direction="row" sx={{ mt: 4 }}>
        <Button variant="contained" sx={{height: '100px', width: '300px', fontSize:'1.2rem'}} onClick={() => router.push("/ar-experience.html")}>Realidade Aumentada</Button>
        <Button variant="contained" sx={{height: '100px', width: '300px', fontSize:'1.2rem'}} onClick={() => router.push("/vr-experience-benchs.html")}>Realidade Virtual</Button>
      </Stack>
    </Box>
  );
}
