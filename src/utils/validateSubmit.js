const validateSubmit = (formHTMLElement) => {
  const formObject = {};
  for (let input of formHTMLElement) {
    if ((typeof input.id === "string" && input.id.startsWith("react-select")) 
        || input.tagName === "BUTTON") continue;

    switch (input.type) {
      case "file":
        formObject[input.name] = input.files;
        break;

      case "text":
        formObject[input.name] = input.value;
        break;

      // this type hidden is used in the custom select component
      // because it uses hidden inputs instead of options
      case "hidden":
        if (!formObject[input.name]) {
          formObject[input.name] = [];
        }
        if (input.value) {
          formObject[input.name].push(input.value);
        }
        break;

      case "radio":
        if (input.checked) {
          formObject[input.name] = input.value;
        } else if (!formObject[input.name]) {
          formObject[input.name] = "";
        }
        break;

      case "checkbox":
        if (!formObject[input.name]) {
          formObject[input.name] = [];
        }
        if (input.checked) {
          formObject[input.name].push(input.value);
        }
        break;

      default:
        continue;
    }
  }

  for (let key in formObject) {
    // because formObject[key] can be string or array we use length property
    if (!formObject[key].length) {
      return null;
    }
  }

  return formObject;
};

export default validateSubmit;
