import React from 'react'
import Navbar from '../components/Navbar'
import Tip from '../components/tip'
import Footer from '../components/footer'

export default class Apply extends React.Component{
    constructor(props){
    super( props)
    this.state = {
        
            firstname: '',
            surname: '',
            email: '',
            homeadd: '',
            phone: '',
            statuss: 'single',
             gender:  '',
            age: '',
           work: 'employed',
            star:'',

        income: '',
        grant: 'cash',
        nation:'',
        card: 'none',
        Cardrep: 'bad',
        carry: '',
        rent: 'rent',
        error: '',
        fn: 'none',
        sn: 'none',
        em: 'none',
        ag: 'none',
        ge: 'none',
        wk: 'none',
        ph: 'none',
        in: 'none',
        st: 'none',
        sta: '',
        show: 'none',
        errors: 'none',

    }
     
    this.cpass = this.cpass.bind(this)
    this.addCounselor = this.addCounselor.bind(this)
    this.cstatus= this.cstatus.bind(this)
    this.chome = this.chome.bind(this)
    this.cage = this.cage.bind(this)
    this.cincome= this.cincome.bind(this)
    this.cemail = this.cemail.bind(this)
    this.allphone = this.allphone.bind(this)
    this.csurname = this.csurname.bind(this)
    this.cfirst = this.cfirst.bind(this)
    this.cwork = this.cwork.bind(this)
    
    
}

addCounselor(e){

    e.preventDefault();
 
    var age= this.state.age
    var email = this.state.email
    var gender = this.state.gender
    var income = this.state.income
    var status = this.statuss
    var states= this.state.homeadd
   var work= this.state.work
   var first= this.state.firstname
   var sur= this.state.surname
   var phone= this.state.phone
   
var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
   
  //  var letters = /^[A-Za-z]+$/;
  //  var numbers = /^[0-9]+$/;
  //  if (age.match(numbers) || age.trim() === '' || age.length <=2 || 
  //  first.trim() === '' || first.length <=2 || !(first.match(letters)) ||
  //  work.trim() === '' || 
  //  status.trim() === ''  ||
  //  income.match(numbers) || gender.trim() === ' ' ||
  //  sur.trim() === '' || sur.length <=2 || !(sur.match(letters)) ||
  //  phone.match(numbers) || !(pattern.test(email)) ||
  //  states.trim() === ''){

  //   return
  //  }
    
    let data = {
            fname: this.state.firstname,
            sname: this.state.surname,
            email: this.state.email,
            homeadd: this.state.homeadd,
            work: this.state.work,
            income: this.state.income,
            phone: this.state.phone,
             gender:  this.state.gender,
            mstatus: this.state.statuss,
            age: this.state.age,
            cardrep: this.state.cardrep,
            card: this.state.card,
            rent: this.state.rent,
            grant: this.state.grant,
            nation: this.state.nation,
            carry: this.state.carry
    }

    let options ={
        method: 'post',
        body: JSON.stringify(data),
        headers: {
                 Accept: "application/json",
                 "Content-Type": "application/json",
                 'Access-Control-Allow-Origin': '*'
                 }
    }
    

   return fetch('https://afternoon-badlands-54078.herokuapp.com/api/register', options )
   .then((res)=>{
    if(res.status > 300){
        this.setState({errors : 'block'})
        this.props.history.push('/application')
    }
    else{
      this.props.history.push('/success')
    }
    //return res.json();
   }).catch(err=>console.log(err))
   
}


cfirst(){ 
    
    var firstname= this.state.firstname
    var letters = /^[A-Za-z]+$/;
     if (firstname.trim() === '' || firstname.length <=2 || !(firstname.match(letters)) ){
      this.setState({
           fn: 'block'
     })
    }
    else{
     this.setState({
         fn: 'none'
     })
    }
 
    
  }
 
  csurname(){ 
     
     var surname= this.state.surname
     var letters = /^[A-Za-z]+$/;
      if (surname.trim() === '' || surname.length <=2 || !(surname.match(letters)) ){
       this.setState({
            sn: 'block'
      })
     }
     else{
      this.setState({
          sn: 'none'
      })
     }
  
     
   }

