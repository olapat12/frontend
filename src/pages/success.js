import React from 'react'
import {Link} from 'react-router-dom' 
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

export default class Success extends React.Component{

    render(){
      
        return(
            <>
            <Navbar /> <br/><br/><br/><br/>
          <div className='surr'>
              <h3>Your application has been submitted, we will get back to you soon.</h3>
                <br/><br/><br/>
               <p> <Link to='/homecaregrant' className="btn-primaryyy">back to home</Link></p>
          </div>
         
          </>
        )
    }
}
