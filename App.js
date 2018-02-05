import React from 'react'
import Button from './button.jsx'
class App extends React.Component {
	
	constructor(props){
		super(props);
		this.downloadFile =  this.downloadFile.bind(this);
	}
	
	downloadFile(){
		
		var storageObj = this.props;//mimeTypes
		var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(storageObj));
        var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", "scene.json");
        dlAnchorElem.click();
	}
	
	render() {
         return (
             <div>
			    
                 <h3>Array: {this.props.propArray}</h3>
                 <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                 <h3>Func: {this.props.propFunc(3)}</h3>
                 <h3>Number: {this.props.propNumber}</h3>
                 <h3>String: {this.props.propString}</h3>
                 <h3>Object: {this.props.propObject.objectName1}</h3>
                 <h3>Object: {this.props.propObject.objectName2}</h3>
                 <h3>Object: {this.props.propObject.objectName3}</h3>
				 <Button downloadFile={ this.downloadFile} />
				  
				
			
				
				 <a href="" id="downloadAnchorElem"></a>
           </div>
		   );
	}
} 
 App.propTypes = {
   propArray: React.PropTypes.array.isRequired,
   propBool: React.PropTypes.bool.isRequired,
   propFunc: React.PropTypes.func,
   propNumber: React.PropTypes.number,
   propString: React.PropTypes.string,
   propObject: React.PropTypes.object
}

App.defaultProps = {
  propArray: [1,2,3,4,5],
  propBool: true,
  propFunc: function(e){return e},
  propNumber: 1,
  propString: "vishal12...",
  propObject: {
  objectName1:"yuvrajsingh",
  objectName2: "irfanpathan",
  objectName3: "manojtiwary"
}
}
export default App;
