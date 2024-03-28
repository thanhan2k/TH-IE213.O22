function Input({ lable, type, disabled, value, onChange }) {
  return (
    <div className="flex justify-between px-4 py-2">
      <lable>{lable}</lable>
      <input
        className="border-black border-[1px] outline-none disabled:bg-amber-100"
        type={type}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
