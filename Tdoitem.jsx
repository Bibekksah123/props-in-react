function Todo({itemlist1,dateitem}){

  return (
    <div className="container">
  <div className="row">
    <div className="col-6">
    {itemlist1}
    </div>
    <div className="col-4">
      {dateitem}
    </div>
    <div className="col-2">
      <button className=" btn btn-danger kg-button">Delete</button>
    </div>

  </div>
  </div>
  )
}
export default Todo;