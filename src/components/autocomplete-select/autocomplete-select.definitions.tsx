import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { SxProps } from "@mui/material";

export const GRAY_COLOR = "#94a3b8";

export const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
export const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const rootSx: SxProps = {
  mt: "10px",
  width: 500,
};

export const paperSx: SxProps = {
  borderRadius: "16px",

  border: `1px solid ${GRAY_COLOR}`,
  boxShadow: "none",
  marginTop: "4px",
};

export const dividerSx: SxProps = {
  borderColor: GRAY_COLOR,
};
