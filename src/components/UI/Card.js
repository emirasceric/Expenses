

import "./Card.css"


// Komponenta Card.js predstavlja prikazivanje kartice sa sadržajem.

const Card = (props) => {
const classes = "card " + props.className;

return <div className={classes}>{props.children}</div>; 

}

export default Card;