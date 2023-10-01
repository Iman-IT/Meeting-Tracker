import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    padding:0;
    margin: 0;
    box-sizing:border-box;  
    font-family: 'Roboto', sans-serif;
}
a{
  text-decoration: none;
 }
li{
    list-style: none;
    margin-right: 5px;
   
    font-size: 15px;
    transition: all .5s ease;
 }
 li:hover{
  font-size: 17px;
 }




h1{
    font-size:3.5rem;
    font-weight:1000; 

 }
 p{
   opacity:.7;
    font-size:.9rem;
    font-weight:100;
 }


 `;