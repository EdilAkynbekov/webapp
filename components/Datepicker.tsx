import * as React from "react";
import dayjs from "dayjs";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function ResponsiveDatePickers() {
  return <DatePicker defaultValue={dayjs("2022-04-17")} />;
}
