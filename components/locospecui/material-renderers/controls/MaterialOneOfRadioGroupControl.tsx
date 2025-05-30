// @ts-nocheck
/*
  The MIT License

  Copyright (c) 2018-2020 EclipseSource Munich
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
import {
  and,
  ControlProps,
  isOneOfEnumControl,
  optionIs,
  OwnPropsOfEnum,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import { withJsonFormsOneOfEnumProps } from "@jsonforms/react";
import { MaterialRadioGroup } from "./MaterialRadioGroup";

export const MaterialOneOfRadioGroupControl = (
  props: ControlProps & OwnPropsOfEnum
) => {
  return <MaterialRadioGroup {...props} />;
};

export const materialOneOfRadioGroupControlTester: RankedTester = rankWith(
  20,
  and(isOneOfEnumControl, optionIs("format", "radio"))
);

export default withJsonFormsOneOfEnumProps(MaterialOneOfRadioGroupControl);
