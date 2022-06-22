import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const Startpage: React.FunctionComponent = () => {
    
    
    return (
        <div>
            <div>
                <h1>Startpage</h1>
            </div>
            <div>
                <div>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="info">
                        <AlertTitle>CO2-Footprint</AlertTitle>
                        Der CO2-Fußabdruck ist ein Maß für den Gesamtbetrag von Kohlenstoffdioxid-Emissionen, der direkt bzw. indirekt durch Aktivitäten oder Lebensstadien von Produkten oder Personen entstehen bzw. verursacht werden. Der CO2-Fußabdruck hat in den letzten Jahren an Bedeutung gewonnen als Mittel, die Klimaauswirkungen von Aktivitäten wie Bereitstellung oder Konsum von Produkten und Dienstleistungen für einzelne Personen oder aggregiert für Organisationen und Staaten zu ermitteln. Auf dieser Basis können gezieltere Klimaschutz-Maßnahmen ergriffen werden, um angestrebte Klimaziele zu erreichen, z. B. die globale Erwärmung auf maximal 2 °C Temperaturerhöhung zu begrenzen.
                    </Alert>
             </Stack>
                </div>
            </div>
            <div>
                <span>
                    <Link to="/rechner">
                        <Button variant="contained" color="primary" aria-label='Rechner' />
                    </Link>
                </span>
            </div>
            <div>    
                <span>
                    <Link to="/welt-co2-fußabdruck">
                        <Button variant="contained" color="primary" aria-label='Welt CO2-Fußabdruck' />
                    </Link>
                </span>
            </div>
            <div>
                <span>
                    <Link to={{ pathname: "https://de.m.wikipedia.org/wiki/CO2-Bilanz"}}>
                        <Button variant="contained" color="primary" aria-label='Wikipedia'/>
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default Startpage;