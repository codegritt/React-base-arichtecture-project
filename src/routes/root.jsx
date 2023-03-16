import React from "react";
import { Outlet, Link } from "react-router-dom";
import { createContact } from "../contacts";

export async function action() {
  const contact = await createContact();
  return { contact };
}
export default function Root() {

    return (
      <>
        <div id="sidebar">
            <h1>(Routing component)</h1>
          <h2>React Router Contacts</h2>
          {/* <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
        
          </div> */}
          <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
        </div>
       

        <div id="detail">
        <Outlet />
      </div>
        <hr></hr>
      </>
    );
  }