import React from 'react';


class Repository extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() { 
        return (
            <div className="dashboard__repository">
                <p>{this.props.name}</p>
                <p>{this.props.description}</p>
    </div>
        );
    }
};

export default Repository;


