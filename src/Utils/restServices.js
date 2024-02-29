import axios from 'axios';
import { API_RESPONSE_CODES, API_REQ_TYPE } from './Constants';

// const handleSuccessResponse = (res) => {
//   const { SUCCESS } = API_RESPONSE_CODES;
//   if (res.status === SUCCESS) {
//     return res.data;
//   }
//   return res;
// };

const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, HEAD, DELETE'
    }
  };
// const handleSuccessResponse = (res) => console.log("res",res)
const handleSuccessResponse = (res) => {
  const { SUCCESS } = API_RESPONSE_CODES;
  if (res.status === SUCCESS) {
    return res.data;
  }  
  return res;
};



const handleErrorResponse = (err) => {
  const { UNAUTHORISED, FORBIDDEN, NOT_FOUND, BAD_REQUEST, INTERNAL_SERVER_ERROR, PAYLOAD_ERROR } = API_RESPONSE_CODES;
  if (
    [UNAUTHORISED, FORBIDDEN, NOT_FOUND, BAD_REQUEST, INTERNAL_SERVER_ERROR, PAYLOAD_ERROR].includes(
      err?.response?.status
    )
  ) {
    console.log('ERROR', err);
    return err;
  }
};

export const getData = (url) => {
  const headerObj = '';
  return axios
    .get(url)
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponse(err));
};

export const putData = (url, data) => {
    const headerObj = '';
    console.log("putdata", data)
    return axios
      .put(url, data)
      .then((res) => handleSuccessResponse(res))
      .catch((err) => handleErrorResponse(err));
  };


  export const postData = (url, payload) => {
    const headerObj = '';
    console.log("postdata", payload)
    return axios
      .post(url, payload)
      .then((res) => handleSuccessResponse(res))
      .catch((err) => handleErrorResponse(err));
  };


  export const deleteData = (url) => {
    const headerObj = '';
    return axios
      .delete(url)
      .then((res) => handleSuccessResponse(res))
      .catch((err) => handleErrorResponse(err));
  };


 






// export const postData = (url, body, v2 = false) => {
//     const { accessToken, userId } = sessionStorage;
//     if (accessToken && userId) {
//       config.headers.Authorization = `bearer ${accessToken}`;
//       config.headers.userId = userId;
//       return (
//         axios
//           .post(`${(v2 && basePathV2) || basePathV1}${url}`, body, config)
//           .then((res) => handleSuccessResponse(res))
//           // .catch((err) => handleErrorResponse(err), { type: API_REQ_TYPE.POST, url, body, isBaseURL });
//           .catch((err) => handleErrorResponse(err, { type: API_REQ_TYPE.POST, url, body }))
//       );
//     }
//     return '';
//   };
  
//   export const patchData = (url, body, v2 = false) => {
//     const { accessToken, userId } = sessionStorage;
//     if (accessToken && userId) {
//       config.headers.Authorization = `bearer ${accessToken}`;
//       config.headers.userId = userId;
//       return axios
//         .patch(`${(v2 && basePathV2) || basePathV1}${url}`, body, config)
//         .then((res) => handleSuccessResponse(res))
//         .catch((err) => handleErrorResponse(err, { type: API_REQ_TYPE.PATCH, url, body }));
//     }
//     return '';
//   };
  
//   export const putData = (url, body, v2 = false) => {
//     const { accessToken, userId } = sessionStorage;
//     if (accessToken && userId) {
//       config.headers.Authorization = `bearer ${accessToken}`;
//       config.headers.userId = userId;
//       return axios
//         .put(`${(v2 && basePathV2) || basePathV1}${url}`, body, config)
//         .then((res) => handleSuccessResponse(res))
//         .catch((err) => handleErrorResponse(err, { type: API_REQ_TYPE.PUT, url, body }));
//     }
//     return '';
//   };
  
//   export const deleteData = (url, v2 = false) => {
//     const { accessToken, userId } = sessionStorage;
//     if (accessToken && userId) {
//       config.headers.Authorization = `bearer ${accessToken}`;
//       config.headers.userId = userId;
//       return axios
//         .delete(`${(v2 && basePathV2) || basePathV1}${url}`, config)
//         .then((res) => handleSuccessResponse(res))
//         .catch((err) => handleErrorResponse(err, { type: API_REQ_TYPE.DELETE, url }));
//     }
//     return '';
//   };
  
