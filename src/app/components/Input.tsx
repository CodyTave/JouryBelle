import React from "react";

export default function Input({
  name,
  onChange,
  ph,
}: {
  name: string;
  ph: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <input
        onChange={onChange}
        name={name}
        placeholder={ph}
        className="w-full bg-dark-0 border-b border-light-0 text-light-0 placeholder:text-light-0 text-4xl outline-none py-3"
      />
    </div>
  );
}
