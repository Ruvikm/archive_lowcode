import React from "react"

const CountdownContext = React.createContext<{
  contentWidth:number
  contentHeight:number
  contentRadius:number
  contentSpace:number
  contentBackground:string
  contentColor:string
  speed:number
  mode:string
}>({
  contentWidth:30,
  contentHeight:50,
  contentRadius:5,
  contentSpace:10,
  contentBackground:'#16293E',
  contentColor:'#4A9EF8FF',
  speed:450,
  mode:'down'
  })




export {CountdownContext}