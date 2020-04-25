import React from 'react'
import mo from '../Img/test.MP4'
import mmo from '../Img/testt.MP4'
import Title from './Title'
import ReactPlayer from 'react-player'

export default class Vevo extends React.Component{

    state={ 
    
        services:[
            {
                icon:`${mo}`
           },
           {
            icon:`${mmo}`
       }
           ]
  }

    render(){
       
        return(
            <section className='services'>
            <Title title='Happy Client' />
            <div className='services-center'>
            
                {this.state.services.map((item,index)=>{
                    return <article key={index} style={{display: 'flex',justifyContent:'center', alignItems:'center'}}>
        
                      <ReactPlayer url={item.icon} controls />
                      
                    </article>
                })}
            </div>
                
        </section>
         
        )
    }
}
