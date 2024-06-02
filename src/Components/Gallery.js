import one from "../Assets/images/img1.jpg"
import two from "../Assets/images/img2.jpg"
import three from "../Assets/images/img3.jpg"
import four from "../Assets/images/img4.jpg"
import five from "../Assets/images/img5.jpg"
import six from "../Assets/images/img6.jpg"


function Gallery(){

    return(
        <div>
            <div>
        
                <center>
                    <h1>IMAGE-GALLERY</h1>
                </center>
        
            </div>
        
            <div class="gallery" style={{marginLeft: "10%"}}>
        
                <div class="gallery-image">
                    <img src={one} alt="" class="image"></img>
                </div>
                <div class="gallery-image">
                    <img src={two} alt="" class="image"></img>
                </div>
                <div class="gallery-image">
                    <img src={three} alt="" class="image"></img>
                </div>
                <div class="gallery-image">
                    <img src={four} alt="" class="image"></img>
                </div>
                <div class="gallery-image">
                    <img src={five} alt="" class="image"></img>
                </div>
                <div class="gallery-image">
                    <img src={six} alt="" class="image"></img>
                </div>
            </div>
        </div>)
}

export default Gallery