
const Image = () => {
  
const image1 = "/src/img/description-1-app.png";
const image2 = "/src/img/description-2-app.png";
  

    return (
    <>
    <div style={{ display: "grid",textAlign:"right", flexDirection: "column", width: "250px",
    height: "200", margin: "50px"}}>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit voluptatibus dolorem nulla perferendis. Aspernatur dolore corporis dicta, cum totam cumque repellat sed qui quaerat, rerum, voluptas recusandae magnam fugiat a! </p>
    </div>
    <img src={image1} alt="Image 1" width={"500px"} height={"500px"} style={{ display: "flex", justifyContent: "flex-start", marginLeft:"100px" }} />
    <img src={image2} alt="Image 2" width={"500px"} height={"500px"}  style={{ display: "flex", justifyContent: "flex-end", margin: "100px", marginLeft:"1300px" }} />
    </>
  );
};

export default Image;







