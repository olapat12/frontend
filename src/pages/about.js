import React from 'react'
import mo from '../Img/back1.jpg'
import {Link} from 'react-router-dom' 
import Navbar from '../components/Navbar'
import Tip from '../components/tip'
import Footer from '../components/footer'


export default class About extends React.Component{

    state={ 
    
        services:[
     {
         icon:'The History ',
     }
    
    ]
  }

    render(){
      
        return(
        <>
        <Navbar /><br/><br/><br/><br/><br/><br/>
        <p style={{color:'gray', fontSize:22, textAlign: 'center'}}>About Us</p>
            <section className='servicess'>
                
                <div className='services-centers'>
                
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='services'>
                            
                            <h2>{item.icon} </h2>
                           <h4><p>  
                            Still unknown to many is a useful Grant Program called the Financial Help For Families (FHF)
                        that could benefit millions of Americans. Each day millions of dollars in Free Government Grants
                        are given for Business, Personal, Housing and Educational needs.<br/><br/>
                        You can apply for as many grants as you want. For instance, you can get grants to fix your
                        house, pay off credit card debt, start up a business, go to college and much more! You never
                        have to repay Grants.<br/><br/>

                        Grants require no credit checks, no Collateral and no co-Signers. You can apply if you have Bad
                        Credit or Bankruptcy. You do not have to repay anything to the Government.You can apply even if
                        you have a declared bankruptcy or have bad credit.<br/><br/>

                        So while the banks happily wait for this program to end, the Government is making a final push
                        and urging people to take advantage . The good news is that once you’re in, you’re in.Government
                        Grants for Individuals
                        Government Grants for individuals to get out of the debt:<br/><br/>
                        As the economy of the world suffers to a great extent, more people are now having debts. It can
                        be devastating to lose a job and not being able to replace that for a considerable time period.
                        Our paycheck gives us security each month and we become comfortable by living in a certain way.
                        Using credit card to meet expenses also makes an individual happy. But, what if you meet with a
                        financial emergency and require immediate cash? It can cause financial hardship requiring you to
                        resort to the government grants for individuals. You need to find government grant that helps to
                        get over with debts and overcome financial hardship. Among so many government grants, you need
                        to find the one suitable for you.<br/><br/>

                        Government grants are a sure shot way to stimulate economy and so the government issues so many.
                        To apply for the government grant, to gain approval for the fund, you need to prove that you are
                        facing financial hardship.<br/><br/>
                        How government grants work?<br/><br/>

                        Before you apply for a particular government grant, you need to understand how the grants
                        actually work. To prove your point in the best manner, you may hire a professional grant writer
                        to help you to seek money. Professionals do grant the writing just to make a living. You may
                        capitalize on their potential to write grants. These professionals can help to write grant in a
                        way you want them to write. You have to prove that you face a lot of problem due to the
                        debt.<br/><br/>

                        Collect all your financial information<br/><br/>

                        Gather financial information and make a list of the debts. So, you may come to know the total
                        amount you have to pay. You got to inform the government regarding the debt and only then you
                        may gain access to the funds. The government will ask you about your debts and so it is
                        important to make a list of the debts. People who have in dire need of fund mostly gain
                        approval. The more the need, the better it is. Anyone who has undergone the loss of job, he has
                        a real point to make. Government grants for individualshelp to get over with the debt. It is a
                        suitable tool to reduce the burden of debt. You may also use the fund to grow your business.</p> <br/><br/><br/>
                                <Link to="/aplication" className="btn-primary" >
                                      Apply
                                 </Link>
                                </h4>
                    </article>
                    })}
                     <img className='iim' src={mo} />
                </div>
                    
            </section>
            <Tip/>
            <Footer/>
            </>
        )
    }
}
