import React, {useState, useEffect} from 'react';
import Markdown from 'react-markdown';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NavBar from './navbar';

const startpage: React.FunctionComponent = () => {
    
    const wikiLink = 'https://de.m.wikipedia.org/wiki/CO2-Bilanz';

    var infotext = '#CO2-Footprint \n Der CO2-Fußabdruck ist ein Maß für den Gesamtbetrag von Kohlenstoffdioxid-Emissionen, der direkt bzw. indirekt durch Aktivitäten oder Lebensstadien von Produkten oder Personen entstehen bzw. verursacht werden. Der CO2-Fußabdruck hat in den letzten Jahren an Bedeutung gewonnen als Mittel, die Klimaauswirkungen von Aktivitäten wie Bereitstellung oder Konsum von Produkten und Dienstleistungen für einzelne Personen oder aggregiert für Organisationen und Staaten zu ermitteln. Auf dieser Basis können gezieltere Klimaschutz-Maßnahmen ergriffen werden, um angestrebte Klimaziele zu erreichen, z. B. die globale Erwärmung auf maximal 2 °C Temperaturerhöhung zu begrenzen.';
    
    return (
    <Box>
        <NavBar />
        <div>
            <h1>CO2-Footprint</h1>
            <Markdown children={infotext} />
            <div>
                <Button variant="contained" size="large">
                    Rechner
                </Button>
                <Button variant="contained" size="large">
                    Welt CO2-Fußabdruck
                </Button>
                <Button variant="contained" size="large" href={wikiLink}>
                    Wikipedia
                </Button>
            </div>
        </div>
    </Box>
    );
}

export default startpage;