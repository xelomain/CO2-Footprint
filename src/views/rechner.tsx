import React, {useState, useEffect} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


//https://www.wwf.de/themen-projekte/klima-energie/wwf-klimarechner

export interface IRechner {
    co2Wert: string;
} 

const Rechner: React.FunctionComponent = () => {

    const [co2Wert, setCo2Wert] = useState<number>(0);
    const [gemueseWert, setGemueseWert] = useState('');
    const [milchWert, setMilchWert] = useState('');
    const [eiWert, setEiWert] = useState('');

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
            </div>
            
            </>
    );
}

export default Rechner;