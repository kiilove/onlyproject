import { Typography, TextField, Grid } from "@mui/material";
import { muistyled } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import styled from "styled-components";

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ClientInput = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
        <Typography textAlign="left" variant="h6" mb={5}>
          고객사 등록
        </Typography>
      </Box>
      <InputBox>
        <InputItem>
          <Typography variant="body2" width={150} mr={3}>
            회사명
          </Typography>
          <TextField size="small" sx={{ width: "50%" }}></TextField>
          <Typography
            variant="body2"
            width={150}
            ml={1}
            display={{ xs: "none", sm: "none", md: "block" }}
          >
            (주)로 바꾸지마.
          </Typography>
        </InputItem>
        <InputItem>
          <Typography variant="body2" width={150} mr={3}>
            담당자
          </Typography>
          <TextField size="small" sx={{ width: "50%" }}></TextField>
          <Typography
            variant="body2"
            width={150}
            ml={1}
            display={{ xs: "none", sm: "none", md: "block" }}
          >
            직급 포함하지마.
          </Typography>
        </InputItem>
        <InputItem>
          <Typography variant="body2" width={150} mr={3}>
            연락처
          </Typography>

          <TextField
            size="small"
            sx={{ width: "20%", marginRight: 1 }}
            label="대표번호"
          ></TextField>
          <TextField
            size="small"
            sx={{ width: "20%", marginRight: 1 }}
            label="모바일"
          ></TextField>
          <TextField
            size="small"
            sx={{ width: "20%", marginRight: 1 }}
            label="이메일"
          ></TextField>
        </InputItem>
        <InputItem>
          <Typography variant="body2" width={150} mr={3}>
            거래구분
          </Typography>
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
        </InputItem>
      </InputBox>
    </Box>
  );
};

export default ClientInput;
