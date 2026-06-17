export const login = async (email, password) => {
  return fetch("http://10.227.24.71:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password
    }),
  }).then(res => res.json());
};

export const signup = async (fullName, email, password) => {
  return fetch("http://10.227.24.71:5000/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: fullName,
      email,
      password
    }),
  }).then(res => res.json());
};