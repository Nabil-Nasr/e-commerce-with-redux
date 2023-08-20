const validateSubmit = (formHTMLElement) => {
  const formObject = {};
  for (let input of formHTMLElement) {
    if ((input.id?.startsWith?.("react-select"))
        // for react color text input
        || input.id?.startsWith?.("rc-editable")
        || input.tagName === "BUTTON") continue;

    switch (input.type) {
      case "file":
        // to prevent using multi image input library file input
        if(input.name)
        formObject[input.name] = input.files;
        break;

      case "text":
      case "textarea":
      case "number":
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
