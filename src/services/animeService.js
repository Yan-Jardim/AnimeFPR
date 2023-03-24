const getAnimes = () => {
    return axios
    .get(
      baseURL
    )
    .then((response) => {
      setResponse(response?.data?.data);
    })
    .catch(function (error) {
      console.log(error.toJSON());
    });
}s