import './App.css';
import React, { useState } from 'react';

function App() {
  const [visible, setVisibleSection] = useState('section1');

  const showSection = (section) => {
    setVisibleSection(section);
  }
  
  const [vis, setVisSection] = useState('');

  const showSections = (section) => {
    setVisSection(section);
  }
  
  
  return (
    <div className="App">
      <ul className="nav-headers">
        <li className="nav-item"><b>Theme Park</b></li>
        <li className="nav-item">Sign Out</li>
      </ul>

        <div className="welcome-back-visitor">
          Welcome back, {"{"}Visitor name{"}"}!
        </div>
        <div className="group">
          <div className="view">
            <div className="mainbox">
            <div className="menubox">
                        <div className="Menutxt">Menu</div>
            </div>
            <div className="optionbox">
              <button className="AccInfoButton" onClick={() => showSection('section1')}>
                Account Information
              </button>
              <button className="TicketInfoButton"onClick={() => showSection('section2')}>
                Purchase a Ticket
              </button>
              <button className="ParkInfoButton"onClick={() => showSection('section3')}>
                Park Information
              </button>
              <button className="DeleteButton" onClick={() => showSection('section4')}>
              Delete Account
              </button>
            
            </div>
            <div className="Menutxt">Menu</div>
            

            <div style={{ display: visible === 'section1' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Your Account Information - VisitorID:</h2>
                  <div class = "Account-Info">
                  <table>
                      <tr>
                        <th>First Name </th>
                        <th>Last Name </th>
                        <th>Username </th>
                        <th>Email </th>
                        <th>Adress </th>
                        <th>Payment Method </th>
                      </tr>
                      <tr>
                        <td>Jane</td>
                        <td>Doe</td>
                        <td>JaneUSer</td>
                        <td>EmailJaneUser@jane.com</td>
                        <td>EmailJaneUser Street</td>
                        <td>124324324324</td>
                      </tr>
                  </table>
                  <p> Update the above information
                  </p>
                  
                    <div className="UpdateAccInfoSection">
                      <form id="edit" method="POST" action="">
                          <p>
                              <label for="FirstName ">First Name:  </label>
                              <input id="FName" type="text" name="username1" value=""/>
                              <label for="LastName">Last Name: </label>
                              <input id="LName" type="text" name="username1" value=""/>
                              <label for="Username">Username: </label>
                              <input id="UName" type="text" name="username1" value=""/>
                              <label for="Email">Email: </label>
                              <input id="Email" type="text" name="username1" value=""/>
                              <label for="Address">Address: </label>
                              <input id="Address" type="text" name="username1" value=""/>
                              <label for="PaymentMethod">Payment Method: </label>
                              <input id="PayMethod" type="text" name="username1" value=""/>
                          </p>
                          <p>
                              <button id="update1submit" type="submit">Submit</button>
                          </p>

                      </form>
                      <h2> Security Information
                       </h2>
                       <table>
                      <tr>
                        <th>Current Password </th>
                      </tr>
                      <tr>
                        <td>Jane234324</td>
                      </tr>
                      </table>
                  <p> Do you want to change you password?</p>
                  <div className="UpdateAccPasSection">
                      <form id="edit" method="POST" action="">
                          <p>
                              <label for="Password ">New Password:  </label>
                              <input id="Password" type="text" name="username1" value=""/>
  
                          </p>
                          <p>
                              <button id="update1submit" type="submit">Submit</button>
                          </p>

                      </form>
                   </div>
                   </div>
                  </div>
              </div>
            </div>

            <div style={{ display: visible === 'section2' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Purchase a ticket</h2>
                <p>Ticket Information</p>
                <table>
                      <tr>
                        <th>Ticket Type </th>
                        <th>Benefits </th>
                        <th>Cost </th>
                      </tr>
                      <tr>
                        <td>Day Pass</td>
                        <td>$33</td>
                        <td>Ride Photos or Souvenirs</td>
                      </tr>
                      <tr>
                        <td>Seasonal Pass</td>
                        <td>$61</td>
                        <td>Special Shows or Entertainment</td>
                      </tr>
                      <tr>
                        <td>Annual Pass</td>
                        <td>$151</td>
                        <td>Discounts on Merchandise & Dining plan </td>
                      </tr>
                      <tr>
                        <td>Premium Pass</td>
                        <td>$351</td>
                        <td>Fast Pass </td>
                      </tr>
                </table>
                <p>Complete the section below to get your tickets</p>
                <div className="PurchTicketSection">
                      <form id="edit" method="POST" action="">
                          <p>
                              <label for="FirstName ">First Name:  </label>
                              <input id="FName" type="text" name="username1" value=""/>
                              <label for="LastName">Last Name: </label>
                              <input id="LName" type="text" name="username1" value=""/>
                              <label for="Address">Address: </label>
                              <input id="Address" type="text" name="username1" value=""/>
                              <label for="Email">Account Password: </label>
                              <input id="Email" type="text" name="username1" value=""/>

                              <label for="Username">Card Number: </label>
                              <input id="UName" type="text" name="username1" value=""/>



                          </p>
                          <p>
                              <button id="update1submit" type="submit">Submit</button>
                          </p>

                      </form>
                  </div>
                  <br></br><br></br><br></br><br></br>
                  <h2>Previous Purchases</h2>
                  <table class = "PrevTicketPurch" id = "PrevTicket">
                  <tr>
                    <th>Date:</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Type:</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Amount:</th>
                    <td></td>
                  </tr>
                 </table>

                 <p> You must show your customer ID before you can get into the park<br></br>This can be found in your account information.</p>


              </div>
            </div>

            <div style={{ display: visible === 'section3' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Some things you should know before you get here.</h2>
                <p>Section 3 content goes here... Some things you should know before you get here. Park infoPark infoPark infoPark infoPark infoPark infoPark info</p>
              </div>
            </div>

            <div style={{ display: visible === 'section4' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Are you sure you want to delete your account?</h2>
                <p> Deleting your account will mean that you'll know longer have access to it. Are you ok with that?</p>
                <button className="DeleteAccButtonConfirm"onClick={() => showSection('section5')}>
                Yes, that's ok.
              </button>

              </div>
            </div>
            </div>
          </div>
        </div>
      


</div>

   

    
  );
}

export default App;
