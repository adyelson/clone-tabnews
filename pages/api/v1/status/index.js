function status(request, response) {
  response.status(200).json({ msg: "Excelente!" });
}

export default status;
