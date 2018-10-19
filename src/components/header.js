import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'
import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


// let getLinks = (links) => {
//   let link_elems = [];
//   for(let i = 0; i < links.length; i++) { 
//     let ugly_text = links[i].substr(1);
//     console.log(ugly_text);
//     let cap = ugly_text[0].toUpperCase();
//     console.log(cap);
//     let link_text = cap + ugly_text.substr(1);
//     console.log(link_text);
//     link_elems.push(<li><Link to={links[i]}>{link_text}</Link></li>);
//   }

//   console.log(link_elems);
//   return link_elems;
// }

// let typeOfProp = (prop) => {
//   // console.log(prop.links[0]);
//   console.log(prop);
//   console.log(typeof(prop));
// }
// const Header = ({ siteTitle, links }) => (

const Header = (props) => (
  <div className={headerStyles.headerbar}>
    <div className={headerStyles.children}>
      <Grid>
        <Grid.Row>
                <Grid.Column width={3}>
                  <h1>
                    <Link className={headerStyles.link} to="/">{props.siteTitle}</Link>
                  </h1>
                </Grid.Column>
                <Grid.Column width={13}>
                  <ul className={headerStyles.items}>
                    {(props.links).map((link, i) => {
                      let ugly_text = link.substr(1);
                      let cap = ugly_text[0].toUpperCase();
                      let link_text = cap + ugly_text.substr(1);
                      return (<li key={i}><Link className={headerStyles.items} to={link}>{link_text}</Link></li>);

                    })}
                  </ul>
                </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
)

export default Header
