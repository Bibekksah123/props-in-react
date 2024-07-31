import Todo from "./Tdoitem";

const Todocontainer=({todoitemlist})=>{
  return(

    <div className="item-container">
      {todoitemlist.map(item=>
         <Todo itemlist1={item.name}  dateitem={item.date} key={1} ></Todo>
      )}
  </div>
  )
}
export default Todocontainer;