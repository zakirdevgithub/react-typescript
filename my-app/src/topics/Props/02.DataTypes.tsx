import React from "react";
import { Container, Paper, Typography, Box } from "@material-ui/core";

type friends = {
  name: string;
  age: number;
};

type Props = {
  name: string;
  age: number;
  languages: string[];
  add: () => void;
  country: (v:string) => string;
  student: {
    name: string;
    age: number;
  };
  friend: friends;
  isActive: boolean;
};

const DataTypes = ({
  name,
  age,
  languages,
  add,
  country,
  student,
  friend,
  isActive
}:Props) => {
  return (
    <Container >
        <Box p={4} >
        <Paper >
        <Typography variant="h4" align="center">{name}</Typography>
      </Paper>
        </Box>

      <Paper component={Box} >
        <Typography variant="h4">{age}</Typography>
      </Paper>

      <Paper component={Box} >
        {languages.map((data,index)=>(
            <Typography variant="h4">{index}.{data}</Typography>
        ))}
      </Paper>

      
      <Paper component={Box} >
        <Typography variant="h4">{country("Bangladesh")}</Typography>
      </Paper>

      <Paper component={Box} >
        <Typography variant="h4">{student.name}</Typography>
      </Paper>

      <Paper component={Box} >
        <Typography variant="h4">{friend.name}</Typography>
      </Paper>

      <Paper component={Box} >
        {isActive && <Typography variant="h4">{friend.age}</Typography>}
      </Paper>
    </Container>
  );
};

export default DataTypes;
