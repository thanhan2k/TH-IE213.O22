function Input({lable, type, disabled}) {
  return (
    <div className="flex justify-around">
      <lable>{lable}</lable>
      <input type={type} disabled={disabled}/>
    </div>
  );
}

export default Input;
