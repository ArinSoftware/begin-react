// ilk constructor --> state initialization
// render metodu ilk defa calisti
// onClick eventi çalıştı
// setState state nesnesini guncelledi --> triggered render
// render metodu guncel JSX i sayfada gosteriyor

import React from 'react';

class Collapse extends React.Component {

    constructor() {
        super();

        this.state = {
            showContent: false
        }

/*         this.showMore = () => {
            console.log(this)
        } */

        /* this.showMore = this.showMore.bind(this) */
        
    }

/*     showMore() {
        this.setState({showContent: true})
        //console.log(this)
    }  */

    showMore = () => {
        //console.log(this)
        this.setState({showContent: !this.state.showContent})

/*         this.state = {
            showContent: true
        } */
    }
    
    render() {
        

        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                        Link with href
                </button>

                {
                    this.state.showContent ? (
                        <div className="collapse show">
                        {this.props.children}
                    </div>
                    ) : null
                }

            </div>
        );
    }

};

export default Collapse;