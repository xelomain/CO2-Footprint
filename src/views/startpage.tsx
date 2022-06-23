import React from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

const buttons = [
  <Button key="rechner" href="http://localhost:3000/rechner">
    CO2-Rechner
  </Button>,
  <Button
    key="weltC02Fussabdruck"
    href="https://climateaccountability.org/carbonmajors.html"
  >
    Welt CO2-Fußabdruck
  </Button>,
  <Button key="wiki" href="https://de.m.wikipedia.org/wiki/CO2-Bilanz">
    Wikipedia
  </Button>,
];

const Startpage: React.FunctionComponent = () => {
  return (
    <Box
      sx={{
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <h1>Startpage</h1>

      <Stack sx={{ width: "50%", alignItems: "center",}} spacing={2}>
        <Alert severity="info">
          <AlertTitle>CO2-Footprint</AlertTitle>
          Der CO2-Fußabdruck ist ein Maß für den Gesamtbetrag von
          Kohlenstoffdioxid-Emissionen, der direkt bzw. indirekt durch
          Aktivitäten oder Lebensstadien von Produkten oder Personen entstehen
          bzw. verursacht werden. Der CO2-Fußabdruck hat in den letzten Jahren
          an Bedeutung gewonnen als Mittel, die Klimaauswirkungen von
          Aktivitäten wie Bereitstellung oder Konsum von Produkten und
          Dienstleistungen für einzelne Personen oder aggregiert für
          Organisationen und Staaten zu ermitteln. Auf dieser Basis können
          gezieltere Klimaschutz-Maßnahmen ergriffen werden, um angestrebte
          Klimaziele zu erreichen, z. B. die globale Erwärmung auf maximal 2 °C
          Temperaturerhöhung zu begrenzen.
        </Alert>
      </Stack>

      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
};

export default Startpage;
