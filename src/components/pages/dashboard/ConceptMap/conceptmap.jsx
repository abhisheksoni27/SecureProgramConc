import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Blank = React.createClass({
  render: function() {
    return (
      <div className="overview-map" key="ConceptMap">
        <Link to="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">Reports</Link>
        <h2>Concept Map <small>of secure programming</small></h2>
        <Jumbotron>
          <h4>A visualization chart for interrelations between secure programming concepts.</h4>
          {/* <br />

          <br />
          <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> */}
          <div>
            <img src="https://lh3.google.com/u/0/d/1PeUZKH71YC-wTf_HairhC9kGn2pzqQnm=w1920-h949-iv1" height="600" /><br />
            <img src="https://lh3.google.com/u/0/d/1HxIpuZJUzfgAQLsFN0FeZiT_NU-RtKsR=w1920-h619-iv1" height="80"/>
            <br />
            <b>Very Important</b><br />

            1.  Assume whatever can go wrong will.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example: Never use gets().<br />

            2.  Assume any input is going to be malformed or not what you expect.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Check validity of input parameters.<br />

            3.  Do not make a security decision based on untrusted inputs.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Avoid Double-Free vulnerabilities.<br />

            4.  Check parameters to ensure that all arguments are of the correct type and will not overflow any arrays.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Improperly bounded string copies.<br />

            5.  Use data abstraction to enable the compiler to perform rigorous type checking and to enforce constraints on values and lengths.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Implicit type<br />

            6.  Understand the context in which the program will execute.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Deadlock in a multi-threaded program.<br />

            7.  Validate your input stream to ensure that the commands invoked are expected and no other commands are injected.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Avoid race condition while writing to a file using shell script.<br />

            8.   When performing input validation take into account how programs invoked with those arguments could interpret them.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Improper use of sizeof() function in strncpy() causes overflow.<br />

            9.   Avoid hard-coded passwords and secrets in your program.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Storing passwords in plaintext .<br />

            10.  Use well known and accepted cryptographic algorithms and implementations of those algorithms.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't use obsolete or deprecated cryptographic algorithms or create your own algorithms.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Use of broken or risky cryptographic algorithms.<br />

            11. Use well known and accepted cryptographic random number generation.Don't use obsolete or deprecated cryptographic algorithms or create your own

            algorithms.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Cryptographically weak pseudo-random number generator.<br />

            12.  There are many tools to help you create a secure program, please take advantage of them. &nbsp;&nbsp;&nbsp;&nbsp;Example: SPC Clinic<br />
            <br />

            <b>Important</b><br />

            A. If you have no reason to trust it, don't trust it.Take greater care with any input you have not generated.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Check the validity of input parameters.<br />

            B. If it cannot happen, check for it. Someone may modify the program in such a way that it can happen... or you may be wrong.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Avoid race conditions when doing file operations by using the file descriptor.<br />

            C. Do not use input or constructor string functions that do not perform any bound checking.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Using gets( ) causes buffer overflow. Use fgets( ) instead.<br />

            D. Do not use input or constructor functions that cannot check the length of the input. &nbsp;&nbsp;&nbsp;&nbsp;Example: Using gets( ) causes buffer overflow. Use fgets( ) instead.<br />

            E.  C and C++ compilers generally do not check types rigorously. A developer can increase this level of checking by turning or compiler warnings, which will often

            catch more type errors than if they are not used. Some examples are given below:<br />

            &nbsp;&nbsp;&nbsp;&nbsp;(a) Use compiler command line arguments to warn about incorrect results when unsigned and signed integers are compared.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;(b) Use format specifiers to print output values.<br />

            F.  Avoid calls to malloc( ) with parameter (number of bytes to be allocated)set to 0. Either the function returns NULL, or it returns a pointer to space that cannot

            be used  without overwriting unallocated memory.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Avoid calling malloc(size_t size) with value of size parameter as 0.<br />

            G. Control the input values when possible by limiting them to a finite set. Some examples are given below.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;(a) Example 1.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;(b) Example 2.<br />

            H. Calling functions with null parameters for input should be checked and defended against.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Avoid calling malloc(size_t size) with value of size parameter as 0.<br />

            I. Type conversion issues especially for cases that may result in integer wrap-around and overflows.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Non-compliant comparisons.<br />

            J. Rules for pointer arithmetic as vulnerabilities can arise when addition or size checks involve two pointer types.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Arithmetic involves two pointer types.<br />

            K. When performing input validation make sure that any validated path does not allow escaping from a restricted directory.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Canonicalize path names originating from untrusted sources.<br />

            L. Before creating a directory or file, make sure you have set the correct default permission specification.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Create files with appropriate access permissions.<br />

            M. Be wary of off-by-one errors. Some examples are given below.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;(a) Check size or range of integer values to avoid numeric overflows.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;(b) Wrong use of size_t parameter of strncpy() causes off-by-one error.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;(c) Incorrect initiation and continuation condition causes off-by-one error.<br />

            N.  When using format string functions, make sure that the format string can be authenticated/trusted. Some examples are given below.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;(a) Never let the user input format string/s.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;(b) Buffer Overflow.<br />
            <br />

            <b>Somewhat important</b><br />

            i. Hide details that users don't need to know about. Some examples are given below.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;(a) Information exposure through an error message.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;(b) Intentional information exposure.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;(c) Information exposure through discrepancy.<br />

            ii. Avoid side effects in arguments to unsafe macros. If developer is using a macro that uses its arguments more than once, then the developer must avoid passing any

            arguments with side effects to that macro.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Using unsafe macros.<br />

            iii. Use parentheses around macro replacement lists. Otherwise operator precedence may cause the expression to be computed in unexpected ways.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Use parenthesis around macro replacement lists.<br />

            iv. Minimise the scope of variables and functions, This prevents many unexpected changes to the variables due to programming error.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Minimise the scope of variables and functions.<br />

            v. When the memory a pointer points to is freed, the pointer should be reset to NULL. Otherwise, these dangling pointers could cause writing to freed memory, and cause

            a double free.<br />

            &nbsp;&nbsp;&nbsp;&nbsp;Example: Avoid double-free vulnerabilities
          </div>
        </Jumbotron>
      </div>


    );
  }

});

export default Blank;
