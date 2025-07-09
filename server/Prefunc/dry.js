import jwt from "jsonwebtoken"

export const success = (res, number, message) => {
  res.status(number).json({
    msg: `${message}`,
  });
};
export const error = (res, number, message) => {
  res.status(number).json({
    msg: `${message}`,
  });
};
export const jwTockenSign =()=>{
   
}