import React, { Component } from 'react'
import {
  FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,TelegramIcon,WhatsappShareButton,WhatsappIcon
} from "react-share";


export default class Items extends Component {
  render() {
    let {title, description, url}= this.props;
    return (
      <>
      {/* Card Items for the card */}
        <div className="card " style={{width: "18rem"}}>
         <div>Icon</div>  

  <div className="card-body">
    
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a  href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Explore</a>
      <hr />
      {/* facebook share button */}
      <div className="socialShare">

      <FacebookShareButton 
        url={url}
        quote={"hi saurav"}
        hashtag="#sauravpianist"
      >
      <FacebookIcon size={28} logoFillColor="white" round={true}></FacebookIcon>
      </FacebookShareButton>
      

      {/* instagram share button  */}
      <TwitterShareButton 
        url={url}
        quote={"hi saurav"}
        hashtag="#React"
      >
      <TwitterIcon size={28} logoFillColor="white" round={true}></TwitterIcon>
      </TwitterShareButton>

      {/* telegram share button  */}
      <TelegramShareButton 
        url={url}
        quote={"hi saurav"}
        hashtag="#React"
      >
      <TelegramIcon size={28} logoFillColor="white" round={true}></TelegramIcon>
      </TelegramShareButton>

      <WhatsappShareButton 
        url={url}
        quote={"hi saurav"}
        hashtag="#React"
      >
      <WhatsappIcon size={28} logoFillColor="white" round={true}></WhatsappIcon>
      </WhatsappShareButton>
      </div>
  </div>
</div>
      </>
    )
  }
}
