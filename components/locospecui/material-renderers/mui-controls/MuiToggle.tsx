// @ts-nocheck
/*
  The MIT License

  Copyright (c) 2017-2021 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
import { CellProps, WithClassname } from "@jsonforms/core";
import { InputProps, Switch } from "@mui/material";
import merge from "lodash/merge";
import React from "react";

interface MuiToggleInputProps {
  inputProps?: InputProps["inputProps"];
}

export const MuiToggle = React.memo(function MuiToggle(
  props: CellProps & WithClassname & MuiToggleInputProps
) {
  const {
    data,
    className,
    id,
    enabled,
    uischema,
    path,
    handleChange,
    config,
    inputProps,
  } = props;
  const appliedUiSchemaOptions = merge({}, config, uischema.options);
  const inputPropsMerged = merge({}, inputProps, {
    autoFocus: !!appliedUiSchemaOptions.focus,
  });
  const checked = !!data;

  return (
    <Switch
      checked={checked}
      onChange={(_ev, isChecked) => handleChange(path, isChecked)}
      className={className}
      id={id}
      disabled={!enabled}
      inputProps={inputPropsMerged}
    />
  );
});
