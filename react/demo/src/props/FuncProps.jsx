import react from "react";
function FuncProps({image,title,desc}){
return(
   <div classname="col-md-4">
  <div className="card" style={{width: '18rem'}}>
    <img src={image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{desc}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>

)
}
export default FuncProps