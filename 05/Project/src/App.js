import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <section>
            <h1>
              나의 메모
            </h1>
            <form method="post" action="http://localhost:4000/write/memo">
              <table>
                <tr>
                  <td>
                    <label>작 성 자</label>
                  </td>
                  <td>
                    <input type="text" name="writer" placeholder="작성자"/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>작성날짜</label>
                  </td>
                  <td>
                    <input type="date" name="date"/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>내 용</label>
                  </td>
                  <textarea rows="4" cols='40' placeholder='writing your memo' name="memo"/>
                </tr>
                <input type='submit'/>
              </table>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
