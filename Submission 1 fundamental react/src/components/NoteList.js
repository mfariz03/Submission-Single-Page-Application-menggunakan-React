import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';


function NoteList ({notes, onDelete}){
    return(
        notes.length > 0 ?
        <div className='note-list'>
            {
                notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        {...note} />
                    ))
            }
        </div> :
        <p className='notes-list__empty-message'>Nothing Note</p>
    );
}

NoteList.propTypes = {
    notes : PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete : PropTypes.func.isRequired,
}

export default NoteList;