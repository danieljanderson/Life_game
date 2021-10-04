import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';

function PlayerStatsDisplay() {
  return (
    <Box>
      <Paper elevation={16}>
        {/* Title */}
        <Typography variant="h4" component="h4">
          Player Name goes here
        </Typography>
        {/* end of Title */}

        {/* Start of stat display */}
        <Box>
          {/* birthday stat */}
          <Box>
            <Typography variant="body1" component="body1">
              Birthdate: stat goes here
            </Typography>
          </Box>
          {/* end of birthday stat */}

          {/* gender stat */}
          <Box>
            <Typography variant="body1" component="body1">
              Gender: stat goes here
            </Typography>
          </Box>
          {/* end of gender stat */}

          {/* money stat */}
          <Box>
            <Typography variant="body1" component="body1">
              Money: stat goes here
            </Typography>
          </Box>
          {/* end of money stat */}

          {/* Charisma stat */}
          <Box>
            <Typography variant="body1" component="body1">
              Charisma: stat goes here
            </Typography>
          </Box>

          {/* end charisma stat */}

          {/* Feeling stat */}
          <Box>
            <Typography variant="body1" component="body1">
              Feeling : stat goes here
            </Typography>
          </Box>

          {/* end of feeling stat */}

          {/* Intelligence stat */}
          <Box>
            <Typography variant="body1" component="body1">
              Intelligence: stat goes here
            </Typography>
          </Box>
          {/* end of intelligence stat */}

          {/* Hobbies stat */}
          <Box>
            <Typography variant="body1" component="body1">
              Hobbies: stat goes here
            </Typography>
          </Box>

          {/* end of hobbies stat */}

          {/* location stat*/}
          <Box>
            <Typography variant="body1" component="body1">
              Location: stat goes here
            </Typography>
          </Box>

          {/* end location stat */}

          {/* current job stat */}
          <Box>
            <Typography variant="body1" component="body1">
              Current Job: stat goes here
            </Typography>
          </Box>

          {/* end current job stat */}

          {/* employment history stat */}
          <Box>
            <Typography variant="body1" component="body1">
              Employment History: stat goes here
            </Typography>
          </Box>

          {/* end employment history stat */}

          {/* owns a car stat*/}
          <Box>
            <Typography variant="body1" component="body1">
              Car: stat goes here
            </Typography>
          </Box>

          {/* end a car stat */}
        </Box>
        {/* end of stat display*/}
      </Paper>
    </Box>
  );
}
export default PlayerStatsDisplay;
