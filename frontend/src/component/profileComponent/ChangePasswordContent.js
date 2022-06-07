import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@mui/material";
import { Marginer } from "../loginComponent/CommonStyle";
// import { Marginer } from "../loginComponent/CommonStyle";
function ChangePasswordContent() {
  const [btnOldPwd, setBtnOldPwd] = useState(true);
  const [btnNewPwd, setBtnNewPwd] = useState(true);
  const [btnCNewPwd, setBtnCNewPwd] = useState(true);
  const handleOldPwd = () => setBtnOldPwd(!btnOldPwd);
  const handleNewPwd = () => setBtnNewPwd(!btnNewPwd);
  const handleCNewPwd = () => setBtnCNewPwd(!btnCNewPwd);

  const ruleItem = (text) => (
    <Box sx={{ borderBottom: 0.5, marginBottom: "4vh" }}>
      <Grid container>
        <Grid item xs={2}>
          <ClearIcon />
          {/* <CheckIcon /> */}
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1" gutterBottom align="left">
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            flexGrow: 1,
            border: "1px solid black",
            width: "55vw",
            height: "80vh",
            margin: "5vw",
            zIndex: "-1",
          }}
        >
          <Grid item xs={12}>
            <Box sx={{ borderBottom: 0.1, marginBottom: "4vh" }}>
              <Marginer direction="vertical" margin="4vh" />
              <Typography
                variant="h6"
                gutterBottom
                align="left"
                sx={{
                  paddingLeft: "30px",
                }}
              >
                Change Password
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            sx={{
              paddingLeft: "50px",
            }}
          >
            <Grid item xs={6}>
              <Marginer direction="vertical" margin="6vh" />
              <Grid item xs={7}>
                <TextField
                  fullWidth
                  label="Old Password"
                  variant="standard"
                  type={btnOldPwd ? "password" : "text"}
                  InputProps={{
                    endAdornment: (
                      <IconButton aria-label="edit" onClick={handleOldPwd}>
                        {btnOldPwd && <VisibilityIcon />}
                        {!btnOldPwd && <VisibilityOffIcon />}
                      </IconButton>
                    ),
                  }}
                />
              </Grid>
              <Marginer direction="vertical" margin="4vh" />

              <Grid item xs={7}>
                <TextField
                  fullWidth
                  label="New Password"
                  variant="standard"
                  type={btnNewPwd ? "password" : "text"}
                  InputProps={{
                    endAdornment: (
                      <IconButton aria-label="edit" onClick={handleNewPwd}>
                        {btnNewPwd && <VisibilityIcon />}
                        {!btnNewPwd && <VisibilityOffIcon />}
                      </IconButton>
                    ),
                  }}
                />
              </Grid>
              <Marginer direction="vertical" margin="4vh" />

              <Grid item xs={7}>
                <TextField
                  fullWidth
                  id="standard"
                  label="Confirm Password"
                  variant="standard"
                  type={btnCNewPwd ? "password" : "text"}
                  InputProps={{
                    endAdornment: (
                      <IconButton aria-label="edit" onClick={handleCNewPwd}>
                        {btnCNewPwd && <VisibilityIcon />}
                        {!btnCNewPwd && <VisibilityOffIcon />}
                      </IconButton>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  align="left"
                >
                  New password Rule:
                </Typography>
              </Grid>
              <Marginer direction="vertical" margin="4vh" />

              <Grid item xs={10}>
                {ruleItem("At least 8 characters")}
              </Grid>
              <Grid item xs={10}>
                {ruleItem("At least 1 lower letter (a-z)")}
              </Grid>
              <Grid item xs={10}>
                {ruleItem("At least 1 uppercase letter (A-Z)")}
              </Grid>
              <Grid item xs={10}>
                {ruleItem("At least 1 number (0-9)")}
              </Grid>
              <Grid item xs={10}>
                {ruleItem("At least 1 special characters")}
              </Grid>
              <Grid item xs={10} sx={{ marginTop: "10vh", marginLeft: "10vw" }}>
                <Button variant="contained">Save</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default ChangePasswordContent;