function selectProduct(name) {

  const select =
    document.getElementById("product");

  const options =
    [...select.options];

  options.forEach(option => {

    if (
      option.textContent
        .startsWith(name)
    ) {

      select.value =
        option.value;

    }

  });

  document
    .getElementById("order")
    .scrollIntoView({
      behavior: "smooth"
    });
}


document
  .getElementById("orderForm")
  .addEventListener(
    "submit",
    function(event) {

      event.preventDefault();

      const product =
        document
          .getElementById("product")
          .value;

      const idea =
        document
          .getElementById("idea")
          .value
          .trim();

      const contact =
        document
          .getElementById("contact")
          .value
          .trim();

      const message =
        document
          .getElementById("message");


      if (
        !product ||
        !idea ||
        !contact
      ) {

        message.textContent =
          "Please fill out every box.";

        return;

      }


      message.textContent =
        "Order request ready. Have your parent or guardian review it before sending payment or personal information.";

      this.reset();

    }
  );
