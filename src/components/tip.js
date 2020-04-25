import React from 'react'
import mo from '../Img/cop4.jpeg'
import {Link} from 'react-router-dom' 

export default class Tip extends React.Component{

    state={ 
    
        services:[
     {
         icon:'Why Home Care Grant ?',
        info:'As the economy of the world suffers to a great extent, more people are now having debts. It can be devastating to lose a job and not being able to replace that for a considerable time period. Our paycheck gives us security each month and we become comfortable by living in a certain way. Using credit card to meet expenses also makes an individual happy. But, what if you meet with a financial emergency and require immediate cash? It can cause financial hardship requiring you to resort to the government grants for individuals. You need to find government grant that helps to get over with debts and overcome financial hardship. Among so many government grants, you need to find the one suitable for you. Government grants are a sure shot way to stimulate economy and so the government issues so many. To apply for the government grant, to gain approval for the fund, you need to prove that you are facing financial hardship.'
    },
   
   
    ]
  }

    render(){
      
        return(
            <section className='single-room'>
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>What We Are</h3>
                        <p>
                        The mission of Our Community Center is to to foster global monetary cooperation, 
                           secure 
                           financial stability, facilitate international trade, promote high employment 
                           and sustainable 
                           economic growth, and reduce poverty around the world Created, in 1945,
                            the United Nations and 
                           Department of Health and Human Service (UN Grants) is governed by and accountable to the 188
                            countries that make up its near-global membership.
                        </p>

                    </article>
                    <article className='info'>
                        <h3>Shortcuts</h3>
                        <h6>
                        <ul className='leke'>
                        
                        <li>
                            <Link to='/apply' className="btn-pri">Apply For Grant</Link>
                        </li>
                        <li>
                            <Link to='/approved' className="btn-pri">Winners List</Link>
                        </li>
                        <li>
                            <Link to='/testimony' className="btn-pri">Testimony</Link>
                        </li>
                       
                        <li>
                            <Link to='/about' className="btn-pri">About Us</Link>
                        </li>
                        <li>
                            <Link to='/contactus' className="btn-pri">Contact</Link>
                        </li>
                        </ul>
                        </h6>
                       <br/><br/> 
                       <h3>Contact</h3>
                        <h6>Phone: 917 936 0739 </h6>
                        <h6 style={{textTransform: 'lowercase'}}>Email: homecaregrant01@gmail.com </h6>
                        <h6>Address: California, United States Of America </h6>
                       
                    </article>
                </div>
            </section>
        )
    }
}
