import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import debounce from "../../utils/debounce";


const CustomSelect = ({ isMulti, placeholder, onInputChange, allItemsReducer, name, onSelect, disableCache, ...props }) => {
  const { data, loading, error = "" } = useSelector((state) => state[allItemsReducer]);
  const [cacheInputValue, setCacheInputValue] = useState("");
  const cacheObjectRef = useRef({});
  const cacheData = cacheObjectRef.current[cacheInputValue] || data;

  return (
    <Select
      isMulti={isMulti}
      placeholder={placeholder}
      onInputChange={debounce(inputValue => {
        !disableCache && setCacheInputValue(inputValue);
        onInputChange(prev => {
          if (!disableCache) {
            if (cacheObjectRef.current[inputValue]) {
              return prev;
            }
            // regular expression error happens when the user types a special character
            if (!error || error?.includes("Regular expression")) {
              cacheObjectRef.current[prev] = data;
            }
          }
          return inputValue;
        });
      }, 500)}
      name={name}
      noOptionsMessage={() => !error || error?.includes("Regular expression") ? "لا خيارات" : "حدث خطأ ما"}
      loadingMessage={() => "جاري البحث ..."}
      isLoading={loading}
      onChange={onSelect}
      isRtl

      options={
        cacheData?.map(item => (
          { value: item._id, label: item.name }
        ))
      }

      // i'm not using spread operator in the functions below
      // to gain some performance
      theme={theme => {
        theme.borderRadius = 0;
        theme.colors.primary = "var(--bs-btn-border-color)";
        theme.colors.primary25 = "rgba(var(--bs-btn-focus-shadow-rgb),.75)";
        theme.colors.primary50 = "var(--bs-btn-hover-bg)";
        theme.colors.danger = "var(--bs-btn-hover-color)";
        theme.colors.dangerLight = "rgba(var(--bs-btn-focus-shadow-rgb),.75)";
        theme.colors.neutral20 = "lightgrey";
        return theme;
      }}

      styles={{
        option: (styles, { isFocused, isSelected }) => {
          styles.color =
            isFocused || isSelected
              ? "var(--bs-btn-hover-color)"
              : "var(--bs-btn-color)";
          return styles;
        },
        noOptionsMessage: styles => {
          styles.color = error && !error?.includes("Regular expression") ? "var(--bs-danger)" : styles.color;
          return styles;
        },
        dropdownIndicator: styles => {
          styles.color = "grey";
          return styles;
        }
      }}

      {...props}
    />
  );
};

export default CustomSelect;
