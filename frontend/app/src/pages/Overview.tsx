import { type FC } from 'react';
// import styled from '@emotion/styled';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';

// const OverviewStyle = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 10vh;
//   font-size: 2rem;
// `;

// const RadioStyle = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 30vh;
// `;

const Overview: FC = () => {
  return (
    <>
      {/* <OverviewStyle>Overview!</OverviewStyle> */}
      <div className="overview">Overview!</div>

      {/* <div className="radio-group">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl> 

      </div> */}
    </>
  );
};

export default Overview;
