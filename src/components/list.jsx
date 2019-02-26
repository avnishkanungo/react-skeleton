var React = require("react");
var listItems = require("./ListItems.jsx");

var ingredients = [{id:1, text:"ham"}, {id:2, text:"Baking Soda"}, {id:3, text:"Chicken"}];

var List = React.createClass({
    render: function(){
        var ListItems = ingredients.map(function(item) {
            return <listItems key = {item.id} ingredients = {item.text} />;
        });

        return(<ul>{ListItems}</ul>);
    }    
});

module.exports = List;