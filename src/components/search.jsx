import React from 'react'

export default function Search(props) {
    return (
        <div className="container mt-2">
            <form className="input-group">
                <div className="form-outline">
                    <input type="search" id="form1" className="form-control" onChange={props.handle} />
                </div>
                <button type="submit" className="btn btn-primary">
                    Search
                </button>
            </form>
        </div>
    )
}
