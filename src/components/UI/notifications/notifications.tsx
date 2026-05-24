import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export const SuccessAlert = ({content}: {content: string}) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">{content}</Alert>
    </Stack>
  );
};

export const InfoAlert = ({content}: {content: string}) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="info">{content}</Alert>
    </Stack>
  );
};

export const WarningAlert = ({content}: {content: string}) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="warning">{content}</Alert>
    </Stack>
  );
};

export const ErrorAlert = ({content}: {content: string}) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">{content}</Alert>
    </Stack>
  );
};