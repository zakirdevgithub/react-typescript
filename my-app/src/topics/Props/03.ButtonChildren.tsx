import React from "react";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    paddingTop: theme.spacing(3),
  },
}));

type Props = {
  clickEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonChildren: React.FC<Props> = ({ clickEvent, children }) => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <Button variant="outlined" color="primary" onClick={clickEvent}>
          {children}
        </Button>

      </Container>
    </>
  );
};

export default ButtonChildren;
