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

    const [co2Wert, setCo2Wert] = useState<number>(0);
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
            
            </>
    );
}

export default Rechner;