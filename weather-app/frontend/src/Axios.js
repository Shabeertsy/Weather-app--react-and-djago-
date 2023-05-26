import axios from "axios";
import { weatherUrl,djangoUrl } from "./Constants";


// Create an instance with the first base URL
export const instance1 = axios.create({
    baseURL: weatherUrl,
  });

// Create an instance with the second base URL
export const instance2 = axios.create({
    baseURL: djangoUrl,
  });




