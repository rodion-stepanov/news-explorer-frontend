export const BASE_URL = 'https://www.api.news.stepanov.students.nomoreparties.co';

export const register = ({ email, password, name }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
    .then((response => response.json()))
    .then((data) => {
      if (data) {
        localStorage.setItem('jwt', data.token);
        return data;
      } else {
        return;
      }
    })
    .catch(err => console.log(err))
};

export const getUser = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${jwt}`
    },
  })
    .then((res) => {
      return res.json()
    })
    .catch(err => console.log(err))
}

export const getSavedArticles = (jwt) => {
  return fetch(`${BASE_URL}/articles`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    }
  })
    .then((res) => res.json())
    .then(data => data);
}

export const saveArticle = ({ keyword, title, text, date, source, link, image }) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({ keyword, title, text, date, source, link, image })
  })
    .then((res) => res.json())
    .then(data => data);
}

export const deleteArticle = (articleId) => {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
    .then((res) => res.json())
    .then(data => data);
}