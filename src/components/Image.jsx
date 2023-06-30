
const Image = () => {
  
   const image1 = "/src/img/description-1-app.png";
   const image2 = "/src/img/description-2-app.png";
  

   return (
    <div>
      
      <div style={{ display: "grid",textAlign:"right", flexDirection: "column", width: "200",
  height: "200",
  }}>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit voluptatibus dolorem nulla perferendis. Aspernatur dolore corporis dicta, cum totam cumque repellat sed qui quaerat, rerum, voluptas recusandae magnam fugiat a! </p>
      </div>
      <img src={image1} alt="Image 1" style={{ display: "block", margin: "10px auto" }} />
      <img src={image2} alt="Image 2" style={{ display: "block", margin: "10px auto" }} />
    </div>
  );
};

export default Image;







