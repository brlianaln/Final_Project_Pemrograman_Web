import React from "react";

const admin =()=>{
    return(
        <div className="d-flex">
        <nav id="sidebar" className="bg-dark text-white p-3">
          <h2>Admin Dashboard</h2>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-white" href="#"><i className="fas fa-home"></i> Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#"><i className="fas fa-book"></i> Manage Books</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#"><i className="fas fa-users"></i> Manage Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#"><i className="fas fa-chart-line"></i> Statistics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#"><i className="fas fa-sign-out-alt"></i> Logout</a>
            </li>
          </ul>
        </nav>
  
        <div id="content" className="p-4 flex-grow-1">
          <button className="btn btn-secondary d-block d-md-none mb-3" id="toggleSidebar"><i className="fas fa-bars"></i></button>
          <header className="mb-4">
            <h1>Welcome, Admin</h1>
          </header>
  
          <section className="mb-4">
            <div className="row">
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h5 className="card-title">Total Books</h5>
                    <p className="card-text">150</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card text-white bg-success">
                  <div className="card-body">
                    <h5 className="card-title">Total Users</h5>
                    <p className="card-text">200</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card text-white bg-warning">
                  <div className="card-body">
                    <h5 className="card-title">Books Borrowed</h5>
                    <p className="card-text">75</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger">
                  <div className="card-body">
                    <h5 className="card-title">Overdue Books</h5>
                    <p className="card-text">10</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section>
            <h2>Manage Books</h2>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Book Title 1</td>
                    <td>Author 1</td>
                    <td>Fiction</td>
                    <td>
                      <a href="#" className="btn btn-sm btn-primary">Edit</a>
                      <a href="#" className="btn btn-sm btn-danger">Delete</a>
                    </td>
                  </tr>
                  {/* Tambahkan lebih banyak buku sesuai kebutuhan */}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    );
  }
export default admin