import { useSelector } from "react-redux";
import Select from "react-select";


const CustomSelect = ({ isMulti, placeholder, onInputChange, allItemsReducer, name, ...props }) => {
  const { data, loading } = useSelector((state) => state[allItemsReducer]);

  return (
    <Select
      isMulti={isMulti}
      placeholder={placeholder}
      onInputChange={onInputChange}
      name={name}
      noOptionsMessage={() => "لا خيارات"}
      loadingMessage={() => "جاري البحث ..."}
      isLoading={loading}
      isRtl
      inputId="react-select-text-input"
      
      options={
        data?.map(item => (
          { value: item._id, label: item.name }
        ))
      }

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
          neutral20: "lightgrey"
        }
      })
      }

      styles={{
        option: (styles, { isFocused, isSelected }) => ({
          ...styles,
          color: isFocused || isSelected
            ? "var(--bs-btn-hover-color)"
            : "var(--bs-btn-color)"
        }),
        dropdownIndicator: (styles) => ({ ...styles, color: "grey" }),
      }}

      {...props}
    />
  );
};

export default CustomSelect;
