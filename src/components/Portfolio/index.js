import React ,{useState, useEffect} from 'react'; 
import {Portfol,PortfolioTitle,Span,PortfolioList,PortfolioItem,ImageWrapper,Img,Overlay,OverlaySpan} from './style.js'
import axios from 'axios';
const Portfolio = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        axios.get('js/data.json').then(res => {setImages(res.data.portfolio ) })
    }, [])
    const PortfolImages = images.map((imageItem) => {
        return (
            <ImageWrapper key={imageItem.id}>
                <Img src={imageItem.image} alt="" />
            <Overlay>
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </ImageWrapper>

        )
    })
    return (
    
        <Portfol>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div class="box">
                {PortfolImages}
            
            </div>
            
        </Portfol>
    )
}

export default Portfolio;