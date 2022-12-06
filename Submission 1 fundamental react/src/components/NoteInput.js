import React from 'react';
import PropTypes from 'prop-types';
 
class NoteInput extends React.Component {    
    constructor(props){
        super(props);
        this.state = {
            title: '',
            createdAt: '',
            body:'',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onCreatedAtChangeEventHandler = this.onCreatedAtChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        this.setState(() => {
            return{
                title : event.target.value,
            }
        });
    }

    onCreatedAtChangeEventHandler(event){
        this.setState(() =>{
            return{
                createdAt : event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event){
        this.setState(()=> {
            return{
                body : event.target.value,
            }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
    return (
        <form className='note-input' onSubmit={this.onSubmitEventHandler}>
            <input type="text" placeholder="Put Your Title Note ..." value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
            <input type="date" placeholder="Date" value={this.state.createdAt} onChange={this.onCreatedAtChangeEventHandler}/>
            <input type="text" placeholder="Put Your Note here ..." value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
            <button type="submit">Tambah</button>
        </form>
    )
    }
}

NoteInput.propTypes = {
    addNote : PropTypes.func.isRequired,
}
 
export default NoteInput;