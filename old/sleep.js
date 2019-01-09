import React from 'react'
// import SleepLog from '../components/sleeplog'

import Layout from '../components/layout'
import Content from '../components/content'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import 'bulma/bulma.sass'

const Sleep = ({data: { allStrapiUser: { edges },},}) => {
  const users = edges
    .map(edge => {
      // const calc = (accumulator, current) => accumulator + current;
      // const sum = edge.node.posts.reduce(calc(edge.node.posts.));
      let sum = 0;  
      for(let i = 0; i < edge.node.posts.length; i++) {
        sum += edge.node.posts[i].hours;
      }
      const avg = sum/edge.node.posts.length;

      const posts = edge.node.posts.map(post => {
        return(
          <div key={post.id}>
            <p>Day: {post.day}</p>
            <p>Bedtime: {post.bedtime}</p>
            <p>Wakeup: {post.wakeup}</p>
            <p>Hours: {post.hours}</p>
            <p>Notes: {post.notes}</p>
            <hr />
          </div>
        )
        })

      return (<div className="column is-half" key={edge.node.id} user={edge.node}>
        <h1>Username: {edge.node.username}</h1>
        <h3>Average hours of sleep per night: {avg}</h3>
        <div>{posts}</div>
      </div>)
    })

  return (
    <Layout>
      <Content>
        {/* <SleepLog/> */}
        <div className="columns is-multiline">
          <div className="column is-full">
            <Link className="button is-primary" to="/newpost">New Post</Link>
          </div>
          {users}
        </div>
      </Content>
    </Layout>
  )
}

export default Sleep

// export const pageQuery = graphql`
//   query SleepQuery {
//     allStrapiUser {
//       edges {
//         node {
//           id,
//           posts {
//             id,
//             day,
//             bedtime,
//             wakeup,
//             hours,
//             notes
//           },
//           username,
//           email
//         }
//       }
//     }
//   }
// `