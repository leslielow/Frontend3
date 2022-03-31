import React from 'react';

class Option extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(opt) {
        this.props.setOpt(opt)
    }

    render() {
        const { options } = this.props;
        return (
            <>
                {options && options.opciones &&
                    <div className="opciones">
                        <div className="opcion">
                            <button className='botones' onClick={() => this.handleClick("a")}>
                                A
                            </button>
                            <h2>{options.opciones.a}</h2>
                        </div>
                        <div className="opcion">
                            <button className='botones' onClick={() => this.handleClick("b")}>
                                B
                            </button>
                            <h2>{options.opciones.b}</h2>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default Option;