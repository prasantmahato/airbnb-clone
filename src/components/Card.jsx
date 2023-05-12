/* eslint-disable react/prop-types */
import star from '/images/star.png';

export default function Card(props ){
    return(
        <div className="card">
            <img src={props.img} 
            className="card--image" />
            <div className="card--badge">SOLD OUT</div>
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCnt}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}
