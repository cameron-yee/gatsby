import React from 'react'
// import SleepLog from '../components/sleeplog'

import Layout from '../components/layout'
import Content from '../components/content'
import { Link } from 'gatsby'
// import { graphql } from 'gatsby'
import axios from 'axios'; 
import 'bulma/bulma.sass'

class LoopbackSleep extends React.Component {
  constructor(props) {
    super(props);
    // this._source = axios.CancelToken.source();
    this.state = {
      posts: [],
      ids: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    // this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  
  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/accounts`, {"fields": "id"})
      .then(response => {
        let users = response.data;
        let ids = [];
        for(let i = 0; i < users.length; i++) {
          ids.push(users[i]['id']);
        }
        // this.setState({ids: ids}); 
        console.log(ids);
        return ids;
      })
      .then(ids => {
        for(let i = 0; i < ids.length; i++) {
          console.log(ids[i]);
          let filter = JSON.stringify({"where": {"accountId": ids[i]}});
          axios
            // .post(`http://localhost:1337/posts`, {
            // cancelToken: this._source.token,
            .get(`http://localhost:3000/api/sleepposts?filter=${filter}`)
            .then(response => {
              console.log(response);
              this.setState({posts: this.state.posts.concat(response.data)});
              console.log(this.state.posts);
            })
            .catch(error => {
              console.log('ERROR:', error)
            })
        }
      })
      .catch(error => {
        console.log('ERROR:', error)
      })


  }


  // componentWillUnmount() {
  //   this._source.cancel( 'Unmounted' );
  // }

    // const avg = sum/edge.node.posts.length;

    // const posts = edge.node.posts.map(post => {
    //   return(
    //     <div key={post.id}>
    //       <p>Day: {post.day}</p>
    //       <p>Bedtime: {post.bedtime}</p>
    //       <p>Wakeup: {post.wakeup}</p>
    //       <p>Hours: {post.hours}</p>
    //       <p>Notes: {post.notes}</p>
    //       <hr />
    //     </div>
    //   )
    // })

    // const users = 
    //   (<div className="column is-half" key={edge.node.id} user={edge.node}>
    //     <h1>Username: {edge.node.username}</h1>
    //     <h3>Average hours of sleep per night: {avg}</h3>
    //     <div>{posts}</div>
    //   </div>)

    // this.setState({users: users});
  render() {
    return (
      <Layout>
        <Content>
          {/* <SleepLog/> */}
          <div className="columns is-multiline">
            <div className="column is-full">
              <Link className="button is-primary" to="/newpost">New Post</Link>
            </div>
            {/* {this.state.ids.map(id => {
              return (
                <div className="column is-half" key={id}> */}
                {this.state.posts.map(post => 
                  (
                    <div className="column is-half" key={post.id}>
                      <p>{post.bedtime}</p>
                      <p>{post.wakeup}</p>
                      <p>{post.day}</p>
                      <p>{post.hours}</p>
                      <hr />
                    </div>
                  ) 
                )}
                {/* </div>
              )
            })}  */}
            {/* {this.state.posts[0]} */}
          </div>
        </Content>
      </Layout>
    )
  }
}

export default LoopbackSleep