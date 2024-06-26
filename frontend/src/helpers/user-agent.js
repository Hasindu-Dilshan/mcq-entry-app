import { store } from "../store";

const baseUrl = process.env.REACT_APP_API_URL;

export const getAllSyllabi = async () => {
  const subjectYearContainer = await fetchWrapper.get(
    `${baseUrl}/api/v1/mcq/subjectyears`
  );

  return subjectYearContainer;
};

export const getTopics = async (subjectId, syllabusUpdatedYear) => {
  const topics = await fetchWrapper.get(
    `${baseUrl}/api/v1/mcq/topics?subjectId=${subjectId}&syllabusUpdatedYear=${syllabusUpdatedYear}`
  );

  return topics;
};

export const submitQuestion = async (question) => {
  const response = await fetchWrapper.post(`${baseUrl}/submit`, question);

  return response;
};

export const login = async (email, password) => {
  const response = await fetchWrapper.post(`${baseUrl}/api/v1/auth/login`, {
    email,
    password,
  });

  return response; // response: jwt
};

export const getProfile = async (token) => {
  const topics = await fetchWrapper.get(`${baseUrl}/profile`, { token });

  return topics;
};

const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method) {
  return (url, body) => {
    const requestOptions = {
      method,
      headers: authHeader(url),
    };
    if (body) {
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(body);
    }
    return fetch(url, requestOptions).then(handleResponse);
  };
}

// helper functions

function authHeader(url) {
  // return auth header with jwt if user is logged in and request is to the api url
  const token = authToken();
  const isLoggedIn = !!token;
  const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}

function authToken() {
  return store.getState().auth?.token;
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status) && authToken()) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        // const logout = () => store.dispatch(authActions.logout());
        // logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
