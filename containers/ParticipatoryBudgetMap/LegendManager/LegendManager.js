import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapMarkerImgs} from '../../../components/UI/MapMarker/mapMarkerImgs';
import Legend from '../../../components/UI/Legend/Legend';

class LegendManager extends Component {

    render(){
        console.log('[LegendManager.js]',this.props)

        return(
            <div>
                <Legend 
                    legendMarkers={mapMarkerImgs} 
                    zoom={this.props.zoom}                    
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        zoom: state.setMap.zoom,
    }
}

const mapDispatchToProps = dispatch => {
    return {        

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LegendManager);