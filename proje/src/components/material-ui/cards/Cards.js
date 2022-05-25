import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const Cards = () => {
  return (
    <Grid container justifyContent="center">
      {[0, 1, 2].map((value) => (
        <Grid key={value} item>
          <Paper style={{height:90, width:50}}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
