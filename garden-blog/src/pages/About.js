/*
    ./src/pages/About
    infos about
*/

import React from 'react';
import Layout from '../components/Layout';

const About = () => {
    return (
        <Layout>
                <div className="container">
                    <div className="row mb60 text-center">
                        <div className="col-sm-12">
                            <h3 className="section-title">All About Us</h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">                      
                            <p className="lead mb40">Interactively visualize web-enabled markets vis-a-vis future-proof total linkage. Competently parallel task economically sound networks before effective systems. Assertively formulate premier methodologies rather than client-focused products. Energistically customize equity invested imperatives via ethical outsourcing. Competently parallel task compelling technologies through next-generation initiatives.</p>
                            <p>Energistically evisculate 2.0 strategic theme areas via extensible sources. Conveniently procrastinate client-focused models through out-of-the-box systems. Holisticly parallel task cross functional synergy rather than low-risk high-yield experiences. Conveniently myocardinate premier networks after seamless materials. Competently build technically sound applications after exceptional applications.</p>
                            <p>Competently impact multifunctional resources through cross-platform bandwidth. Globally reinvent B2C manufactured products and cross functional portals. Quickly seize cross-unit partnerships rather than premier data. Professionally evisculate value-added communities whereas reliable deliverables. Monotonectally parallel task e-business interfaces with distinctive resources.</p>
                        </div>

                        <div className="col-sm-4">
                            <div className="panel-group styled-accordion" id="accordion" role="tablist" aria-multiselectable="true">
                                <div className="panel panel-default">
                                    <div className="panel-heading panel-open smoothie" role="tab" id="headingOne">
                                        <h4 className="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Summer Special</a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <div className="panel-body">
                                            <p>Phosfluorescently e-enable multidisciplinary architectures without team driven services. Credibly innovate high-payoff alignments before resource sucking metrics. Uniquely repurpose granular synergy after tactical internal or "organic" sources. Conveniently fabricate go forward niches vis-a-vis top-line partnerships. Progressively brand 24/7 deliverables whereas diverse total linkage.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading smoothie" role="tab" id="headingTwo">
                                        <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Outdoor Persuits</a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div className="panel-body">
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading smoothie" role="tab" id="headingThree">
                                        <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Autumn Event</a>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <div className="panel-body">
                                            <p>Enthusiastically disseminate bleeding-edge ROI rather than accurate results. Collaboratively scale interoperable experiences for dynamic services. Appropriately embrace web-enabled potentialities rather than proactive human capital. Distinctively mesh resource-leveling e-commerce without B2B applications. Rapidiously iterate resource sucking intellectual capital vis-a-vis alternative experiences. Dramatically exploit unique communities rather than customized customer service. Energistically pursue high standards in manufactured products after top-line expertise.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                                                
                        </div>
                    </div>
                </div>
        </Layout>
            
    );
}

export default About;
