import './ImageSlider.css';

function ImageSlider() {


  return (
    <>
      <div className="image-carousel">
        <div className="image-wrapper">
            <img src="9cf16139-5723-4876-a061-58daa7b80630-bestdishes_massaman.jpg" alt="Image 1"/>
            <img src="20230908-POTLUCK-CLUB-027520.png" alt="Image 2"/>
            <img src="4d8b709a-740c-416b-a915-a1de9b5d716e-bunnychow_SA.jpg" alt="Image 3"/>
            <img src="52880675_10156961965209194_5944288072567881728_o.35.jpg" alt="Image 4"/>
            <img src="Chicken-Tikka-Masala.png" alt="Image 5"/>
            <img src="crab-hot-dish-FT-RECIPE0821-411a82f8cc8c4b46a84e0996203db163.jpg" alt="Image 6"/>
            <img src="dahi-puri-indian-street-food-served-at-sula-1.jpg" alt="Image 7"/>
            <img src="stir-fried-tomato-egg.jpeg" alt="Image 8"/>

            {/* Duplicate Images for smooth transition*/}
            <img src="9cf16139-5723-4876-a061-58daa7b80630-bestdishes_massaman.jpg" alt="Image 1"/>
            <img src="20230908-POTLUCK-CLUB-027520.png" alt="Image 2"/>
            <img src="4d8b709a-740c-416b-a915-a1de9b5d716e-bunnychow_SA.jpg" alt="Image 3"/>
        </div>
    </div>
    </>
  );
}

export default ImageSlider;
