import axios from "axios";
import { IuserInfo } from "./__types";


export const post = (data:IuserInfo) => {

    const client = axios.create({
        baseURL: "https://637f50932f8f56e28e87af4a.mockapi.io" 

      });
      client.post("/challenge", data)
      .then(() => {console.log("Cadastro realizado.")}); 
  }



export const get = () => {   
    const client = axios.create({
        baseURL: "https://637f50932f8f56e28e87af4a.mockapi.io" 

      });

      client.get("/challenge?:id")
      .then(() => {console.log("aaa")}); 
  }

