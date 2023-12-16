"use client";

import { Label, TextInput } from "flowbite-react";

export default function SpaceRequired() {
  return (
    <div className="max-w-md my-2">
      <div className="mb-2 block">
        <Label
          htmlFor="space"
          className="text-gray-700"
          value="Required Space Sq. Ft."
        />
      </div>
      <TextInput
        id="space"
        type="number"
        placeholder="Space Required in Sq. Foot"
        required
        helperText={<>Please enter Space Required in Square Foot.</>}
      />
    </div>
  );
}
