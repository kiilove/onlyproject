import { useState, React } from "react";

import { Typography, TextField, Grid, Button } from "@mui/material";
import { muistyled } from "@mui/styles";
import { Box } from "@mui/system";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import SaveIcon from "@mui/icons-material/Save";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";

import styled from "styled-components";

import { useForm, Controller } from "react-hook-form";

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
  const { register, handleSubmit, reset, setValue, control } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "column", p: 3 }}>
        <Typography textAlign="left" variant="h5" mb={5} ml={3}>
          고객사 등록
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBox>
          <InputItem>
            <Typography variant="body2" width={150} mr={3}>
              회사명
            </Typography>
            <TextField
              size="small"
              sx={{ width: "50%" }}
              {...register("compName", { required: true, maxLength: 50 })}
            ></TextField>
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
            <TextField
              size="small"
              sx={{ width: "50%" }}
              {...register("clientName", { required: true, maxLength: 50 })}
            ></TextField>
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
              {...register("telNumber", { required: true, maxLength: 20 })}
            ></TextField>
            <TextField
              size="small"
              sx={{ width: "20%", marginRight: 1 }}
              label="모바일"
              {...register("mobileNumber", { required: true, maxLength: 20 })}
            ></TextField>
            <TextField
              size="small"
              sx={{ width: "20%", marginRight: 1 }}
              label="이메일"
              {...register("clientEmail", { required: true, maxLength: 50 })}
            ></TextField>
          </InputItem>
          <InputItem>
            <Typography variant="body2" width={150} mr={3}>
              거래구분
            </Typography>

            <Controller
              render={({ field }) => (
                <RadioGroup row aria-label="gender" {...field}>
                  <FormControlLabel
                    value="buyer"
                    control={<Radio />}
                    label="매출처"
                  />
                  <FormControlLabel
                    value="seller"
                    control={<Radio />}
                    label="매입처"
                  />
                  <FormControlLabel
                    value="both"
                    control={<Radio />}
                    label="모두"
                  />
                </RadioGroup>
              )}
              name="clientType"
              control={control}
            />
          </InputItem>
          <InputItem style={{ justifyContent: "center", padding: "0px" }}>
            <Button
              variant="contained"
              sx={{ width: 150, height: 50, fontSize: 15, p: 2, mr: 5 }}
              startIcon={<AddCircleIcon />}
              type={"submit"}
            >
              추가후 계속
            </Button>
            <Button
              variant="outlined"
              sx={{ width: 150, height: 50, fontSize: 15, p: 2, mr: 5 }}
              startIcon={<SaveIcon />}
            >
              저장후 완료
            </Button>
            <Button
              variant="outlined"
              sx={{ width: 150, height: 50, fontSize: 15, p: 2, mr: 5 }}
              startIcon={<SettingsBackupRestoreIcon />}
              color="warning"
              onClick={() =>
                reset({
                  compName: "",
                  clientName: "",
                  telNumber: "",
                  mobileNumber: "",
                  clientEmail: "",
                  clientType: {
                    buyer: "selected",
                  },
                })
              }
            >
              초기화
            </Button>
          </InputItem>
        </InputBox>
      </form>
    </Box>
  );
};

export default ClientInput;
