var React =  require("react");
var listItems = React.createClass({
    render : function(){
        return(
            <li>
                <h4>{this.props.ingredients}</h4>
            </li>
        );
    }
});

module.exports = listItems;