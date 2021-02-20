import React, {Component} from 'react';
import * as d3 from "d3";
import classes from './VerticalBarChart.module.css';

import {numberFormatter} from '../../../util/numberFormatting';

class VerticalBarChart extends Component {

    showItem = (idx) => {
        this.props.labelClicked(this.props.dataToGraph[idx]);
    }

    render(){                   

        let data = this.props.dataToGraph;

        const innerHeight = this.props.height - this.props.margin.top - this.props.margin.bottom;
        const innerWidth = this.props.width - this.props.margin.left - this.props.margin.right;

        //this sets the yScale 
        const yScale = d3.scaleLinear()
            .domain([d3.max(data, d => d[this.props.variable]),0]) //
            .range([innerHeight,0]) //ranging from 0 px to the height px            

        const xScale = d3.scaleBand()
            .domain(data.map(d => d.title))
            .range([0,innerWidth])
            .padding(this.props.padding);


        console.log('data', yScale.ticks())
        return(
            
            <div className={classes.VerticalBarChart}>
                <svg width={this.props.width} height={this.props.height}>
                    <g transform={`translate(${this.props.margin.left}, ${this.props.margin.top})`}>
                        
                        {/* Draw the yAxis */}
                        {xScale.domain().map((tickValue,idx) => (                            
                            <text 
                                style={{textAnchor: 'end'}} 
                                y={innerHeight} 
                                dy='.32em'
                                x={xScale(tickValue) + xScale.bandwidth()/2}
                                onClick = {() => this.showItem(idx)}
                            >                                    
                                {tickValue.substring(0, 36)}{tickValue.length > 36 ? `...` :''}
                            </text>                            
                        ))}       

                        {/* Draw the bars themselves */}              
                        {data.map((d,idx) => (
                                <rect     
                                    style = {{fill: this.props.rectColor}}       
                                    x={xScale(d.title)}                                     
                                    y={yScale(0) - yScale(d[this.props.variable]) + (innerHeight)}
                                    height={yScale(d[this.props.variable]) + yScale(0)} 
                                    width={xScale.bandwidth()}
                                    // onClick = {() => this.showItem(idx)}
                                />                            
                        ))}

                        {/* Draw the labels on the bars */}
                        {data.map((d,idx) => (
                                <text            
                                    style = {{textAnchor: 'start',fill: this.props.numberColor}}                        
                                    dy='1.1em'
                                    // x={xScale(d[this.props.variable]) - 5} 
                                    // y={yScale(d.title)+this.props.padding*0.5}
                                    x={xScale(d.title)}                                     
                                    y={yScale(0) - yScale(d[this.props.variable]) + (innerHeight) - 25}
                                    onClick = {() => this.showItem(idx)}
                                > 
                                    {this.props.dollar?'$':''}{numberFormatter(d[this.props.variable])}
                                </text>
                        ))}

                        <text textAnchor='middle' x={innerWidth/2} y={-20}>{this.props.chartTitle}</text>
                        <text textAnchor='middle' x={0} y={innerHeight/2}>{this.props.xAxisLabel}</text>
                    </g>
                </svg>
            </div>
        );
    }
}

export default VerticalBarChart;