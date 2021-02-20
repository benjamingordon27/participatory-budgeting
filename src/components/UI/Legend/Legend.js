import React from 'react';
import classes from './Legend.module.css'

const legend = (props) => {
    return (
        <div class={classes.Legend}>
            
                {Object.keys(props.legendMarkers).map(key => (
                    <div>
                        {props.zoom <=12 ?
                            <img src={props.legendMarkers[key].dot} alt={key}></img>:
                            <img src={props.legendMarkers[key].img} alt={key}></img>
                        }                        
                        {key}
                    </div>
                ))}
            
        </div>
    );
}

export default legend;