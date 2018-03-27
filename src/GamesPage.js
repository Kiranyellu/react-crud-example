import React  from 'react';
import { connect } from 'react-redux';
import GamesList from './GamesList';
class GamesPage extends React.Component{

    render(){
        return (
            <div>
                <h1>Header Games list</h1>
                <GamesList games={this.props.games}/>
            </div>
        )
    }
};

GamesPage.prototype = {

    games: React.prototype.array.isRequired 
}
function mapStateToProps(state){

    return{
        games:  state.games
    }
}
export default connect(mapStateToProps)(GamesPage);