   cgender(){ 
     
    var gender= this.state.gender
    var letters = /^[A-Za-z]+$/;
     if (gender.trim() === '' || gender.length <=2 || !(gender.match(letters)) ){
      this.setState({
           ge: 'block'
     })
    }
    else{
     this.setState({
         ge: 'none'
     })
    }
 
    
  }
 
  cwork(){ 
     
    var work= this.state.work
    var letters = /^[A-Za-z]+$/;
     if (work.trim() === '' || work.length <=2 ){
      this.setState({
           wk: 'block'
     })
    }
    else{
     this.setState({
         wk: 'none'
     })
    }
 
    
  }

  cemail(){ 
     
    var email= this.state.email
    
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
     if ((pattern.test(email))){
      this.setState({
           em: 'none'
     })
    }
    else{
     this.setState({
         em: 'block'
     })
    }
 
    
  }
   chome(){ 
     
     var homeadd= this.state.homeadd
    // var letters = /^[A-Za-z]+$/;
      if (homeadd.trim() === '' || homeadd.length <=12  ){
       this.setState({
            st: 'block'
      })
     }
     else{
      this.setState({
          st: 'none'
      })
     }
   }

   cstatus(){ 
     
    var status= this.state.status
   // var letters = /^[A-Za-z]+$/;
     if (status.trim() === '' || status.length <=4  ){
      this.setState({
           sta: 'block'
     })
    }
    else{
     this.setState({
         sta: 'none'
     })
    }
  }

 
   cincome(){ 
     
     var income= this.state.income
     var numbers = /^[0-9]+$/;
      if (income.match(numbers)  ){
       this.setState({
            
            in: 'none'
      })
     }
     else{
      this.setState({
        in: 'block'
      })
     }
   }

   
   cage(){ 
     
    var age= this.state.age
    var numbers = /^[0-9]+$/;
     if (age.match(numbers)  ){
      this.setState({
        ag: 'none'
          
     })
    }
    else{
     this.setState({
        ag: 'block'
     })
    }
  }
 
