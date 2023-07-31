import Select from "react-select";

const MultiSelect = ({options,noOptionsMessage,placeholder}) => {
  return (
    <Select
      isMulti
      isRtl
      options={options}
      className="btn-outline-dark"

      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: "var(--bs-btn-border-color)",
          primary25: "rgba(var(--bs-btn-focus-shadow-rgb),.75)",
          primary50: "var(--bs-btn-hover-bg)",
          danger: "var(--bs-btn-hover-color)",
          dangerLight: "rgba(var(--bs-btn-focus-shadow-rgb),.75)",
          neutral20:"lightgrey"
        }
      })
      }

      styles={{
        option: (styles, { isFocused }) => ({
          ...styles,
          color: isFocused 
            ? "var(--bs-btn-hover-color)" 
            : "var(--bs-btn-color)"
        }),
        dropdownIndicator:(styles)=>({...styles,color:"grey"}),
        
      }}
      placeholder={placeholder}
      noOptionsMessage={()=>noOptionsMessage??undefined}
    />
  );
};

export default MultiSelect;
