import React, { Component } from "react";
import {AddButton} from "./addButton";

function Todo(){
    return (
    <div>
        <AddButton value='💡'/>
        <AddButton value='🎇'/>
        <AddButton value='✨'/>
    </div>
    );
}

  export default Todo;