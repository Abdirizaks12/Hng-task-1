import React from "react";
import {Link} from "react-router-dom"
import "./content.css"
export default function Content(){
  const data = [
    {
      name:"Twitter Link",
      link:"https://twitter.com/abdirizaks12",
      id:"twitter"
    },
    {
      name:"Zuri Team",
      link:"https://training.zuri.team/",
      id:"btn__zuri"
    },
    {
       name:"Zuri Books",
       link:"http://books.zuri.team",
       id:"books"
    },
    {
      name:"Python Books",
      link:"https://books.zuri.team/python-for-beginners?ref_id=<sigat>",
      id:"book__python"
    },
    {
      name:"Background Check for Coders",
      link:"https://background.zuri.team",
      id:"pitch"
    },
    {
      name:"Design Books",
      link:"https://books.zuri.team/design-rules" ,
      id:"book__design"
    },
    {
      name:"Contact Me",
      link:"./contact",
      id:"contact"
    }
    
      
]
   
    return(
      <div className="Main-content">
       {data.map(item=>(<Link id={item.id} to={item.link} key={item.id}>{item.name}</Link>))}
        </div>
    )
}