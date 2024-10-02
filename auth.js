const login = (username, password) => {
  if (username === "admin") {
    if (password === "admin") {
      return "Login Success";
    }

    return "Invalid Credentials";
  }
  return "Invalid Credentials";
};

module.exports = { login };
