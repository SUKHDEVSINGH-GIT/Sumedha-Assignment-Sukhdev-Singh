import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
         <>

<div className="col-sm-3"> Present </div>
<div className="col-sm-3"> Absent  </div>
<div className="col-sm-3">Half Day </div>
<div className="col-sm-3">Paid Holiday </div>
<br/>
<br/>
<br/>
      <div id="Table">
        
        <table>
          <tbody>
         
            <tr>
              <th>Username</th>
              <th>Mobile No.</th>
              
            </tr>
            {items.map(item => {
              return (
                  <>
                 
                <tr>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <button>Present</button>
                  <button>Absent</button>
                  <button>Half Day </button>
                   
                </tr>
               
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      </>);
  }
}

export default Table;