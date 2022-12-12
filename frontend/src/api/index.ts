import AspidaAPI from "./aspida/$api";
import aspida from '@aspida/axios'
import axios from 'axios'
import { Config } from "../config";

export const apiClient = AspidaAPI(aspida(axios, { baseURL: Config.API_URL}));
