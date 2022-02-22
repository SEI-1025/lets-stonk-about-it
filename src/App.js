// Imports
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router';


// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Homepage from './components/Homepage';
import Tweet from './components/Tweet';
import Stock from './components/Stock';

function App() {
  const [stockName, setStockName] = useState("");
  const [ticker, setTicker] = useState("");

  return (
    <div className="bg-dark">
      <Router>
        <Navbar className="navbar" style={{ backgroundColor: "#38b262" }} variant="light" sticky="top" expand="lg" collapseOnSelect>
          <Navbar.Brand>
            <div className="nav-logo text-light" style={{ marginLeft: "20px" }}>📈 Lets<span>Stonk</span> 📉</div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-start">
            <Nav className>
              <Nav.Link href="/" className="text-dark">Home</Nav.Link>
              <NavDropdown title="Companies" className="text-light navdropdown" active>
                <NavDropdown.Item as={Link}
                  to="/GME"
                  state={{
                    stockName: "Gamestop Corp",
                    ticker: "GME"
                  }}>GME (Gamestop)</NavDropdown.Item>
                <NavDropdown.Item as={Link}
                  to="/AAPL"
                  state={{
                    stockName: "Apple Inc",
                    ticker: "AAPL"
                  }}
                >AAPL (Apple)</NavDropdown.Item>
                <NavDropdown.Item as={Link}
                  to="/TSLA"
                  state={{
                    stockName: "Tesla Inc",
                    ticker: "TSLA"
                  }}>TSLA (Tesla)</NavDropdown.Item>
                <NavDropdown.Item as={Link}
                  to="/AMC"
                  state={{
                    stockName: "AMC Entertainment Holdings",
                    ticker: "AMC"
                  }}>AMC</NavDropdown.Item>
                <NavDropdown.Item as={Link}
                  to="/AMZN"
                  state={{
                    stockName: "Amazon.com Inc",
                    ticker: "AMZN"
                  }}>AMZN (Amazon)</NavDropdown.Item>
                <NavDropdown.Item as={Link}
                  to="/NVDA"
                  state={{
                    stockName: "NVIDIA",
                    ticker: "NVDA"
                  }}>NVDA (NVIDIA)</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="" className="text-dark">About</Nav.Link>
              <Nav.Link href="" className="text-dark">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/:id' element={<Tweet />} />
          <Route path='/stock' element={<Stock />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;