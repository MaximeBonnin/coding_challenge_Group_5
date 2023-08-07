

// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const fetchTrades = async (bookID, isin) => {
  const tokenString = localStorage.getItem('token');
  const token = JSON.parse(tokenString);
  console.log(bookID);

  const path = "/" + isin;
  const url = 'http://localhost:8080/api/v1/trades' + path;
  console.log(url);

  var data = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));

  console.log(data);
  if (bookID != null && bookID.length > 0) {
    var return_data = [];
    data.forEach(element => {
      console.log(element, bookID.includes(element.book_id));
      if (bookID.includes(element.book_id)) {
        return_data.push(element);
      }
    })
    console.log(return_data);
    return return_data;
  }

  return data;
};
