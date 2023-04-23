// prints the appropriate error message
const handleServerError = function (jqXHR, textStatus, errorThrown) {
  const errorMessage = `${textStatus}: ${jqXHR.status} ${errorThrown}`;
  alert(errorMessage);
}
