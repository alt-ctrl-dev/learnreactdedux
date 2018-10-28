import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';
import React from 'react';
import _ from "lodash";

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props)=>{
    let limit;
    if(props.limit){
        if(props.limit<=0 || props.limit >props.data.length){
            limit = props.data.length;
        }
        else{
            limit = props.limit;
        }
    }
    else{
        limit = props.data.length;
    }

    return(
        <div>
            <Sparklines limit={limit} data={props.data} width={180} height={120} >
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}