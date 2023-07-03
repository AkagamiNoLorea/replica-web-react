import './Image-style.css';



const Image = () => {
const image= "/src/img/description-1-app.png";
    return (
    <div className='cuadro'>
    <div className= "Image">
    <img src={image} alt="Image 1" width={"500px"} height={"500px"} />
    
    </div>
    
</div>

    
  );
};

export default Image;







