const clearFormFields = (setFormData) => {
  setFormData(() => {
    return {
      firstName: "",
      lastName: "",
      yourEmail: "",
      phone: "",
      companyName: "",
      _wpcf7_unit_tag: "wpcf7-f905-830",
    };
  });
};

export default clearFormFields;
