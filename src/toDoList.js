import React, { Component } from 'react'
import ToDoItems from './ToDoItems'
import './toDoList.css'
import FlipMove from 'react-flip-move' 
export class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state={items:[]};
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        //We are going to store items in the form of an array
    }
    addItem(e){
        if(this._inputElement.value !==""){
            var newItem = {
                text:this._inputElement.value,
                key:Date.now()

            };
            this.setState((prevState)=>{
                return{
                    items:prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value ="";
        //Clear after submitting
        console.log(this.state.items);
        e.preventDefault();
    }
    deleteItem(key){
        var filteredItems = this.state.items.filter(function (item){
            return (item.key !== key); 
            // removing an item
            
        })
        this.setState({items:filteredItems});
    }
    
    render() {
        return (
            <div className ="toDoListMain" >
                <div className ="header">
                <form onSubmit={this.addItem}>
                    <input ref={(a)=>this._inputElement = a}placeholder="Enter task"></input>
                    <button type="submit">Add</button>
                </form>
                </div>
                <ToDoItems entries={this.state.items} delete = {this.deleteItem}/>
            </div>
        )
    }
}

export default ToDoList
