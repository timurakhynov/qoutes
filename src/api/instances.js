import axios from "axios"
import { apiUrl } from "./apiUrl"

export const mainInstance = axios.create({
    baseURL: apiUrl
})