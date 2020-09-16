import React, { Fragment } from 'react';
import './contact-item.css';


export default class ContactItem extends React.Component{
    state = {
        listBase:[
            {id:'m101',name:'Mike Anamendolla', adress:'5842 Hillcrest Rd', phone:'(870) 288-4149', email:'mike.ana@example.com'},
            {id:'m105',name:'Seth Frazier', adress:'7396 E North St', phone:'(560) 180-4143', email:'seth.frazier@example.com'},
            {id:'w102',name:'Rosemary Porter', adress:'5267 Cackson St', phone:'(497) 160-9776', email:'rosemary.porter@example.com'},
            {id:'w104',name:'Debbie Schmidt', adress:'3903 W Alexander Rd', phone:'(867) 322-1852', email:'debbie.schmidt@example.com'}
        ]
    }
    
    render(){
        const listItems = this.state.listBase.map(({id,name,adress,phone,email})=>{
            return(
                <li className="list-group-item">
                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img src={`http://demos.themes.guide/bodeo/assets/images/users/${id}.jpg`} alt={name} className="rounded-circle mx-auto d-block img-fluid" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
                            <label className="name lead">{name}</label>
                            <br /> 
                            <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title={adress}></span>
                            <span className="text-muted">{adress}</span>
                            <br />
                            <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title={phone}></span>
                            <span className="text-muted small">{phone}</span>
                            <br />
                            <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title={email} title=""></span>
                            <span className="text-muted small text-truncate">{email}</span>
                        </div>
                    </div>
                </li>
            )
        })
        return(
            <Fragment>
                {listItems}
                {/* <li className="list-group-item">
                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
                            <label className="name lead">Mike Anamendolla</label>
                            <br /> 
                            <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="5842 Hillcrest Rd"></span>
                            <span className="text-muted">5842 Hillcrest Rd</span>
                            <br />
                            <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                            <span className="text-muted small">(870) 288-4149</span>
                            <br />
                            <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title="" title=""></span>
                            <span className="text-muted small text-truncate">mike.ana@example.com</span>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img src="http://demos.themes.guide/bodeo/assets/images/users/m105.jpg" alt="Seth Frazier" className="img-fluid rounded-circle d-block mx-auto" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <span className="name lead">Seth Frazier</span>
                            <br />
                            <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="7396 E North St"></span>
                            <span className="text-muted">7396 E North St</span>
                            <br />
                            <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(560) 180-4143"></span>
                            <span className="text-muted small">(560) 180-4143</span>
                            <br />
                            <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="seth.frazier@example.com"></span>
                            <span className="text-muted small text-truncate">seth.frazier@example.com</span>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img src="http://demos.themes.guide/bodeo/assets/images/users/w102.jpg" alt="Rosemary Porter" className="img-fluid rounded-circle d-block mx-auto" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <span className="fa fa-envelope fa-lg text-danger float-right" title="left you a message"></span>
                            <span className="name lead">Rosemary Porter</span>
                            <br /> <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="5267 Cackson St"></span>
                            <span className="text-muted">5267 Cackson St</span>
                            <br />
                            <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(497) 160-9776"></span>
                            <span className="text-muted small">(497) 160-9776</span>
                            <br />
                            <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="rosemary.porter@example.com"></span>
                            <span className="text-muted small text-truncate">rosemary.porter@example.com</span>
                            <br />
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img src="http://demos.themes.guide/bodeo/assets/images/users/w104.jpg" alt="Debbie Schmidt" className="img-fluid rounded-circle d-block mx-auto" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <label className="name lead">Debbie Schmidt</label>
                            <br />
                            <span className="fa fa-fw fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="3903 W Alexander Rd"></span>
                            <span className="text-muted">3903 W Alexander Rd</span>
                            <br />
                            <span className="fa fa-fw fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(867) 322-1852"></span>
                            <span className="text-muted small">(867) 322-1852</span>
                            <br />
                            <span className="fa fa-fw fa-envelope fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="debbie.schmidt@example.com"></span>
                            <span className="text-muted small text-truncate">debbie.schmidt@example.com</span>
                        </div>
                    </div>
                </li> */}
            </Fragment>
        )
    }
}