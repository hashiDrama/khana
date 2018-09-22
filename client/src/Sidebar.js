import React from 'react';
import ReactDOM from 'react-dom';
import chef from './chef-icon.png';
import './sidebar.css';


export default class Sidebar extends React.Component{
	render(){
		return(
		<div className="container">
    <div className="view-account">
      <section className="module">
      <div className="module-inner">
			<div className ="side-bar">
				<div className = "user-info">
					<img className="img-profile img-circle img-responsive center-block" src={chef} alt="" />
					<ul className = "meta list list-unstyled">
						<li className = "name">
							Rebecca Chauhan<label className = "label label-info">Delhi NCR</label>
						</li>
						<li className="email"><a href="#">Rebecca.c@website.com</a></li>
            <li className="activity">Last logged in: Today at 2:18pm</li>
					</ul>
				</div>
				<nav className="side-menu">
                        <ul className="nav">
                            <li><a href="#"><span className="fa fa-user"></span> Profile</a></li>
                            <li><a href="#"><span className="fa fa-cog"></span> Settings</a></li>
                            <li className="active"><a href="#"><span className="fa fa-credit-card"></span> Billing</a></li>
                            <li><a href="#"><span className="fa fa-envelope"></span> Messages</a></li>

                            <li><a href="user-drive.html"><span className="fa fa-th"></span> Drive</a></li>
                            <li><a href="#"><span className="fa fa-clock-o"></span> Reminders</a></li>
                        </ul>
         </nav>
			</div>
			<div className="content-panel">
				<div className="content-header-wrapper">

                    </div>
                    <div className="content-utilities">
				</div>
			</div>
		</div>
	</section>
</div>
</div>
		);
	}
}
