// // utils/auth.ts

// import { sign, verify, decode, JwtPayload } from 'jsonwebtoken';
// import Cookies from 'js-cookie';
// import { parse, serialize } from 'cookie';

// // Function to decode the JWT and get its payload
// export function decodeJwt(jwt: string): object | null {
//   try {
//     const payload = decode(jwt);
//     if (typeof payload === 'string') {
//       return null;
//     }
//     return payload as JwtPayload;
//   } catch (error) {
//     return null;
//   }
// }

// // Function to set a JWT in a cookie with the same expiration time as the existing token
// export function setJwtCookieWithSameExpiry(newJwt: string, existingJwt: string) {
//   const payload: any = decodeJwt(existingJwt);
//   const newpayload: any = decodeJwt(newJwt)

//   if (payload && payload.exp) {
//     Cookies.set('jwt', 'Set-Cookie', {
//         sameSite: 'lax', // Adjust this as needed for your use case
//         maxAge: newJwt ? newpayload.exp - Math.floor(Date.now() / 1000) : payload.exp - Math.floor(Date.now() / 1000), // Set maxAge based on the existing JWT's expiration time
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production', // Only in production
//     });
//   }
// }


// // Function to get the JWT from cookies
// export function getJwtFromCookie(): string | null {
//     // Retrieve the JWT token from cookies using js-cookie
//     const jwt = Cookies.get('jwt');
  
//     return jwt || null;
//   }
