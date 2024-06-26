
import axios from "axios";
// import myconnection from "./dbconnection";
// import axios, { Axios } from "axios";
// import connection from './dbconnection';
// export async function getAllValoume() {
//     try {
//         const [results, fields] = await myconnection.query(
//             'SELECT * FROM `volume`'
//         );
//         // console.log(JSON.stringify(results)); // results contains rows returned by server
//         return results;
//         console.log(fields); // fields contains extra meta data about results, if available
//     } catch (err) {
//         console.log(err);
//     }
// }

// export async function saveVolume(title) {
//     try {
//         const [results, fields] = await myconnection.query(
//             "INSERT INTO `volume`(`title`) VALUES ('" + title + "')"
//         );
//         // console.log(JSON.stringify(results)); // results contains rows returned by servers
//         return true;
//         console.log(fields); // fields contains extra meta data about results, if available
//     } catch (err) {
//         console.log(err);
//     }
// }


export const BASE_API = "http://localhost:3000/api";
// export const BASE_API = "https://research-paper-xi.vercel.app/api";

const baseApi = axios.create({
    baseURL: BASE_API
    // withCredentials: true, // Uncomment if needed
});
// axios.defaults.headers.common['Cache-Control'] = 'no-store' // for all requests
// Optional interceptors
baseApi.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

baseApi.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default baseApi;

