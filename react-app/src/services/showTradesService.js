

// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const fetchTrades = async (bookID, isin) => {
  const tokenString = localStorage.getItem('token');
  const token = JSON.parse(tokenString);

  const path = "/" + isin;
  const url = 'http://localhost:8080/api/v1/trades' + path;

  var data = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));

  if (bookID != null && bookID.length > 0) {
    var return_data = [];
    data.forEach(element => {
      if (bookID.includes(element.book_id)) {
        return_data.push(element);
      }
    })
    return return_data;
  }

  return data;
};
