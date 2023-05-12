/* eslint-disable react/prop-types */
import star from '/images/star.png';

export default function Card(props){

    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT";
    }else if(props.location == "Online"){
        badgeText = "ONLINE";
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} 
            className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCnt}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}
