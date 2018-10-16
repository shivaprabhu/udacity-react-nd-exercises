import React from "react";

function ListAddDelete(props){
  console.log(props.noItemsFound)
	return (
    	<div>
          <form onSubmit={props.addItem}>
              <input
                type="text"
                placeholder="Enter New Item"
                value={props.value}
                onChange={props.handleChange}
              />
          	<button disabled={ () => {props.inputIsEmpty()}}>Add</button>
        </form>
        	<button onClick={props.deleteLastItem}>Delete Last Item </button>
		</div>
    )
}

export default ListAddDelete;