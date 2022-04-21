SendDetails: function (data) {
  send(
      first_name +
      last_name +
      city +
      crop_named +
      crop_details
  )
    .to((mandi-server(url = "https//www.msamb.com/ApmcDetail/crop-registration")) => {
      if (!response.ok) {
        alert("Registered Succesfully");
        throw new Error("Some Error Detected");
      }

    })

}
