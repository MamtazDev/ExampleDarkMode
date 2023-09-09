import { Autocomplete } from "@mui/material";
import React from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";

const AutoComplete = () => {
  const defaultValues = [
    top100Films[0], // London
    top100Films[1], // Dubai
    top100Films[2], // Dubai
  ];

  const [value, setValue] = React.useState(defaultValues);

  return (
    <div>
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        defaultValue={defaultValues}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={top100Films}
        getOptionLabel={(option) => option.title}
        disableCloseOnSelect={true}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{ shrink: false }}
            InputProps={{
              ...params.InputProps,
              endAdornment: null,
              style: { height: "44px" },
            }}
          />
        )}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              label={option.title}
              {...getTagProps({ index })}
              style={{
                borderRadius: "4px",
                background: "#E2E8F0",
                marginRight: "4px",
                marginBottom: "4px",
                padding: "2px 4px", // Reduce padding here
              }}
            />
          ))
        }
      />
    </div>
  );
};

export default AutoComplete;



const top100Films = [
    { title: "London", year: 1994 },
    { title: "Dubai", year: 1972 },
    { title: "Frankfurt", year: 1974 },
  ];