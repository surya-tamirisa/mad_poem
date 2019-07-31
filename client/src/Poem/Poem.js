import React, {Component} from 'react';

class Poem extends Component {
    // data[]=this.props.allPoems;
    render(){
        let data=[];
        data=this.props.allPoems;
        // this.items = this.props.allPoems.map((item, key) =>
        // <li key={item._id}>{item.name}</li>
        
       return <div>
            {
                // const data=props.allPoems;
                // data.map(poem=> <div>{poem}</div>)
                this.items = data.map((item, key) => {
                    let t = new Date( item.time );
                    // let formatted = t.format("dd.mm.yyyy hh:MM:ss");
                    // t.toISOString(); 
                    return (<li key={item._id}>ID: {item._id}
                    Poem: {item.poem}
                    TimeStamp: {t.toISOString() }</li>)
                })

            }
        </div>
    }
}


// const Poem = (props)=>{
//     return (
        
//         <div>
//             {/* {props.allPoems} */}
//             {
//                 // const data=props.allPoems;
//                 props.allPoems.map(poem=> <div>{poem}</div>)
//             }
//         </div>
        
        
//     );
// }

export default Poem;