import React from 'react'
import mo from '../Img/cop4.jpeg'
import {Link} from 'react-router-dom' 

export default class Why extends React.Component{

    state={ 
    
        services:[
     {
         icon:'Why Home Care Grant ?',
        info:'As the economy of the world suffers to a great extent, more people are now having debts. It can be devastating to lose a job and not being able to replace that for a considerable time period. Our paycheck gives us security each month and we become comfortable by living in a certain way. Using credit card to meet expenses also makes an individual happy. But, what if you meet with a financial emergency and require immediate cash? It can cause financial hardship requiring you to resort to the government grants for individuals. You need to find government grant that helps to get over with debts and overcome financial hardship. Among so many government grants, you need to find the one suitable for you. Government grants are a sure shot way to stimulate economy and so the government issues so many. To apply for the government grant, to gain approval for the fund, you need to prove that you are facing financial hardship.'
    },
    // {
    //     icon:'How it works ?',
    //     info:'Before you apply for a particular government grant, you need to understand how the grants actually work. To prove your point in the best manner, you may hire a professional grant writer to help you to seek money. Professionals do grant the writing just to make a living. You may capitalize on their potential to write grants. These professionals can help to write grant in a way you want them to write. You have to prove that you face a lot of problem due to the debt. '
    // },
   
    ]
  }

    render(){
      
        return(
            <section className='servicess'>
                
                <div className='services-centers'>
                   
                <img className='iimm' src={mo} />
                
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='services'>
                            
                            <h2>{item.icon} </h2>
                           <h5>As the economy of the world suffers to a great extent, more people are now having debts. It can be devastating to lose a job and not being able to replace that for a considerable time period. Our paycheck gives us security each month and we become comfortable by living in a certain way.
                               <br/><br/><br/><br/> Using credit card to meet expenses also makes an individual happy. But, what if you meet with a financial emergency and require immediate cash? It can cause financial hardship requiring you to resort to the government grants for individuals. You need to find government grant that helps to get over with debts and overcome financial hardship.
                               <br/><br/> Among so many government grants, you need to find the one suitable for you. Government grants are a sure shot way to stimulate economy and so the government issues so many. To apply for the government grant,
                                to gain approval for the fund, you need to prove that you are facing financial hardship. <br/><br/><br/>
                                <Link to="/aplication" className="btn-primaryyy" >
                                      Apply
                                 </Link>
                                </h5>
                    </article>
                    })}
                </div>
                    
            </section>
        )
    }
}
