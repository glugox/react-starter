
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Table extends Component {

    style = {
        alignSelf: 'center',
        paddingLeft: '4px'
    };

    static propTypes = {
        name: PropTypes.string.isRequired,
        hideText: PropTypes.bool.isRequired,
        color: PropTypes.string
    };

    render() {
        return (
            <table className="ui celled padded table">
                <thead>
                  <tr><th className="single line">Evidence Rating</th>
                  <th>Effect</th>
                  <th>Efficacy</th>
                  <th>Consensus</th>
                  <th>Comments</th>
                </tr></thead>
                <tbody>
                  <tr>
                    <td>
                      <h2 className="ui center aligned header">A</h2>
                    </td>
                    <td className="single line">
                      Power Output
                    </td>
                    <td>
                      <div className="ui star rating" data-rating="3" data-max-rating="3"></div>
                    </td>
                    <td className="right aligned">
                      80% <br>
                      <a href="#">18 studies</a>
                    </td>
                    <td>Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.</td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="ui center aligned header">A</h2>
                    </td>
                    <td className="single line">
                      Weight
                    </td>
                    <td>
                      <div className="ui star rating" data-rating="3" data-max-rating="3"></div>
                    </td>
                    <td className="right aligned">
                      100% <br>
                      <a href="#">65 studies</a>
                    </td>
                    <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr><th colspan="5">
                    <div className="ui right floated pagination menu">
                      <a className="icon item">
                        <i className="left chevron icon"></i>
                      </a>
                      <a className="item">1</a>
                      <a className="item">2</a>
                      <a className="item">3</a>
                      <a className="item">4</a>
                      <a className="icon item">
                        <i className="right chevron icon"></i>
                      </a>
                    </div>
                  </th>
                </tr></tfoot>
              </table>
        );
    }
}