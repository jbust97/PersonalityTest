import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function GeneralForm() {
  const [outcomes,setOutcomes] = useState([])
  console.log(outcomes);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
         Información General 
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="testTitle"
            name="testTitle"
            label="Título del Test"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Descripción"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
           
      <Typography variant="h6" gutterBottom style={{marginTop: "10px"}}>
          Resultados Posibles 
      </Typography>
      <Grid container spacing={3}>
        {outcomes.map((outcome)=>{
          return (
            <Grid item xs={12}>
            <Card variant="outlined" style={{padding:"5px" }}>
            <TextField
              id="testTitle"
              required
              name="testTitle"
              fullWidth
              label="Nombre"
            />
            <TextField
              required
              id="description"
              name="description"
              label="Descripción"
              fullWidth
              multiline
              rows={4}
            />
          </Card>
          </Grid>       
          );
        })}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={() => {
            setOutcomes((prev)=>{
            
            return [...prev,({name: "", description: ""})]
  
            })
        }}>
            Agregar
          </Button>
        </Grid> 
      </Grid>
    </React.Fragment>
  );
}
