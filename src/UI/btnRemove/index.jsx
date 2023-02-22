/** @format */

import LoadingButton from "@mui/lab/LoadingButton";

export default function BtnRemove({ onClick, loading = false }) {
  return (
    <LoadingButton
      sx={{ width: "100%" }}
      variant="contained"
      component="label"
      color="success"
      onClick={onClick}
      loading={loading}
    >
      Remove
    </LoadingButton>
  );
}
