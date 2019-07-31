import React, { Component } from 'react';

import Poem from './Poem/Poem';

// import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: 'resp',
      post: 'post',
      responseToPost: '',
      value:'value',
      poem:'',
      allPoems:[],
   };
  //  this.generatePoem= this.generatePoem.bind(this);
   this.handleSubmit=this.handleSubmit.bind(this);
   this.onSubmit=this.onSubmit.bind(this);
   
}
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.welcome_msg }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/submitPoem', {
      proxy: {
        '/api/submitPoem': {
          'target': 'localhost:3000'
        }
      },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ poem: this.state.poem }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
    console.log(body);
  };
  

  onSubmit(event){
    event.preventDefault();
    
    let nouns=event.target[0].value;
    let verbs=event.target[1].value;
    let adverbs=event.target[2].value;
    let adjectives=event.target[3].value; 
    let prepositions=event.target[4].value;
    
    nouns= nouns.split(' ');
    verbs= verbs.split(' ');
    adverbs= adverbs.split(' ');
    adjectives = adjectives.split(' ');
    prepositions= prepositions.split(' '); 

    console.log('Nouns '+ nouns);
    console.log('Verbs'+ verbs);
    console.log('Adverbs '+ adverbs);
    console.log('Adjectives '+ adjectives);
    console.log('Prepositions '+ prepositions);
    
    var nounItem1 = nouns[Math.floor(Math.random()*nouns.length)];
    // console.log(nounItem1);
    var nounItem2 = nouns[Math.floor(Math.random()*nouns.length)];
    var prepItem1 = prepositions[Math.floor(Math.random()*prepositions.length)];
    var prepItem2 = prepositions[Math.floor(Math.random()*prepositions.length)];
    var verbItem1 = verbs[Math.floor(Math.random()*verbs.length)];
    var verbItem2 = verbs[Math.floor(Math.random()*verbs.length)];
    var adverbItem = adverbs[Math.floor(Math.random()*adverbs.length)];
    var AdjItem3 = adjectives[Math.floor(Math.random()*adjectives.length)];
    var AdjItem1 = adjectives[Math.floor(Math.random()*adjectives.length)];
    var AdjItem2 = adjectives[Math.floor(Math.random()*adjectives.length)];

    
    var resultantText=`A big ${AdjItem3} bend ${prepItem1} an endless ${AdjItem1}
    A yellow ${AdjItem2} ${verbItem2} deep in a dry ${adverbItem} It ${verbItem1} all
    the same A ${nounItem1} ${prepItem2} stars Grains of rice in a
    black ${nounItem2} Simple`;
    console.log(resultantText);
    console.log(this.state.poem);
    
    setTimeout(async()=> {
      this.setState({poem:resultantText});
      console.log(this.state.poem);
      this.handleSubmit(event);
    }, 0); 
    
  };

  retrieveAll = e => {
    e.preventDefault();
    const response = fetch('http://localhost:5000/api/retrieveAll',{      method: 'GET',
      headers: {
        // 'Access-Control-Allow-Origin':'true',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
    .then(response=>{
        // var obj = response.poem;
        // console.log(obj);
       return response.json()}
       )
       .then(json => {
        let data = [];
        for(e in json){
          data.push(json[e]);
          console.log(json[e]);
        };
        this.setState({allPoems:data});
        // data.concat(json);
        // this.setState({
        //   allPoems: data
        // });
        // console.log(this.state.allPoems);
      });}
    // .then(msg=>{
    //   this.setState({
    //     allPoems: msg})});}
      // var obj = JSON.parse(response);
      // var rand= obj;
      // console.log(obj);
      // console.log(JSON.parse(msg));
      // console.log(JSON.stringify(msg));
      // let data=this.state.allPoems;
      // data.push(msg.exp);
        // setTimeout((msg)=> {
          // let data[]=this.state.allPoems;
          // data.push(JSON.stringify(msg));
          // this.setState({allPoems:msg});
          // console.log(JSON.parse(msg));
          // var newState = Object.assign({}, this.state); // Clone the state obj in newState
          // newState[5].push(JSON.parse(msg));             // modify newState
          // this.setState(newState); 
          // console.log(msg); 
          // res.send(data); 
          // }, 0); 
      // this.setState({allPoems:JSON.stringify(msg)});
    // console.log(this.state.allPoems);
  
  // .catch(err=> console.log(err));   
  

render() {
  var styleHead={
    color:'blue',
    // margin-left:30px,
    backgroundColor: 'white',
    // font: 'Open Sans',
  } 
  var primeContainer={
      margin:'20px',
      padding:'10px',
  }
  
    return (
      <>
      <div style={primeContainer}>
        <nav>
          <h1 style={styleHead}>
          Poem Game
          </h1>
        </nav>
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1"> 
              Nouns:<input type="text" class="form-control" id="nouns" aria-describedby="emailHelp" placeholder="Enter Nouns" />
            </label>
          </div >
          <div class="form-group">
            <label>
              Verbs: <input type="text" class="form-control" id="verbs" aria-describedby="emailHelp" placeholder="Enter Verbs" />
            </label>
          </div>
          <div class="form-group">
            <label>
              Adverbs: <input type="text" class="form-control" id="adverbs" aria-describedby="emailHelp" placeholder="Enter Adverbs" />
            </label>
          </div>
          <div class="form-group">
            <label>
              Adjectives: <input type="text" class="form-control" id="adjectives" aria-describedby="emailHelp" placeholder="Enter Adjectives" />
            </label>
          </div>
          <div class="form-group">
            <label>
              Prepositions: <input type="text" class="form-control" id="prepositions" aria-describedby="emailHelp" placeholder="Enter Prepositions" />
            </label>
          </div>

          <input type="submit" value="Generate Poem" class="btn btn-primary"/>
          <p>{this.state.responseToPost}</p>
          </form>
          
          <input type="submit"  value="Retrieve all Poems" class="btn btn-primary" onClick={this.retrieveAll.bind(this)}/>
          {/* */}
          
          {/* */}
                  
          <Poem allPoems={this.state.allPoems}></Poem>
      </div>
      </>
    );
  }
}

export default App;