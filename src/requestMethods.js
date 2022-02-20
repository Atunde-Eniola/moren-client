import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTA4YTIxOWM0MmU0MDgzOTNjODBmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjM2NzAyNiwiZXhwIjoxNjQyNjI2MjI2fQ.FeR-WThV0ZMCkhw_uBkxkCnKlNPD8_f9hpJijmiWBzM"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer${TOKEN}`}
});
