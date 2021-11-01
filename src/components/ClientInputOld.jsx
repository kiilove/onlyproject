import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const useStyle = makeStyles({
  inputItem: {
    marginBottom: "5px",
  },
});

const ClientInput = () => {
  const classes = useStyle();
  return (
    <Grid
      className="container"
      item
      container
      direction="column"
      xs={12}
      sx={{ backgroundColor: "white", width: "100%" }}
    >
      <Typography variant="h6" mb={5}>
        고객사관리
      </Typography>
      <Box sx={{ display: "flex", mb: 3, alignItems: "center" }}>
        <Typography sx={{ mr: 10, width: 120 }}>회사명</Typography>
        <TextField size="small" sx={{ width: 600 }}></TextField>
        <Typography sx={{ ml: 3 }}>"(주)"치환 안함</Typography>
      </Box>
      <Box sx={{ display: "flex", mb: 3, alignItems: "center" }}>
        <Typography sx={{ mr: 10, width: 120 }}>사업자등록번호</Typography>
        <TextField size="small" sx={{ width: 600 }}></TextField>
        <Typography sx={{ ml: 3 }}>"-"는 빼고 입력</Typography>
      </Box>
      <Box sx={{ display: "flex", mb: 3, alignItems: "center" }}>
        <Typography sx={{ mr: 10, width: 120 }}>주소</Typography>
        <TextField size="small" sx={{ width: 600 }}></TextField>
        <Typography sx={{ ml: 3 }}>정규식 아직 적용안함</Typography>
      </Box>
      <Box sx={{ display: "flex", mb: 3, alignItems: "center" }}>
        <Typography sx={{ mr: 10, width: 120 }}>거래구분</Typography>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel
              value="sellClient"
              control={<Radio />}
              label="매출"
            />

            <FormControlLabel
              value="buyClient"
              control={<Radio />}
              label="매입"
            />
            <FormControlLabel
              value="bothClient"
              control={<Radio />}
              label="둘다"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Grid>
  );
};

export default ClientInput;
