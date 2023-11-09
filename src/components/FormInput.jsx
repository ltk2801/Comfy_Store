const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue || null}
        className="input input-bordered capitalize"
      />
    </div>
  );
};

export default FormInput;
