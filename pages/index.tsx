import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container ">
        <h1 className="blue-text">Materialize</h1>
        <div className="row">
          <div className="col s12 white ">12-columns</div>
          <div className="col s12 blue">
            This div is 12-columns wide on all screen sizes
          </div>
          <div className="col s12 red">
            This div is 12-columns wide on all screen sizes
          </div>
          <div className="col s6">6-columns (one-half)</div>
          <div className="col s6 offset-s6">6-columns (one-half)</div>
        </div>
        <div className="row">
          <div className="col s7 push-s5">
            <span className="flow-text">
              This div is 7-columns wide on pushed to the right by 5-columns.
            </span>
          </div>
          <div className="col s5 pull-s7">
            <span className="flow-text">
              5-columns wide pulled to the left by 7-columns.
            </span>
          </div>
        </div>

        <div className="card-panel teal lighten-2">
          This is a card panel with a teal lighten-2 class
        </div>
        <div className="card-panel deep-orange lighten-1">
          <p className="white-text flow-text">Это полоска с текстом</p>
        </div>
        <div className="row">
          <div className="grid-example col s12 green">
            <span className="flow-text">I am always full-width (col s12)</span>
          </div>
          <div className="grid-example col s12 m6 pink">
            <span className="flow-text">
              I am full-width on mobile (col s12 m6)
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col z-depth-1 s12">
            <p>s12</p>
          </div>
          <div className="col z-depth-1 s12 m4 l2">
            <p>s12 m4</p>
          </div>
          <div className="col z-depth-1 s12 m4 l8">
            <p>s12 m4</p>
          </div>
          <div className="col z-depth-1 s12 m4 l2">
            <p>s12 m4</p>
          </div>
        </div>
        <div className="row">
          <div className="col z-depth-1 s12 m6 l3">
            <p>s12 m6 l3</p>
          </div>
          <div className="col z-depth-1 s12 m6 l3">
            <p>s12 m6 l3</p>
          </div>
          <div className="col z-depth-1 s12 m6 l3">
            <p>s12 m6 l3</p>
          </div>
          <div className="col z-depth-1 s12 m6 l3">
            <p>s12 m6 l3</p>
          </div>
        </div>
        <div className="valign-wrapper">
          <h5>This should be vertically aligned</h5>
        </div>
        <div>
          <h5 className="left-align">This should be left aligned</h5>
        </div>
        <div>
          <h5 className="right-align">This should be right aligned</h5>
        </div>
        <div>
          <h5 className="center-align">This should be center aligned</h5>
        </div>
        <h4 className="truncate">
          This is an extremely long title that will be truncated
        </h4>
        <a className="btn-floating pulse">
          <i className="material-icons">menu</i>
        </a>
        <a className="btn-floating btn-large red pulse">
          <i className="material-icons">cloud</i>
        </a>
        <a className="btn-floating btn-large cyan pulse">
          <i className="material-icons">edit</i>
        </a>
        <div className="row">
          <div className="col s12 m2">
            <p className="z-depth-1 teal lighten-1">z-depth-1</p>
          </div>
          <div className="col s12 m2">
            <p className="z-depth-2 teal lighten-1">z-depth-2</p>
          </div>
          <div className="col s12 m2">
            <p className="z-depth-3 teal lighten-1">z-depth-3</p>
          </div>
          <div className="col s12 m2">
            <p className="z-depth-4 teal lighten-1">z-depth-4</p>
          </div>
          <div className="col s12 m2">
            <p className="z-depth-5 teal lighten-1">z-depth-5</p>
          </div>
        </div>
        <a className="waves-effect waves-light btn">button</a>
        <a className="waves-effect waves-light btn">
          <i className="material-icons left">cloud</i>button
        </a>
        <a className="waves-effect waves-light btn">
          <i className="material-icons right">cloud</i>button
        </a>
        <div className="row">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="https://sun9-20.userapi.com/s/v1/if2/4zi10ymK9PMPNJNMQaJithe-fPfpyLz2QDUqUs1uCDmssGsteWJhNOQdakXkCt6BpqgNwAqnR3bHqd2nfzsfCr0U.jpg?size=320x320&quality=95&type=album" />
                <span className="card-title">Card Title</span>
                <a className="btn-floating halfway-fab waves-effect waves-light red">
                  <i className="material-icons">add</i>
                </a>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row s12 center">
          <ul className="pagination">
            <li className="disabled">
              <a href="#!">
                <i className="material-icons">chevron_left</i>
              </a>
            </li>
            <li className="active">
              <a href="#!">1</a>
            </li>
            <li className="waves-effect">
              <a href="#!">2</a>
            </li>
            <li className="waves-effect">
              <a href="#!">3</a>
            </li>
            <li className="waves-effect">
              <a href="#!">4</a>
            </li>
            <li className="waves-effect">
              <a href="#!">5</a>
            </li>
            <li className="waves-effect">
              <a href="#!">
                <i className="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
