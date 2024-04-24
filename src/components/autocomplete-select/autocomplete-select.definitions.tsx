import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { SxProps } from "@mui/material";
import { theme } from "../../theme/theme";

export const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
export const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const rootSx: SxProps = {
  mt: "10px",
  width: 500,
};

export const paperSx: SxProps = {
  borderRadius: "16px",

  border: `1px solid ${theme.palette.secondary.dark}`,
  boxShadow: "none",
  marginTop: "4px",
};

export const dividerSx: SxProps = {
  borderColor: theme.palette.secondary.dark,
};

export const chipContainerSx: SxProps = {
  backgroundColor: theme.palette.secondary.dark,
  width: "20px",
  height: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
};
