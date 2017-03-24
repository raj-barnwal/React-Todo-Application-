import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contactbox">
                <div className="row">
                    <div className="col-md-3">&nbsp;</div>
                    <div className="col-md-1">
                        <img src="http://www.ddindia.gov.in/Information/PublishingImages/contact-us.jpg"
                             alt="contact us" title="Contact"/></div>
                    <div className="col-md-4 contacttext"><span className="glyphicon glyphicon-phone"></span>&nbsp;
                        <strong>8527884743</strong><br/>
                        <span className="glyphicon glyphicon-envelope"></span>&nbsp;
                        <strong>barnwal@tothenew.com</strong>
                    </div>
                    <div className="col-md-4">&nbsp;</div>
                </div>
            </div>
        )
    }
}

export default Contact ;