 allphone(){ 
     var phone = this.state.phone
     var numbers = /^[0-9]+$/;
     if(phone.match(numbers)) {
     this.setState({
         ph: 'none'
     })
  }
     else{
         this.setState({ph: 'block'})
  }
  }
  cpass(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name] : checked}) : this.setState({
          [name] : value
      })
}


    render(){

        return(
             
            <>
            <Navbar />
            <div className='aside'>
            <div className="auth-wrapper">
             <div className="auth-inner">
                 
            <form>
                
                <h3>Application Form</h3>
                <p style={{color:'red', fontWeight:'bold', fontSize: 20}}>
                Notice: <span style={{fontWeight: 'normal', fontSize: 16}}>Any false or misleading information given may result to discharge or disqualification of your
                 grant . So kindly provide the details for due processing and grant verification.
                 You have to fill the below information’s, In other to proceed.</span>
                </p>
    
                <div >
                <h5>Firstname*</h5>
                 <input type="text" className="form-control" value={this.state.firstname} 
                   onBlur={this.cfirst}    onChange={this.cpass}   name='firstname' placeholder="Firstname" />
                   
                   <p style={{display:this.state.fn, color: 'red'}}>field cannot be empty or contain numbers</p>
                </div>
    
                    <div className="form-group">
                      <h5>Lastname*</h5>  
                 <input type="text" className="form-control" placeholder="Lastname" onBlur={this.csurname}
                    onChange={this.cpass}   value={this.state.surname} name='surname' />
                    
                    <p style={{display:this.state.sn, color: 'red'}}>field cannot be empty or contain numbers</p>
                    </div>
    
                    <div className="form-group">
                      <h5>Email Adrress*</h5>
                <input type="email" className="form-control" value={this.state.email} onMouseOut={this.cemail}
                      onChange={this.cpass}  name='email'  placeholder="email address" />
                      
                      <p style={{display:this.state.em, color: 'red'}}>Invalid Email </p>
                    </div>
                    
    
                    <div className="form-group">
                    <h5>Full Home Address*</h5>
             <input type="text" className="form-control"  value={this.state.homeadd} onMouseOut={this.chome}
                        onChange={this.cpass}  name='homeadd' placeholder="home address" />
                 
                 <p style={{display:this.state.st, color: 'red'}}>field cannot be empty </p>
                    </div>
                    <div className="form-group">
                    <h5>Nationality*</h5>
             <input type="text" className="form-control"  value={this.state.nation} 
                        onChange={this.cpass}  name='nation' placeholder="Nationality" />
                 
                 <p style={{display:this.state.na, color: 'red'}}>field cannot be empty </p>
                    </div>

                    <div className="form-group">
                      <h5>Phone</h5>  
                     <input type="text" className="form-control" value={this.state.phone} onMouseOut={this.allphone}
                        onChange={this.cpass} name='phone' placeholder="Mobile number" />
                      <p style={{display:this.state.ph, color: 'red'}}>field cannot be empty or contain letter</p>
                    </div>
    
                    <div className="form-group">
                    <h5>Phone Courier</h5>
             <input type="text" className="form-control"  value={this.state.carry}
                        onChange={this.cpass}  name='carry' placeholder="Phone courier" />
                    </div>
                    
    
                    <div className="form-group">
                        <h5>Age*</h5>
                        <input type="text" className="form-control" value={this.state.age} onBlur={this.cage}
                       onChange={this.cpass}  name='age' placeholder="Age" />
                       <p style={{display:this.state.ag, color: 'red'}}>field cannot be empty or contain letter</p>
                    </div>
    
                    <div>
                        <label>Gender: &nbsp;&nbsp;&nbsp;
                        <label>
                 <input type="radio" value="male"
                         name='gender' onChange={this.cpass} />
                             Male &nbsp;&nbsp;
                        </label>
                        
             <label>
            <input type="radio" value="female" name="gender" onChange={this.cpass}
                  />
                            Female
                        </label>
                        </label>
                        
                    </div>
    
                    <div className="form-group">
                    <h5>Monthly income</h5>  
              <input type="text" className="form-control" value={this.state.income} onBlur={this.cincome}
                       onChange={this.cpass}  name='income' placeholder="Monthly Income" />
                       
                       <p style={{display:this.state.in, color: 'red'}}>field cannot be empty or contain letter</p>
                    </div>
    
                    <div className='form-group'>
                    <h5>Work status*</h5>
           <select name='work'  value={this.state.work} 
                  onChange={this.cpass}  className='form-control' > 
               <option value='Employed'>Employed</option>
               <option value='Unemployed'>Unemployed</option>
            </select>
            
                </div>
                <div className='form-group'>
                <h5> Marital status* </h5>
                <select name='statuss'  value={this.state.statuss} 
                  onChange={this.cpass}  className='form-control' > 
               <option value='single'>Single</option>
               <option value='married'>Married</option>
               <option value='divorced'>Divorced</option>
               <option value='separated'>Separated</option>
            </select>
                </div>
                <div className="form-group">
                    <h5>Do you own a house or rent ?*</h5>
                    <select name='rent'  value={this.state.rent} 
                  onChange={this.cpass}  className='form-control' > 
               <option value='rent '>rent</option>
               <option value='own'>Own</option>
               <option value='mortgage'>mortgage</option>
               <option value='others'>others</option>
            </select>  </div>
                <div className="form-group">
                    <h5>Type of card*</h5>
                    <select name='card'  value={this.state.card} 
                  onChange={this.cpass}  className='form-control' > 
               <option value='none '>none</option>
               <option value='cash'>Cash</option>
               <option value='check'>Check</option>
            </select>  </div>
            <div className="form-group">
                    <h5>Card Report*</h5>
                    <select name='cardrep'  value={this.state.cardrep} 
                  onChange={this.cpass}  className='form-control' > 
               <option value='good '>good</option>
               <option value='bad'>bad</option>
            </select>  </div>
                <div className="form-group">
                    <h5>Form of Grant*</h5>
                    <select name='grant'  value={this.state.grant} 
                  onChange={this.cpass}  className='form-control' > 
               <option value='cash'>Cash</option>
               <option value='check'>Check</option>
            </select>  </div>
                    <h5 style={{display:this.state.errors, color: 'red', textAlign: 'center', fontStyle: 'italic'}}> 
                     Something went wrong, make sure you fill all the fields.</h5>
                    <button onClick={this.addCounselor} 
                    className="btn-primaryyy">
                     Submit
                    </button>
              </form>
              </div>
               </div>
               </div>
               <Tip/>
               <Footer/>
               </>
        )
    }
}