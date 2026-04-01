import jwt from "jsonwebtoken"

export const success = (res, number, message) => {
  res.status(number).json({
    msg: `${message}`,
    success: true,
  });
};
export const error = (res, number, message , err) => {
  res.status(number).json({
    msg: `${message}`,
    succses: false,
    err : err || "An error occurred",
  });
};
export const jwTockenSign =()=>{
   
}