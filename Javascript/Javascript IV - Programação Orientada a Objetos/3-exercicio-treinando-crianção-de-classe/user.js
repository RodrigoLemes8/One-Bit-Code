class user {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login realizado com sucesso.");
    } else {
      console.log("Falha ao fazer login! Email ou senha incorretos.");
    }
  }
}

const newUser = new user(
  "Rodrigo Lemes",
  "rodrigo.lemes8@icloud.com",
  "22102210"
);

newUser.login("rodrigo.lemes8@icloud.com", "22102210");
newUser.login("rodrigo.lemes8@icloud.com", "22112211");
