/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <div onClick={this.toggle}>
          <h3>
            {this.props.node.title}
          </h3>
          {this.props.node.images.map(({ resize }, index) => (
            <img src={resize.src} width={resize.width} height={resize.height} />
          ))}
          <div>
            {this.props.node.description.description}
          </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.node.title}</ModalHeader>
          <ModalBody>
            {this.props.node.images.map(({ resize }, index) => (
              <img src={resize.src} width={resize.width} height={resize.height} />
            ))}
          </ModalBody>
          <ModalFooter>
            {this.props.node.description.description}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default () => (
  <StaticQuery
  query={graphql
    `
      query {
        allContentfulPortfolioItem {
         	edges {
            node {
              title
              description {
                description
              }
              images {
                resize(width: 250) {
                  src
                  width
                  height
                }
              }
              createdAt
            }
          }
        }
      }
    `
  }

  render={data => (
    <div className="portfolio">
      {data.allContentfulPortfolioItem.edges.map(({ node }, index) => (
        <PortfolioItem node={node} />
      ))}
      {data.allContentfulPortfolioItem.edges.map(({ node }, index) => (
        <PortfolioItem node={node} />
      ))}
    </div>
  )}
 />)
