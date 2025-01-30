const jwt = require("jsonwebtoken");
const jwt_password = "thisisjsonwebtokenpassword";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwrodSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwrodSchema.safeParse(password);

  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }
  const signature = jwt.sign({ username }, jwt_password);
  return signature;
}

function verifyJwt(token) {
  try {
    const verifyed = jwt.verify(token, jwt_password);
    const userDetails = verifyed.username;
    return userDetails;
  } catch (e) {
    return false;
  }
}

function decodedJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

const ans = signJwt("itsnotemailkunal.com", "1234567");
const decodedans = decodedJwt(ans);
const verifyedans = verifyJwt(ans);

console.log(ans);
console.log(decodedans);
console.log(verifyedans);
