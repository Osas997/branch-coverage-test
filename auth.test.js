const { login } = require("./auth");

it("should admin login successfully", () => {
  expect(login("admin", "admin")).toBe("Login Success");
});

it("should admin login failed with invalid password", () => {
  expect(login("admin", "admin123")).toBe("Invalid Credentials");
});

it("should invalid credentials", () => {
  expect(login("user", "user123")).toBe("Invalid Credentials");
});
