

// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const fetchTrades = (bookID, isin) => {
  const tokenString = localStorage.getItem('token');
  const token = JSON.parse(tokenString);

  const path = "/" + bookID + "/" + isin;
  const url = 'http://localhost:8080/api/v1/trades' + path;
  console.log(url);

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
