import React from 'react'


export default class Reward extends React.Component{

    state={ 
    
        services:[
            {
                icon:'98K',
               info:'Request'
           },
           {
               icon:'36',
              
               info:'States '
           },
           {
               icon: '8K',
               
               info:'Winners'
           },
           {
               icon:'20K',
              
               info:'Pending '
           },
          
           ]
  }

    render(){
       
        return(
            <section className='serv'>
                <div className='serv-center'>
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='serv'>
                           <h2>{item.icon} </h2>
                           <h2>{item.info} </h2>
                           </article>
                    })}
                </div>
                    
            </section>
        )
    }
}
