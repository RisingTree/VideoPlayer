import React, {Component} from 'react';
import Searchbar from './Searchbar'
import youtube from '../APIs/youtube';
import Videolist from './Videolist'
import Videodetail from './VideoDetail'

class App extends Component{
    state ={ videos:[],selectedVideo:null };
    componentDidMount(){
        this.onTermSubmit(' Reactjs')
    }
    onTermSubmit= async term => {
        const response  = await youtube.get('./search',{
            params:{
                q:term
            }
        })
        this.setState({videos:response.data.items,selectedVideo: response.data.items[0]})
    };   
    onVideoSelect=(video)=>{
        this.setState({ selectedVideo:video});
    }
    render(){
        return(
            <div className='ui container'>
                <Searchbar onFormSubmit={this.onTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <Videodetail video = {this.state.selectedVideo}/>
                        </div>
                        <div className='five wide column'>
                            <Videolist  onVideoSelect={this.onVideoSelect} videos = {this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;