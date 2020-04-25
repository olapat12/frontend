import React from 'react'
import Title from '../components/Title'
import off from '../Img/04.jpg'
import mm from '../Img/10.jpg'
import fam from '../Img/09.jpg'
import stud from '../Img/06.jpg'

export default class Stand extends React.Component{

    state={ 
    
        services:[
     {
        img: `${off}`
    },
    {
        img:`${stud}`
    },
    {
        img:`${fam}`
    },
    {
        img:`${mm}`
    },
   
    ]
  }

    render(){
        // let pics = [off,mm,fam]
        // pics = pics.map((item)=>{
        //     return<div className='services'>
        //        <span><img src={item} /></span> 
        //     </div> 
       // })
        return(
            <section className='services'>
                <Title title='Promise Made, Promise Kept ' />
                
                <h3>We make sure we keep to our promise</h3>
                <div className='services-center'>
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='services'>
                            <p> <img src={item.img} /> </p>
                           </article>
                    })}
                </div>
                    
            </section>
        )
    }
}
