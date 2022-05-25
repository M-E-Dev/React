import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const Cards = () => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      {[0, 1, 2, 3, 4].map((value) => (
        <Grid key={value} item xs={3} >
          <Paper style={{height:90, width:50}}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
