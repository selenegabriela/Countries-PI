import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Link } from "react-router-dom";
import Home from './components/Home'
import Paginator from "./components/Paginator";
import LandingPage from './components/LandingPage'
import Card from "./components/Card";

configure({ adapter: new Adapter() });

describe("<Home />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("deberia renderizar 1 componente <Paginator />", () => {
    expect(wrapper.find(Paginator)).toHaveLength(1);
  });

});

describe("<LandingPage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LandingPage />);
  });

  it("Deberia renderizar 1 <Link />", () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });
  it('El Link debe cambiar la ruta hacia "/home".', () => {
    
    expect(wrapper.find(Link).at(0).prop("to")).toEqual("/home");
    
  });
});

describe("<Card />", () => {
 
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Card />);
    });
    it("Renderiza un <img>", () => {
      expect(wrapper.find("img")).toHaveLength(1);
    });
    it("Renderiza un <h2>", () => {
      expect(wrapper.find("h2")).toHaveLength(1);
    });
    it("Renderiza un <h3>", () => {
      expect(wrapper.find("h3")).toHaveLength(1);
    });
  
});


