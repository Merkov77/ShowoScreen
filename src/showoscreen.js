import React, { Component } from 'react';
import Showo from './showo';

class ShowoScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = ({
      showData : "", //Display showo
      count : 0, //counter for show limited number (5)
     //If there are 5 children to start the spectacle, contrary show an alert
      mes : (this.props.children.length === 5) ? this.props.children[0] : console.warn("You cannot introduce +6 showo")
    }) 
  }
  componentDidMount(){
    let bgdark = document.getElementsByClassName("bgdark")[0];
    bgdark.style.background = "black";
    bgdark.style.position = "fixed";
    bgdark.style.margin = "auto";
    bgdark.style.top ="0";
    bgdark.style.bottom ="0";
    bgdark.style.left ="0";
    bgdark.style.right ="0";

    this.interval = setInterval(()=>{
      this.spectacle()
    },500)  

    this.interval2 = setInterval(()=>{ 
      this.setState({
        showData : ""
      })
    },6500) //6500.. Good
  }

  componentWillUnmount(){
    clearInterval(this.interval)
    clearInterval(this.interval2)
  }

  spectacle(){
    let ak = 0;
    if (this.state.count <= 65){ // each 6s
      this.setState({
        count : this.state.count + 1,
        showData: this.state.mes
      })
    } else {
      this.setState({showData:""})
      clearInterval(this.interval)
      clearInterval(this.interval2)

      setTimeout(()=>{
        document.getElementsByClassName("bgdark")[0].animate([
          {opacity:"1"},{opacity:"0"}
        ],{duration:300,iterations:1})
      })

      setTimeout(()=>{
        document.getElementsByClassName("bgdark")[0].remove()
      },300)
      
    }

    if (this.props.children.length === 5){
       if(this.state.count === 0){
          this.setState({
            mes: this.props.children[0]
          })
        } else if (this.state.count === 13){
            this.setState({
              mes: this.props.children[1]
          })
        } else if (this.state.count === 26){
            this.setState({
              mes: this.props.children[2]
          })
        } else if (this.state.count === 39){
            this.setState({
              mes: this.props.children[3]
          })
        } else if (this.state.count === 48){
            this.setState({
              mes: this.props.children[4]
          })
        } else if (this.state.count === 64){
            this.setState({
              mes: this.props.children[5]
          })
        }
    } else {
      clearInterval(this.interval)
      clearInterval(this.interval2)
      document.getElementsByClassName("bgdark")[0].remove()
    }
   
  }

  render(){
    return(
      <div className="bgdark">
        {this.state.showData}
      </div>
    )
  }
}

export default ShowoScreen;
