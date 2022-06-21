import React, {useState, useEffect} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material';


//https://www.wwf.de/themen-projekte/klima-energie/wwf-klimarechner

export interface IRechner {
    co2Wert: string;
} 

const Rechner: React.FunctionComponent = () => {

    var co2Wert = 0;
    const [gemueseWert, setGemueseWert] = useState('');
    const [milchWert, setMilchWert] = useState('');
    const [eiWert, setEiWert] = useState('');
    const [fleischWert, setFleischWert] = useState('');
    
    const grundnahrungsmittelWert: number = 0.77

    const [labelprodukteWert, setLabelprodukteWert] = useState('');
    const [lebensmittelWegwerfenWert, setLebensmittelWegwerfenWert] = useState('');
    const [kmfahrenWert, setKmfahrenWert] = useState('');
    const [oeffentlicheWert, setOeffentlicheWert] = useState('');
    const [privatFlugzeugReisenWert, setPrivatFlugzeugReisenWert] = useState('');
    const [kreuzfahrtWert, setKreuzfahrtWert] = useState('');
    const [heizenWert, setHeizenWert] = useState('');
    const [wohnhausStandardWert, setWohnhausStandardWert] = useState('');
    const [wohnflächeWert, setWohnflächeWert] = useState('');
    const [personenImHaushaltWert, setPersonenImHaushaltWert] = useState('');
    const [gradHeizenWert, setGradHeizenWert] = useState('');
    const [haustype, setHaustype] = useState('');
    const [eigentuemer, setEigentuemer] = useState('');
    const [warmwasser, setWarmwasser] = useState('');
    const [effizienzklasse, setEffizienzklasse] = useState('');
    const [kuehlgeraete, setKuehlgeräte] = useState('');
    const [waescheWaschen, setWaescheWaschen] = useState('');
    const [waescheTrocknen, setWaescheTrocknen] = useState('');

    const kleingereate: number = 0.23;

    const entsorungsnetz: number = 0.36;

    const [kleidung, setKleidung] = useState('');
    const [ausgabeFreizeit, setAusgabeFreizeit] = useState('');
    const [ausgabeMoebel, setAusgabeMoebel] = useState('');
    const [ausgabeEssen, setAusgabeEssen] = useState('');

    const konsumgueter: number = 0.28;
    const haeuserbau: number = 0.30;
    const offentlicheDienstleistung: number = 0.95;
    
    if(gemueseWert === "1"){
      co2Wert = co2Wert + 0.64;
    }else if(gemueseWert === "2"){
      co2Wert = co2Wert + 0.48;
    }else if(gemueseWert === "3"){
      co2Wert = co2Wert + 0.32;
    }else if(gemueseWert === "4"){
      co2Wert = co2Wert + 0.16;
    }else if(gemueseWert === "5"){
      co2Wert = co2Wert + 0.04;
    }

    if(milchWert === "1"){
      co2Wert = co2Wert + 0.81;
    }else if(milchWert === "2"){
      co2Wert = co2Wert + 0.60;
    }else if(milchWert === "3"){
      co2Wert = co2Wert + 0.40;
    }else if(milchWert === "4"){
      co2Wert = co2Wert + 0.24;
    }else if(milchWert === "5"){
      co2Wert = co2Wert + 0.10;
    }else if(milchWert === "6"){
      co2Wert = co2Wert + 0.03;
    }else if(milchWert === "7"){
      co2Wert = co2Wert + 0.02;
    }

    if(eiWert === "1"){
      co2Wert = co2Wert + 0.21;
    }else if(eiWert === "2"){
      co2Wert = co2Wert + 0.14;
    }else if(eiWert === "3"){
      co2Wert = co2Wert + 0.06;
    }else if(eiWert === "4"){
      co2Wert = co2Wert + 0.03;
    }else if(eiWert === "5"){
      co2Wert = co2Wert + 0.01;
    }else if(eiWert === "6"){
      co2Wert = co2Wert + 0.01;
    }

    if(fleischWert === "1"){
      co2Wert = co2Wert + 1.29;
    }else if(fleischWert === "2"){
      co2Wert = co2Wert + 0.97;
    }else if(fleischWert === "3"){
      co2Wert = co2Wert + 0.65;
    }else if(fleischWert === "4"){
      co2Wert = co2Wert + 0.48;
    }else if(fleischWert === "5"){
      co2Wert = co2Wert + 0.23;
    }else if(fleischWert === "6"){
      co2Wert = co2Wert + 0.09;
    }else if(fleischWert === "7"){
      co2Wert = co2Wert + 0.06;
    }

    if(labelprodukteWert === "1"){
      co2Wert = co2Wert + 0.01;
    }else if(labelprodukteWert === "2"){
      co2Wert = co2Wert - 0.06;
    }else if(labelprodukteWert === "3"){
      co2Wert = co2Wert - 0.13;
    }else if(labelprodukteWert === "4"){
      co2Wert = co2Wert - 0.20;
    }else if(labelprodukteWert === "5"){
      co2Wert = co2Wert - 0.27;
    }

    if(lebensmittelWegwerfenWert === "1"){
      co2Wert = co2Wert + 0.46;
    }else if(lebensmittelWegwerfenWert === "2"){
      co2Wert = co2Wert + 0.00;
    }else if(lebensmittelWegwerfenWert === "3"){
      co2Wert = co2Wert - 0.33;
    }

    if(kmfahrenWert === "1"){
      co2Wert = co2Wert + 7.82;
    }else if(kmfahrenWert === "2"){
      co2Wert = co2Wert + 4.30;
    }else if(kmfahrenWert === "3"){
      co2Wert = co2Wert + 2.20;
    }else if(kmfahrenWert === "4"){
      co2Wert = co2Wert + 0.68;
    }else if(kmfahrenWert === "5"){
      co2Wert = co2Wert + 0.39;
    }else if(kmfahrenWert === "6"){
      co2Wert = co2Wert + 0.00;
    }

    if(oeffentlicheWert === "1"){
      co2Wert = co2Wert + 4.47;
    }else if(oeffentlicheWert === "2"){
      co2Wert = co2Wert + 2.68;
    }else if(oeffentlicheWert === "3"){
      co2Wert = co2Wert + 1.67  ;
    }else if(oeffentlicheWert === "4"){
      co2Wert = co2Wert + 0.89;
    }else if(oeffentlicheWert === "5"){
      co2Wert = co2Wert + 0.39;
    }else if(oeffentlicheWert === "6"){
      co2Wert = co2Wert + 0.17;
    }else if(oeffentlicheWert === "7"){
      co2Wert = co2Wert + 0.00;
    }

    if(privatFlugzeugReisenWert === "1"){
      co2Wert = co2Wert + 18.12;
    }else if(privatFlugzeugReisenWert === "2"){
      co2Wert = co2Wert + 6.62;
    }else if(privatFlugzeugReisenWert === "3"){
      co2Wert = co2Wert + 3.62  ;
    }else if(privatFlugzeugReisenWert === "4"){
      co2Wert = co2Wert + 2.08;
    }else if(privatFlugzeugReisenWert === "5"){
      co2Wert = co2Wert + 0.91;
    }else if(privatFlugzeugReisenWert === "6"){
      co2Wert = co2Wert + 0.27;
    }else if(privatFlugzeugReisenWert === "7"){
      co2Wert = co2Wert + 0.00;
    }

    if(kreuzfahrtWert === "1"){
      co2Wert = co2Wert + 2.38;
    }else if(kreuzfahrtWert === "2"){
      co2Wert = co2Wert + 1.19;
    }else if(kreuzfahrtWert === "3"){
      co2Wert = co2Wert + 0.60;
    }else if(kreuzfahrtWert === "4"){
      co2Wert = co2Wert + 0.24;
    }else if(kreuzfahrtWert === "5"){
      co2Wert = co2Wert + 0.00;
    }

    if(heizenWert === "1"){
      co2Wert = co2Wert + 2.52;
    }else if(heizenWert === "2"){
      co2Wert = co2Wert + 2.18;
    }else if(heizenWert === "3"){
      co2Wert = co2Wert + 1.89;
    }else if(heizenWert === "4"){
      co2Wert = co2Wert + 1.38;
    }else if(heizenWert === "5"){
      co2Wert = co2Wert + 1.05;
    }else if(heizenWert === "6"){
      co2Wert = co2Wert + 0.90;
    }else if(heizenWert === "7"){
      co2Wert = co2Wert + 0.74;
    }else if(heizenWert === "8"){
      co2Wert = co2Wert + 0.17;
    }else if(heizenWert === "9"){
      co2Wert = co2Wert + 0.18;
    }else if(heizenWert === "10"){
      co2Wert = co2Wert + 1.26;
    }

    if(wohnhausStandardWert === "1"){
      co2Wert = co2Wert + 0.01;
    }else if(wohnhausStandardWert === "2"){
      co2Wert = co2Wert - 0.05;
    }else if(wohnhausStandardWert === "3"){
      co2Wert = co2Wert - 0.07;
    }else if(wohnhausStandardWert === "4"){
      co2Wert = co2Wert - 0.04;
    }else if(wohnhausStandardWert === "5"){
      co2Wert = co2Wert - 0.08;
    }else if(wohnhausStandardWert === "6"){
      co2Wert = co2Wert - 0.09;
    }else if(wohnhausStandardWert === "7"){
      co2Wert = co2Wert - 0.14;
    }else if(wohnhausStandardWert === "8"){
      co2Wert = co2Wert - 0.01;
    }

    if(wohnflächeWert === "1"){
      co2Wert = co2Wert + 1.81;
    }else if(wohnflächeWert === "2"){
      co2Wert = co2Wert + 1.48;
    }else if(wohnflächeWert === "3"){
      co2Wert = co2Wert + 0.99;
    }else if(wohnflächeWert === "4"){
      co2Wert = co2Wert + 0.74;
    }else if(wohnflächeWert === "5"){
      co2Wert = co2Wert + 0.58;
    }else if(wohnflächeWert === "6"){
      co2Wert = co2Wert + 0.41;
    }else if(wohnflächeWert === "7"){
      co2Wert = co2Wert + 0.25;
    }else if(wohnflächeWert === "8"){
      co2Wert = co2Wert + 0.09;
    }else if(wohnflächeWert === "9"){
      co2Wert = co2Wert - 0.01;
    }

    if(personenImHaushaltWert === "1"){
      co2Wert = co2Wert + 0.16;
    }else if(personenImHaushaltWert === "2"){
      co2Wert = co2Wert + 0.00;
    }else if(personenImHaushaltWert === "3"){
      co2Wert = co2Wert - 0.05;
    }else if(personenImHaushaltWert === "4"){
      co2Wert = co2Wert - 0.08;
    }else if(personenImHaushaltWert === "5"){
      co2Wert = co2Wert - 0.09;
    }else if(personenImHaushaltWert === "6"){
      co2Wert = co2Wert - 0.10;
    }else if(personenImHaushaltWert === "7"){
      co2Wert = co2Wert - 0.11;
    }

    if(gradHeizenWert === "1"){
      co2Wert = co2Wert + 0.00;
    }else if(gradHeizenWert === "2"){
      co2Wert = co2Wert + 0.00;
    }else if(gradHeizenWert === "3"){
      co2Wert = co2Wert + 0.00;
    }else if(gradHeizenWert === "4"){
      co2Wert = co2Wert + 0.00;
    }else if(gradHeizenWert === "5"){
      co2Wert = co2Wert + 0.00;
    }

    if(haustype === "1"){
      co2Wert = co2Wert + 0.00;
    }else if(haustype === "2"){
      co2Wert = co2Wert + 0.00;
    }

    if(eigentuemer === "1"){
      co2Wert = co2Wert + 0.00;
    }else if(eigentuemer === "2"){
      co2Wert = co2Wert + 0.00;
    }

    if(warmwasser === "1"){
      co2Wert = co2Wert + 0.53;
    }else if(warmwasser === "2"){
      co2Wert = co2Wert + 0.46;
    }else if(warmwasser === "3"){
      co2Wert = co2Wert + 0.40;
    }else if(warmwasser === "4"){
      co2Wert = co2Wert + 0.29;
    }else if(warmwasser === "5"){
      co2Wert = co2Wert + 0.15;
    }else if(warmwasser === "6"){
      co2Wert = co2Wert + 0.19;
    }else if(warmwasser === "7"){
      co2Wert = co2Wert + 0.15;
    }else if(warmwasser === "8"){
      co2Wert = co2Wert + 0.04;
    }else if(warmwasser === "9"){
      co2Wert = co2Wert + 0.03;
    }else if(warmwasser === "10"){
      co2Wert = co2Wert + 0.26;
    }

    if(effizienzklasse === "1"){
      co2Wert = co2Wert + 0.21;
    }else if(effizienzklasse === "2"){
      co2Wert = co2Wert + 0.17;
    }else if(effizienzklasse === "3"){
      co2Wert = co2Wert + 0.12;
    }else if(effizienzklasse === "4"){
      co2Wert = co2Wert + 0.10;
    }else if(effizienzklasse === "5"){
      co2Wert = co2Wert + 0.21;
    }else if(effizienzklasse === "6"){
      co2Wert = co2Wert + 0.15;
    }

    if(kuehlgeraete === "1"){
      co2Wert = co2Wert + 0.42;
    }else if(kuehlgeraete === "2"){
      co2Wert = co2Wert + 0.14;
    }else if(kuehlgeraete === "3"){
      co2Wert = co2Wert + 0.11;
    }

    if(waescheWaschen === "1"){
      co2Wert = co2Wert + 0.03;
    }else if(waescheWaschen === "2"){
      co2Wert = co2Wert + 0.02;
    }else if(waescheWaschen === "3"){
      co2Wert = co2Wert + 0.01;
    }

    if(waescheTrocknen === "1"){
      co2Wert = co2Wert + 0.10;
    }else if(waescheTrocknen === "2"){
      co2Wert = co2Wert + 0.05;
    }else if(waescheTrocknen === "3"){
      co2Wert = co2Wert + 0.00;
    }

    if(kleidung === "1"){
      co2Wert = co2Wert + 1.20;
    }else if(kleidung === "2"){
      co2Wert = co2Wert + 0.60;
    }else if(kleidung === "3"){
      co2Wert = co2Wert + 0.30;
    }else if(kleidung === "4"){
      co2Wert = co2Wert + 0.23;
    }else if(kleidung === "5"){
      co2Wert = co2Wert + 0.08;
    }

    if(ausgabeFreizeit === "1"){
      co2Wert = co2Wert + 1.27;
    }else if(ausgabeFreizeit === "2"){
      co2Wert = co2Wert + 0.64;
    }else if(ausgabeFreizeit === "3"){
      co2Wert = co2Wert + 0.32;
    }else if(ausgabeFreizeit === "4"){
      co2Wert = co2Wert + 0.24;
    }else if(ausgabeFreizeit === "5"){
      co2Wert = co2Wert + 0.08;
    }

    if(ausgabeMoebel === "1"){
      co2Wert = co2Wert + 3.16;
    }else if(ausgabeMoebel === "2"){
      co2Wert = co2Wert + 1.58;
    }else if(ausgabeMoebel === "3"){
      co2Wert = co2Wert + 0.79;
    }else if(ausgabeMoebel === "4"){
      co2Wert = co2Wert + 0.59;
    }else if(ausgabeMoebel === "5"){
      co2Wert = co2Wert + 0.20;
    }

    if(ausgabeEssen === "1"){
      co2Wert = co2Wert + 2.40;
    }else if(ausgabeEssen === "2"){
      co2Wert = co2Wert + 1.20;
    }else if(ausgabeEssen === "3"){
      co2Wert = co2Wert + 0.60;
    }else if(ausgabeEssen === "4"){
      co2Wert = co2Wert + 0.45;
    }else if(ausgabeEssen === "5"){
      co2Wert = co2Wert + 0.15;
    }

    co2Wert = co2Wert + grundnahrungsmittelWert + kleingereate + entsorungsnetz + konsumgueter + haeuserbau + offentlicheDienstleistung;

    var divCo2Wert = co2Wert / 11.6; 

    return(
        <><div>
            <h1>Rechner</h1>
        </div>
        <div>
        <FormControl>
      <FormLabel>Wie viel saisonales Gemuese kaufen Sie ein?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        onChange={(e, value) => {
            return setGemueseWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Wenig" />
        <FormControlLabel value="2" control={<Radio />} label="Etwa ein Viertel" />
        <FormControlLabel value="3" control={<Radio />} label="Etwa die Haelfte" />
        <FormControlLabel value="4" control={<Radio />} label="Etwa drei Viertel" />
        <FormControlLabel value="5" control={<Radio />} label="Komplett saisonal" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel>Wie oft trinken/essen Sie Milchprodukte?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="milchprodukte"
        onChange={(e, value) => {
            return setMilchWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label=">10x am Tag" />
        <FormControlLabel value="2" control={<Radio />} label="8-10x am Tag" />
        <FormControlLabel value="3" control={<Radio />} label="5-7x am Tag" />
        <FormControlLabel value="4" control={<Radio />} label="3-4x am Tag" />
        <FormControlLabel value="5" control={<Radio />} label="1-2x am Tag" />
        <FormControlLabel value="6" control={<Radio />} label="1-7x pro Woche" />
        <FormControlLabel value="7" control={<Radio />} label="<1x pro Woche" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel>Wie oft essen Sie Eiprodukte?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="eiprodukte"
        onChange={(e, value) => {
            return setEiWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label=">2x am Tag" />
        <FormControlLabel value="2" control={<Radio />} label="1-2x am Tag" />
        <FormControlLabel value="3" control={<Radio />} label="3-6x pro Woche" />
        <FormControlLabel value="4" control={<Radio />} label="1-3x pro Woche" />
        <FormControlLabel value="5" control={<Radio />} label="1x pro Woche" />
        <FormControlLabel value="6" control={<Radio />} label="<1x pro Woche" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie oft essen Sie Fleisch & Fischprodukte?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="fleischprodukte"
        onChange={(e, value) => {
            return setFleischWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label=">3x am Tag" />
        <FormControlLabel value="2" control={<Radio />} label="3x am Tag" />
        <FormControlLabel value="3" control={<Radio />} label="2x am Tag" />
        <FormControlLabel value="4" control={<Radio />} label="1-2x am Tag" />
        <FormControlLabel value="5" control={<Radio />} label="4-6x pro Woche" />
        <FormControlLabel value="6" control={<Radio />} label="1-3x pro Woche" />
        <FormControlLabel value="7" control={<Radio />} label="<1x pro Woche" />
      </RadioGroup>
    </FormControl>

    <TextField>
      Durch den Verbrauch der Grundnahrungsmittel wird ein Wert von 0,77 Tonnen CO2 berechnet
    </TextField>

    <FormControl>
      <FormLabel>Wie oft kaufen Sie Labelprodukte?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="labelprodukte"
        onChange={(e, value) => {
            return setLabelprodukteWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label=" = 0 " />
        <FormControlLabel value="2" control={<Radio />} label=" ca 1/4" />
        <FormControlLabel value="3" control={<Radio />} label=" ca 1/2" />
        <FormControlLabel value="4" control={<Radio />} label=" ca 3/4" />
        <FormControlLabel value="5" control={<Radio />} label=" fast 1/1" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie oft werfen Sie Lebensmittel weg?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="lebensmittelWegwerfen"
        onChange={(e, value) => {
            return setLebensmittelWegwerfenWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Oft" />
        <FormControlLabel value="2" control={<Radio />} label="Passiert mir ab und zu" />
        <FormControlLabel value="3" control={<Radio />} label="Nie" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie viele KM fahren Sie privat?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="kmfahren"
        onChange={(e, value) => {
            return setKmfahrenWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="<300.000 km" />
        <FormControlLabel value="2" control={<Radio />} label="14.000 - 30.000 km" />
        <FormControlLabel value="3" control={<Radio />} label="9.000 - 14.000 km" />
        <FormControlLabel value="4" control={<Radio />} label="2.000 - 9.000 km" />
        <FormControlLabel value="5" control={<Radio />} label="<2.000 km" />
        <FormControlLabel value="6" control={<Radio />} label="Nicht fahren" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie oft fahren Sie mit öffentlichen Verkehrsmitteln?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="oeffentlicheVerkehrsmittel"
        onChange={(e, value) => {
            return setOeffentlicheWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label=">600 km" />
        <FormControlLabel value="2" control={<Radio />} label="360 - 600 km" />
        <FormControlLabel value="3" control={<Radio />} label="240 - 360 km" />
        <FormControlLabel value="4" control={<Radio />} label="80 - 240 km" />
        <FormControlLabel value="5" control={<Radio />} label="60 - 80 km" />
        <FormControlLabel value="6" control={<Radio />} label="<60 km" />
        <FormControlLabel value="7" control={<Radio />} label="Garnicht" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie oft sind Sie in den letzten 5 Jahren privat geflogen?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="privatGeflogen"
        onChange={(e, value) => {
            return setPrivatFlugzeugReisenWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label=">50 Stunden" />
        <FormControlLabel value="2" control={<Radio />} label="25 - 50 Stunden" />
        <FormControlLabel value="3" control={<Radio />} label="15 - 25 Stunden" />
        <FormControlLabel value="4" control={<Radio />} label="8 - 15 Stunden" />
        <FormControlLabel value="5" control={<Radio />} label="2 - 8 Stunden" />
        <FormControlLabel value="6" control={<Radio />} label="<2 Stunden" />
        <FormControlLabel value="7" control={<Radio />} label="Garnicht" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie viele Stunden waren Sie in den letzten 5 Jahren auf Kreuzfahrt?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="kreuzfahrt"
        onChange={(e, value) => {
            return setKreuzfahrtWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label=">2 Wochen" />
        <FormControlLabel value="2" control={<Radio />} label="1 - 2 Wochen " />
        <FormControlLabel value="3" control={<Radio />} label="4 - 6 Tage" />
        <FormControlLabel value="4" control={<Radio />} label="1 - 2 Tage " />
        <FormControlLabel value="5" control={<Radio />} label="Garnicht" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie heizen sie im Winter?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="heizen"
        onChange={(e, value) => {
            return setHeizenWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Elektroheizung" />
        <FormControlLabel value="2" control={<Radio />} label="Kohleheizung" />
        <FormControlLabel value="3" control={<Radio />} label="Erdölheizung" />
        <FormControlLabel value="4" control={<Radio />} label="Erdgasheizung" />
        <FormControlLabel value="5" control={<Radio />} label="Gas mit Solarthermie" />
        <FormControlLabel value="6" control={<Radio />} label="Fernwärme" />
        <FormControlLabel value="7" control={<Radio />} label="Wärmepumpe" />
        <FormControlLabel value="8" control={<Radio />} label="Holz" />
        <FormControlLabel value="9" control={<Radio />} label="Holz mit Solarthermie" />
        <FormControlLabel value="10" control={<Radio />} label="n/a" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie heizen sie im Winter?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="heizen"
        onChange={(e, value) => {
            return setHeizenWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Elektroheizung" />
        <FormControlLabel value="2" control={<Radio />} label="Kohleheizung" />
        <FormControlLabel value="3" control={<Radio />} label="Erdölheizung" />
        <FormControlLabel value="4" control={<Radio />} label="Erdgasheizung" />
        <FormControlLabel value="5" control={<Radio />} label="Gas mit Solarthermie" />
        <FormControlLabel value="6" control={<Radio />} label="Fernwärme" />
        <FormControlLabel value="7" control={<Radio />} label="Wärmepumpe" />
        <FormControlLabel value="8" control={<Radio />} label="Holz" />
        <FormControlLabel value="9" control={<Radio />} label="Holz mit Solarthermie" />
        <FormControlLabel value="10" control={<Radio />} label="n/a" />
      </RadioGroup>
    </FormControl>


    <FormControl>
      <FormLabel>Welchen Standard entspricht Ihr Wohnhaus?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="wohnhausStandard"
        onChange={(e, value) => {
            return setWohnhausStandardWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Bis 1994 (unsaniert)" />
        <FormControlLabel value="2" control={<Radio />} label="1995  bis 2001 (unsaniert)" />
        <FormControlLabel value="3" control={<Radio />} label="Ab 2001" />
        <FormControlLabel value="4" control={<Radio />} label="Energetisch vollsaniert (Baujahr bis 1948)" />
        <FormControlLabel value="5" control={<Radio />} label="Energetisch vollsaniert (Baujahr 1949 bis 2001)" />
        <FormControlLabel value="6" control={<Radio />} label="Niedrigenergiehaus" />
        <FormControlLabel value="7" control={<Radio />} label="Passivhaus" />
        <FormControlLabel value="8" control={<Radio />} label="n/a" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie viel Wohnfläche hat Ihre Wohung/Haus?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="wohnflaeche"
        onChange={(e, value) => {
            return setWohnflächeWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label=">300 m²" />
        <FormControlLabel value="2" control={<Radio />} label="201 - 300 m²" />
        <FormControlLabel value="3" control={<Radio />} label="151 - 200 m²" />
        <FormControlLabel value="4" control={<Radio />} label="126 - 150 m²" />
        <FormControlLabel value="5" control={<Radio />} label="101 - 125 m²" />
        <FormControlLabel value="6" control={<Radio />} label="76 - 100 m²" />
        <FormControlLabel value="7" control={<Radio />} label="51 - 75 m²" />
        <FormControlLabel value="8" control={<Radio />} label="30 - 50 m²" />
        <FormControlLabel value="9" control={<Radio />} label="<30 m²" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie viele Personen sind im Haushalt?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="personenImHaushalt"
        onChange={(e, value) => {
            return setPersonenImHaushaltWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="1 Person" />
        <FormControlLabel value="2" control={<Radio />} label="2 Personen" />
        <FormControlLabel value="3" control={<Radio />} label="3 Personen" />
        <FormControlLabel value="4" control={<Radio />} label="4 Personen" />
        <FormControlLabel value="5" control={<Radio />} label="5 Personen" />
        <FormControlLabel value="6" control={<Radio />} label="6 Personen" />
        <FormControlLabel value="7" control={<Radio />} label="7 Personen oder mehr" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie viele Grad heizen Sie Ihr Zuhause?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="gradHeizen"
        onChange={(e, value) => {
            return setGradHeizenWert(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Über 23°C" />
        <FormControlLabel value="2" control={<Radio />} label="21°C" />
        <FormControlLabel value="3" control={<Radio />} label="maximal 19°C" />
        <FormControlLabel value="4" control={<Radio />} label="maximal 17°C" />
        <FormControlLabel value="5" control={<Radio />} label="n/a" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>In welchem Haustype wohnen Sie?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="haustype"
        onChange={(e, value) => {
            return setHaustype(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Einfamilienhaus" />
        <FormControlLabel value="2" control={<Radio />} label="Mehrfamilienhaus" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Sind Sie Eigentümer des Hauses/Wohnung?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="eigentuemer"
        onChange={(e, value) => {
            return setEigentuemer(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Eigentümer" />
        <FormControlLabel value="2" control={<Radio />} label="Mieter" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie bereiten Sie ihr Warmwasser auf?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="warmwasser"
        onChange={(e, value) => {
            return setWarmwasser(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Elektroboiler" />
        <FormControlLabel value="2" control={<Radio />} label="Kohleheizung" />
        <FormControlLabel value="3" control={<Radio />} label="Erdölheizung" />
        <FormControlLabel value="4" control={<Radio />} label="Erdgasheizung" />
        <FormControlLabel value="5" control={<Radio />} label="Wärmepumpe" />
        <FormControlLabel value="6" control={<Radio />} label="Fernwärme" />
        <FormControlLabel value="7" control={<Radio />} label="Gas mit Solarthermie" />
        <FormControlLabel value="8" control={<Radio />} label="Holz" />
        <FormControlLabel value="9" control={<Radio />} label="Holz mit Solarthermie" />
        <FormControlLabel value="10" control={<Radio />} label="n/a" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Welche Effizienzklasse haben Ihre Haushaltsgeräte?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="effizienzklasse"
        onChange={(e, value) => {
            return setEffizienzklasse(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Schlechter als A" />
        <FormControlLabel value="2" control={<Radio />} label="A und besser" />
        <FormControlLabel value="3" control={<Radio />} label="A+ und besser" />
        <FormControlLabel value="4" control={<Radio />} label="A++ und besser" />
        <FormControlLabel value="5" control={<Radio />} label="n/a" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Welche Kühlgeräte haben Sie?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="kuehlgeraet"
        onChange={(e, value) => {
            return setKuehlgeräte(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Mehrere Kühlschränke und/oder Tiefkühltruhen" />
        <FormControlLabel value="2" control={<Radio />} label="Kühlgefrierkombi (zweitürig) oder Kühlschrank mit kleinem Gefrierfach in Kombination mit Tiefkühler" />
        <FormControlLabel value="3" control={<Radio />} label="Ein Kühlschrank mit kleinem Gefrierfach" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie waschen Sie Ihre Wäsche hauptsächlich?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="waeschewaschen"
        onChange={(e, value) => {
            return setWaescheWaschen(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Jede Wäsche auf der maximal vorgesehenen Waschtemperatur und manchmal auch Kochwäsche (95°C)" />
        <FormControlLabel value="2" control={<Radio />} label="Den Großteil der Wäsche bei 40°C, etwa ein Drittel bei 60°C, keine Kochwäsche (95°C)" />
        <FormControlLabel value="3" control={<Radio />} label="Mehr als die Hälfte der Wäsche bei 30°C und weniger, nur ganz selten 60°C" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie trocknen Sie Ihre Wäsche hauptsächlich?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="waeschetrocknen"
        onChange={(e, value) => {
            return setWaescheTrocknen(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Nur im Wäschetrockner oder Raum mit Lufttrockner" />
        <FormControlLabel value="2" control={<Radio />} label="Teils mit Wäschetrockner/Lufttrockner, teils an der Wäscheleine" />
        <FormControlLabel value="3" control={<Radio />} label="An der Wäscheleine" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie viel geben Sie monatlich für Kleider und Schuhe aus?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="kleidung"
        onChange={(e, value) => {
            return setKleidung(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="> 300 €" />
        <FormControlLabel value="2" control={<Radio />} label="ca. 150 €" />
        <FormControlLabel value="3" control={<Radio />} label="ca. 80 €" />
        <FormControlLabel value="4" control={<Radio />} label="ca. 60 €" />
        <FormControlLabel value="5" control={<Radio />} label="< 20 €" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie viel geben Sie monatlich für Freizeit und Kultur aus?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="ausgabeFreizeit"
        onChange={(e, value) => {
            return setAusgabeFreizeit(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="> 600 €" />
        <FormControlLabel value="2" control={<Radio />} label="ca. 300 €" />
        <FormControlLabel value="3" control={<Radio />} label="ca. 150 €" />
        <FormControlLabel value="4" control={<Radio />} label="ca. 110 €" />
        <FormControlLabel value="5" control={<Radio />} label="< 40 €" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie viel geben Sie monatlich für Möbel und Haushaltsgeräte aus?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="ausgabeMoebel"
        onChange={(e, value) => {
            return setAusgabeMoebel(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="> 400 €" />
        <FormControlLabel value="2" control={<Radio />} label="ca. 200 €" />
        <FormControlLabel value="3" control={<Radio />} label="ca. 100 €" />
        <FormControlLabel value="4" control={<Radio />} label="ca. 80 €" />
        <FormControlLabel value="5" control={<Radio />} label="< 30 €" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel>Wie viel geben Sie monatlich für Essen aus?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        id="ausgabeEssen"
        onChange={(e, value) => {
            return setAusgabeEssen(value|| '');
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="> 360 €" />
        <FormControlLabel value="2" control={<Radio />} label="ca. 180 €" />
        <FormControlLabel value="3" control={<Radio />} label="ca. 90 €" />
        <FormControlLabel value="4" control={<Radio />} label="ca. 70 €" />
        <FormControlLabel value="5" control={<Radio />} label="< 20 €" />
      </RadioGroup>
    </FormControl>
    

            </div>
            <div>
              <TextField label={"Ihr CO2 Wert"} value={co2Wert}/>
              <TextField label={"Ihr CO2 Wirt in Differenz zum Durchschnitt in Deutschland"} value={divCo2Wert}/>
            </div>
            
            </>
    );
}

export default Rechner;