import React from 'react'

const ThoughtForm = ({newThought, handleNewThought, handleFormSubmit}) => {

    return (
        <section>
            <form className='card grey' onSubmit={handleFormSubmit}>
                <h2>What's making you happy right now?</h2>
                <label htmlFor='add-thought'>
                    <textarea 
                    className='text-field'
                    value={newThought} 
                    onChange={handleNewThought} 
                    placeholder ='Share your happy thought...'/>
                </label>
                <button
                    className='form-button'
                    type='submit'
                    disabled={newThought.length < 5 || newThought.length > 140}
                >
                    <span className='heart-icon' role='img' aria-label='heart emoji'>❤️</span><span className='submit-message'>Send Happy Thought</span><span className='heart-icon' role='img' aria-label='heart emoji'>❤️</span>
                </button>
            </form>
        </section>
    )

}


export default ThoughtForm
