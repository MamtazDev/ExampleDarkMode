/* import { Autocomplete } from "@mui/material";
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
  ]; */

import { Autocomplete } from "@mui/material";
import React from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";

const AutoComplete = () => {
  const defaultValues = [
    versionData[0], // London
    versionData[1], // Dubai
    versionData[2], // Dubai
  ];
  const [value, setValue] = React.useState(defaultValues);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        defaultValue={defaultValues}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={versionData}
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
              style: {
                height: "44px",
                transition: "border-color 0.3s", // Add transition
                "&:focus": {
                  borderColor: "#e2e8f0", // Change border color on focus
                  // You can also change other styles as needed
                },
              },
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
                padding: "2px 4px",
                width: "88px", // Set the width of the tags
                height: "24px",
                marginTop: "6px",
                // Set the height of the tags
              }}
              deleteIcon={
                <svg
                  className="MuiAutocomplete-tagIcon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="11" fill="your-desired-color" />
                  <path
                    d="M17.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.7A1 1 0 105.7 7.12L10.59 12 5.7 16.88a1 1 0 101.42 1.42L12 13.41l4.88 4.88a1 1 0 001.42-1.42L13.41 12l4.88-4.88a1 1 0 000-1.41z"
                    fill="black"
                  />
                </svg>
              }
            />
          ))
        }
      />
    </div>
  );
};

export default AutoComplete;

const versionData = [
  { title: "London" },
  { title: "Dubai" },
  { title: "Frankfurt" },
];
