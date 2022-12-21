import AspidaAPI from "./aspida/$api";
import aspida from "@aspida/fetch";
import axios from "axios";
import { Config } from "../config";

export const apiClient = AspidaAPI(aspida(fetch, { baseURL: Config.API_URL }));

