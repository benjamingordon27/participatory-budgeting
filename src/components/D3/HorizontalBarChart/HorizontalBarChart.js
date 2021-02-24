import React, {Component} from 'react';
import * as d3 from "d3";
import classes from './HorizontalBarChart.module.css';

import {numberFormatter} from '../../../util/numberFormatting';

class HorizontalBarChart extends Component {

    showItem = (idx) => {
        this.props.labelClicked(this.props.dataToGraph[idx]);
    }

    render(){                   

        let data = this.props.dataToGraph;

        const innerHeight = this.props.height - this.props.margin.top - this.props.margin.bottom;
        const innerWidth = this.props.width - this.props.margin.left - this.props.margin.right;

        //this sets the yScale 
        const yScale = d3.scaleBand()
            .domain(data.map(d => d.title)) //the label
            .range([0, innerHeight]) //ranging from 0 px to the height px
            .padding(this.props.padding)

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d[this.props.variable])])
            .range([0, innerWidth]);

        return(
            
            <div className={classes.HorizontalBarChart}>
                <svg width={this.props.width} height={this.props.height}>
                    <g transform={`translate(${this.props.margin.left}, ${this.props.margin.top})`}>
                        
                        {/* Draw the xAxis */}
                        {xScale.ticks().map((tickValue,idx) => (
                            <g transform={`translate(${xScale(tickValue)},0)`}>
                                <text 
                                    style={{textAnchor: 'middle'}} 
                                    dy='.71em' 
                                    y={innerHeight+3}
                                >
                                    {/* {priceFormatter.format(tickValue)} */}
                                    {(idx%2 - 1) ? `${this.props.dollar?'$':''}${numberFormatter(tickValue)}` : null}
                                </text>
                            </g>
                        ))}

                        {/* Draw the yAxis */}
                        {yScale.domain().map((tickValue,idx) => (                            
                            <text 
                                style={{textAnchor: 'end'}} 
                                x={-3} 
                                dy='.32em'
                                y={yScale(tickValue) + yScale.bandwidth()/2}
                                onClick = {() => this.showItem(idx)}
                            >                                    
                                {tickValue.substring(0, 36)}{tickValue.length > 36 ? `...` :''}
                            </text>                            
                        ))}          

                        {/* Draw the bars themselves */}              
                        {data.map((d,idx) => (
                                <rect     
                                    style = {{fill: this.props.rectColor}}       
                                    x={0} 
                                    y={yScale(d.title)} 
                                    width={xScale(d[this.props.variable])} 
                                    height={yScale.bandwidth()}
                                    onClick = {() => this.showItem(idx)}
                                />                            
                        ))}

                        {/* Draw the labels on the bars */}
                        {data.map((d,idx) => (
                                <text            
                                    style = {{textAnchor: 'end', fill: this.props.numberColor}}                        
                                    dy='1.1em'
                                    x={xScale(d[this.props.variable]) - 5} 
                                    y={yScale(d.title)+this.props.padding*0.5} 
                                    onClick = {() => this.showItem(idx)}
                                > 
                                    {this.props.dollar?'$':''}{numberFormatter(d[this.props.variable])}
                                </text>
                        ))}
                        <text textAnchor='middle' x={innerWidth/2}>{this.props.chartTitle}</text>
                        <text textAnchor='middle' x={innerWidth/2} y={innerHeight + 40}>{this.props.xAxisLabel}</text>
                    </g>
                </svg>
            </div>
        );
    }
}

export default HorizontalBarChart;