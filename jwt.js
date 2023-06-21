const jwt = require("jsonwebtoken");

const payloadData = {
    myPayloadData : 1234
}

const token = jwt.sign(payloadData, "mysecretKey") // jwt 생성, (넣을 데이터, "비밀키")
console.log(token);

const decodedValue = jwt.decode(token)
console.log("복호화한 token 입니다.", decodedValue);

// jwt 생성했을 때, 사용한 비밀키가 일치하는지 검증
const decodedValueByVerify = jwt.verify(token,"mysecretKey");
console.log("decodedValueByVerify : ", decodedValueByVerify);

// jwt 생성했을 때, 사용한 비밀키가 일치하는지 검증 => 에러 발생
const decodedValueByVerifyToError = jwt.verify(token,"wrongKey");
console.log("decodedValueByVerify : ", decodedValueByVerifyToError);
//JsonWebTokenError: invalid signature 에러 발생