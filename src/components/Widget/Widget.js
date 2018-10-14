import React, { Component } from 'react';
import { withRouter } from "react-router";
import s from './Widget.module.css';

class Widget extends Component {
    render(){
        const {domain} = this.props; 
        const {
            match: {
                params: {
                    domainname = domain
                } = {}
            } = {}
        } = this.props;
        return (
            <div className={s['widget']}>
                <div className={s['website-msg']}>
                    Thanks for visiting <strong>{domainname}</strong>
                    <div className={s['website-msg-subtext']}>
                    But unfortunately, this page is not available right now. We don't want to deceive you and have a purpose of your visit. Your support <strong>Baby Basavaraj</strong> to save his life or Go to our <a href='#' >home page </a>
                    </div>
                </div>
                <a href='https://milaap.org/fundraisers/support-j-basavaraj' >
                    <img 
                        className={s['campaign-img']}
                        src="https://d2zcpk7yfyf2dq.cloudfront.net/milaap/image/upload/s--Z3a-FkXT--/c_fill,e_viesus_correct,g_faces,h_452,w_603/b_rgb:ffffff,c_scale,co_rgb:000000,fl_relative,g_south_east,l_text:open%20sans_15%3A%20%20%C2%A9%202018%20milaap.org%20%20,o_50,w_0.3,x_2,y_2/v1538116852/production/images/campaign/49464/Milaap-Basava-Raju-34_t6cofs_1538054488_1538116848.jpg">
                    </img>                
                </a>
                <div className={s['campaign-stats']}>
                    <div className={s['campaign-raised']}>Rs.1,314,221</div>
                    <div className={s['campaign-goal']} >raised of Rs.1,800,000 goal</div>
                    <div className={s['campaign-supporters']}>728 Supporters</div>
                </div>
                <div className={s['progress']}>
                    <div className={s['progress-bar']}>
                        <div className={s['progress-done']}></div>
                    </div>
                </div>

                <div className={s['pitch']}>
                    2 year-old Baby Basavaraj's liver is severely infected and damaged. Only an urgent liver transplant can save his life.
                </div>

                <div className={s['support']}>
                    <a href='https://milaap.org/fundraisers/support-j-basavaraj' target='_blank' className={s['support-btn']}>Support Basavaraj</a>
                </div>
            </div>
        );
    }
}
export default withRouter(Widget);