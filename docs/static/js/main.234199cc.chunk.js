(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(23),i=t.n(o),c=t(170),l=t(172),s=t(171),u=t(2),m=t(3);function d(){var n=Object(u.a)(["\n          * {\n                    padding: 0;\n                    margin: 0;\n                    vertical-align: baseline;\n                    list-style: none;\n                    border: 0;\n                    box-sizing: border-box;\n          }\n"]);return d=function(){return n},n}var f=Object(m.a)(d()),p=t(13),b=t(14),g=t(16),h=t(15),v=t(17),x=t(5),w=t(6),E=t(169);function j(){var n=Object(u.a)(["         \n\n         ul{\n                    border-bottom: 1px solid #ccc;\n                    margin-bottom: 1rem;\n                    padding: 1rem 0;\n          }\n\n          ul a{\n                    font-family: monospace;\n          }\n\n          li{\n                    padding: 0.5rem 0;\n          } \n          \n          @media (min-width: 1024px){\n\n                    h2{                              \n                              padding: 1.3rem;\n                              cursor: pointer;\n                    }                    \n\n                    :hover ul {\n                              display: flex;\n                              flex-direction: column;\n                              position: absolute;\n                    }\n\n                    ul{\n                              border: 0;\n                              background: #000;\n                              display: none;\n                              border-radius: 0 0 5px 5px;\n                              z-index: 1;\n                    }\n\n                    a{                              \n                              padding: 1rem;\n                              color: #fff;\n                    }\n\n                    a:hover{\n                              color: #00bfff;\n                              font-weight: bold;\n                    }\n          }\n"]);return j=function(){return n},n}function y(){var n=Object(u.a)(["\n          padding-top: 1rem;\n          margin: 0 1.5rem;       \n\n          a{\n                    text-decoration: none;\n                    color: #000;                    \n          }          \n\n          @media (min-width: 1024px){ \n                    width: 100%;\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-evenly;\n                    padding: 0;\n                    margin: 0;\n                   \n                    svg{\n                              color: #fff;\n                    }\n\n                    a{\n                              color: #fff;\n                    }                    \n          }\n"]);return y=function(){return n},n}function O(){var n=Object(u.a)(["\n          padding: 0.5rem 1rem;\n          border-bottom: 1px solid #ccc;\n          display: flex;\n          justify-content: flex-end;\n\n          button{\n                    background: #fff;\n          }\n\n          @media (min-width: 1024px){\n                    display: none;\n          }\n"]);return O=function(){return n},n}function k(){var n=Object(u.a)(["\n          background: #fff;\n          width: 250px;\n          height: 100%;\n          position: fixed;\n          right: 0;\n          top:0;\n          border-left: 10px;\n          box-shadow: 2px 10px 8px #ccc;\n          display: ",";\n          overflow-x: hidden;\n          z-index: 1;\n\n          @media (min-width: 1024px){\n                    display: flex;\n                    width: 400px;\n                    height: 100%;\n                    background: #000;\n                    border-left: 0;\n                    box-shadow: 0 0 0;\n                    z-index: 0;\n                    color: #fff;\n                    position: static;\n          }\n"]);return k=function(){return n},n}var z=function(n){return r.a.createElement(C,{show:n.show},r.a.createElement(S,null,r.a.createElement("button",{onClick:n.close},r.a.createElement(x.a,{icon:w.i,color:"#404040",size:"2x"}))),r.a.createElement(B,null,r.a.createElement(P,null,r.a.createElement("h2",null,"Vagas"),r.a.createElement("ul",null,r.a.createElement("li",{onClick:n.close},r.a.createElement(E.a,{to:"/vagas/frontendbr"},"Front-End")),r.a.createElement("li",{onClick:n.close},r.a.createElement(E.a,{to:"/vagas/react-brasil"},"React")),r.a.createElement("li",{onClick:n.close},r.a.createElement(E.a,{to:"/vagas/backend-br"},"Back-End")))),r.a.createElement("h2",null,r.a.createElement("a",{href:"https://github.com/gustavoleste/vagas-dev",target:"_blank",rel:"external noopener noreferrer"},"GitHub ",r.a.createElement(x.a,{icon:w.g,size:"xs"})))))},C=m.b.nav(k(),function(n){return n.show?"block":"none"}),S=m.b.div(O()),B=m.b.div(y()),P=m.b.div(j());function A(){var n=Object(u.a)(["\n          flex: 1;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          padding: 1rem;\n\n          a{\n                    color: #fff;\n                    padding: 1rem;\n                    font-family: sans-serif;\n                    text-decoration: none;\n          }\n          \n\n          button{\n                    background: #000;\n                    outline: none;\n          }\n\n          @media (min-width: 1024px){\n                    button{\n                              display: none;\n                    }\n          }\n"]);return A=function(){return n},n}function F(){var n=Object(u.a)(["\n          width: 100vw;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n\n          @media (min-width: 1024px){\n                    max-width: 1024px;\n          }\n"]);return F=function(){return n},n}function J(){var n=Object(u.a)(["\n          background: #000;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          max-height: 69px;       \n"]);return J=function(){return n},n}var R=function(n){function e(){var n,t;Object(p.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(g.a)(this,(n=Object(h.a)(e)).call.apply(n,[this].concat(r)))).state={show:!1},t.showAndCloseSideBar=function(){t.setState(function(n){return{show:!n.show}})},t}return Object(v.a)(e,n),Object(b.a)(e,[{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement(D,null,r.a.createElement(H,null,r.a.createElement("h1",null,r.a.createElement(E.a,{to:"/"},"DevJobs")),r.a.createElement("button",{onClick:this.showAndCloseSideBar},r.a.createElement(x.a,{icon:w.a,color:"#fff",size:"2x"}))),r.a.createElement(z,{show:this.state.show,close:this.showAndCloseSideBar})))}}]),e}(a.Component),_=m.b.header(J()),D=m.b.div(F()),H=m.b.div(A());function L(){var n=Object(u.a)(["          \n          img{\n                    width: 20rem;\n          }\n"]);return L=function(){return n},n}function I(){var n=Object(u.a)(["           \n          img{\n                    width: 20rem;\n          }\n\n          @media (min-width: 1024px){\n                    padding: 3rem;\n          }\n"]);return I=function(){return n},n}function G(){var n=Object(u.a)(["\n          margin: 2rem 0;\n          \n          p{\n                    font-size: 2rem;\n                    color: #00D8FF;\n                    margin-bottom: 1rem;\n          }\n\n          img{\n                    width: 20rem;\n          }\n\n          @media (min-width: 1024px){\n                    padding: 3rem;\n                    margin:0;\n          }\n"]);return G=function(){return n},n}function U(){var n=Object(u.a)(["\n          @media (min-width: 1024px){\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-around;\n                    max-width: 1024px;\n          }\n"]);return U=function(){return n},n}function W(){var n=Object(u.a)(["          \n          text-align: center;\n          padding: 2rem 1rem;\n          background: #fff;\n          width: 100%;\n          display: flex;\n          justify-content: space-around;\n          align-items: center;\n          flex-direction: column;\n          \n          @media (min-width: 1024px){\n                    h2{\n                              font-size: 3rem;\n                              margin-bottom: 3rem;\n                    }\n          }\n"]);return W=function(){return n},n}function M(){var n=Object(u.a)(["          \n          color: #fff;\n          text-align: center;\n          padding: 2rem 1rem;\n\n          h1{\n                    margin: 1rem 0;\n                    font-size: 4rem;\n                    font-family: sans-serif;\n          }\n\n          p{\n                    font-size: 1.5rem;\n                    font-style: italic;\n                    font-family: monospace;\n                    line-height: 1.5;\n          }\n"]);return M=function(){return n},n}function N(){var n=Object(u.a)(["\n                    display: flex;\n                    flex-direction: column;\n                    align-items: center;\n                    background: #404040;                   \n"]);return N=function(){return n},n}var V=function(){return r.a.createElement($,null,r.a.createElement(q,null,r.a.createElement(x.a,{icon:w.f,size:"5x",color:"#fff"}),r.a.createElement("h1",null,"DevJobs"),r.a.createElement("p",null,"As vagas dos tr\xeas maiores reposit\xf3rios para desenvolvedores do Brasil em um s\xf3 lugar.")),r.a.createElement(K,null,r.a.createElement("h2",null,"Reposit\xf3rios:"),r.a.createElement(Q,null,r.a.createElement(T,null,r.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/16929016?s=400&u=60f7754f634a169adc2027c05a359114d92c4a24&v=4",alt:"logo React-Brasil"}),r.a.createElement("p",null,"react-brasil")),r.a.createElement(X,null,r.a.createElement("img",{src:"https://raw.githubusercontent.com/frontendbr/brand/master/src/png/logo-600px--horizontal--color.png",alt:"logo Front-End Brasil"})),r.a.createElement(Y,null,r.a.createElement("img",{src:"https://avatars3.githubusercontent.com/u/30732658?v=4&s=200.jpg",alt:"Logo Backend Brasil"})))))},$=m.b.main(N()),q=m.b.section(M()),K=m.b.section(W()),Q=m.b.div(U()),T=m.b.div(G()),X=m.b.div(I()),Y=m.b.div(L()),Z=t(20),nn=t.n(Z),en=t(36),tn=t(55),an=t.n(tn);function rn(){var n=Object(u.a)(["\n          display: ",";\n"]);return rn=function(){return n},n}function on(){var n=Object(u.a)(["\n          display: ",";\n          margin-top: 0.5rem;\n          border-radius: 100px;\n          background: #fff;\n          cursor: pointer;\n"]);return on=function(){return n},n}function cn(){var n=Object(u.a)(["\n          display: ",";\n          padding-top: 0.7rem;\n          text-align: left;\n\n          *{\n                    margin: 0.5rem 0;\n          }  \n\n          @media (min-width: 700px){\n                    p,li{\n                              font-size: 1.2rem;\n                    }\n          }        \n"]);return cn=function(){return n},n}function ln(){var n=Object(u.a)(["\n          margin-right: 0.5rem;                    \n          padding: 0.3rem;\n          border-radius: 5px;           \n          background: ",";\n          font-size: 0.8rem;\n          font-family: sans-serif;\n          font-weight: 500;\n          margin: 0.2rem 0 0 0.2rem;\n\n          @media (min-width: 700px){\n                    margin: 0.5rem 0 0 0.5rem;\n          }\n"]);return ln=function(){return n},n}function sn(){var n=Object(u.a)(["\n          display:flex;\n          align-items: center;\n          flex-wrap: wrap;\n          font-size: 1rem;\n          margin: 0.5rem 0;\n          \n          span{\n                    margin: 0.2rem;\n          }\n          \n\n          @media (min-width: 700px){\n                    font-size: 1.2rem;\n          }\n"]);return sn=function(){return n},n}function un(){var n=Object(u.a)(["\n          padding-bottom: 0.5rem;\n          font-family: monospace;\n          align-self: flex-start;\n\n          @media (min-width: 700px){\n                    font-size: 1.2rem;\n          }\n"]);return un=function(){return n},n}function mn(){var n=Object(u.a)(["\n          font-size: 1rem;\n          font-weight: bold;\n          padding-bottom: 0.5rem;\n          color: #333333;\n          text-align: justify;\n\n          @media (min-width: 700px){\n                    font-size: 1.5rem;\n          }\n"]);return mn=function(){return n},n}function dn(){var n=Object(u.a)(["\n          border: 1px solid #e6e6e6;          \n          padding: 1rem 1.5rem;\n          display:flex;\n          flex-direction: column;\n"]);return dn=function(){return n},n}var fn=function(n){function e(){var n,t;Object(p.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(g.a)(this,(n=Object(h.a)(e)).call.apply(n,[this].concat(r)))).state={show:!1},t.showHandle=function(){t.setState(function(n){return{show:!n.show}})},t}return Object(v.a)(e,n),Object(b.a)(e,[{key:"render",value:function(){var n=this.props.job,e=n.title,t=n.user,a=n.labels,o=n.body;return r.a.createElement(pn,null,r.a.createElement(bn,null,e),r.a.createElement(hn,null,"Labels:",r.a.createElement("span",null),a.map(function(n){return r.a.createElement(vn,{color:n.color,key:n.node_id},n.name)})),r.a.createElement(gn,null,"Criado por: ",t.login),r.a.createElement(wn,{show:this.state.show,onClick:this.showHandle},r.a.createElement(x.a,{icon:w.b,size:"2x"})),r.a.createElement(xn,{show:this.state.show},o),r.a.createElement(En,{show:this.state.show,onClick:this.showHandle},r.a.createElement(x.a,{icon:w.c,size:"2x"})))}}]),e}(a.Component),pn=m.b.article(dn()),bn=m.b.p(mn()),gn=m.b.p(un()),hn=m.b.ul(sn()),vn=m.b.li(ln(),function(n){return"#".concat(n.color)}),xn=Object(m.b)(an.a)(cn(),function(n){return n.show?"block":"none"}),wn=m.b.button(on(),function(n){return n.show?"none":"block"}),En=Object(m.b)(wn)(rn(),function(n){return n.show?"block":"none"}),jn=function(n){return r.a.createElement("section",null,n.jobs.map(function(n){return r.a.createElement(fn,{key:n.id,job:n})}))},yn=t(56),On=t.n(yn).a.create({baseURL:"https://api.github.com/repos/",params:{access_token:"95b10a170d723cf5dbc5e01ba30e624bbddb326d",per_page:10}});function kn(){var n=Object(u.a)(["\n          cursor: ",";\n          opacity: ",";\n"]);return kn=function(){return n},n}function zn(){var n=Object(u.a)(["\n          cursor: ",";\n          opacity: ",";\n"]);return zn=function(){return n},n}function Cn(){var n=Object(u.a)(["\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          margin: 2rem 0;\n\n          button {\n                    padding: 0.5rem 1rem;\n                    background: #fff;\n                    border: 1px solid #000;\n                    border-radius: 5px;\n          }\n\n          p{\n                    padding: 0 0.5rem;\n          }\n"]);return Cn=function(){return n},n}var Sn=function(n){var e=n.pages,t=e.prev,a=e.current,o=e.next,i=e.total,c=t>0,l=o<=i;return r.a.createElement(Bn,null,r.a.createElement(Pn,{show:c,onClick:n.prev},r.a.createElement(x.a,{icon:w.d})),r.a.createElement("p",null,a," de ",i),r.a.createElement(An,{show:l,onClick:n.next},r.a.createElement(x.a,{icon:w.e})))},Bn=m.b.div(Cn()),Pn=m.b.button(zn(),function(n){return n.show?"pointer":"default"},function(n){return n.show?1:.2}),An=m.b.button(kn(),function(n){return n.show?"pointer":"default"},function(n){return n.show?1:.2});function Fn(){var n=Object(u.a)(["\n          max-width: 1024px;\n          margin: auto;\n\n          h1{\n                    text-align: center;\n                    margin: 1rem;\n          }\n"]);return Fn=function(){return n},n}var Jn=function(n){function e(){var n,t;Object(p.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(g.a)(this,(n=Object(h.a)(e)).call.apply(n,[this].concat(r)))).state={jobs:[],isloading:!1,pages:{}},t.getRepoJobs=Object(en.a)(nn.a.mark(function n(){var e,a,r,o;return nn.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.setState({isloading:!0}),e=t.props.match.params.id,n.next=5,On.get("".concat(e,"/vagas/issues"));case 5:a=n.sent,r=t.totalPages(a.headers.link),o={prev:0,current:1,next:2,total:r},t.setState({jobs:a.data,pages:o,isloading:!1}),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0),t.setState({isloading:!1});case 15:case"end":return n.stop()}},n,this,[[0,11]])})),t.changePage=Object(en.a)(nn.a.mark(function n(){var e,a,r;return nn.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.setState({isloading:!0}),e=t.props.match.params.id,a=t.state.pages.current,n.next=6,On.get("".concat(e,"/vagas/issues?page=").concat(a));case 6:r=n.sent,t.setState({jobs:r.data,isloading:!1}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}},n,this,[[0,10]])})),t.nextPage=function(){var n=t.state.pages,e=n.current,a=n.next,r={prev:e,current:a,next:a+1,total:n.total};t.setState({pages:r})},t.prevPage=function(){var n=t.state.pages,e=n.prev,a={prev:e-1,current:e,next:n.current,total:n.total};t.setState({pages:a})},t.totalPages=function(n){var e=n.lastIndexOf("e="),t=n.lastIndexOf(">");return Number(n.slice(e+2,t))},t}return Object(v.a)(e,n),Object(b.a)(e,[{key:"componentDidMount",value:function(){this.getRepoJobs()}},{key:"componentDidUpdate",value:function(n,e){this.props.match.params.id!==n.match.params.id&&this.getRepoJobs(),this.state.pages.current!==e.pages.current&&this.changePage()}},{key:"render",value:function(){console.log(this.state.pages);var n=this.state.isloading?r.a.createElement("h1",null,"Carregando..."):r.a.createElement(a.Fragment,null,r.a.createElement(jn,{jobs:this.state.jobs}),r.a.createElement(Sn,{pages:this.state.pages,next:this.nextPage,prev:this.prevPage}));return r.a.createElement(Rn,null,n)}}]),e}(a.Component),Rn=m.b.main(Fn()),_n=t(37);function Dn(){var n=Object(u.a)(["\n\n          svg{\n                    margin: 0 0.5rem;\n          }          \n"]);return Dn=function(){return n},n}function Hn(){var n=Object(u.a)(["\n          /*color: #fff;*/\n          padding: 1rem 0;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          margin-top: 1rem;\n          \n          p{\n                    margin-bottom: 0.5rem;\n          }\n\n          @media (min-width: 1024px){\n                    flex-direction: row;\n                    justify-content: center;\n                    align-items: center;\n\n                    p{\n                              margin:0;\n                              font-size: 1.5rem;\n                    }\n          }\n"]);return Hn=function(){return n},n}function Ln(){var n=Object(u.a)(["\n          /*background: #000;*/\n          border-top: 1px solid #cccccc;\n          width: 90vw;\n          max-width: 1024px;\n          margin: auto;\n"]);return Ln=function(){return n},n}var In=function(){return r.a.createElement(Gn,null,r.a.createElement(Un,null,r.a.createElement("p",null,"Feito com ",r.a.createElement(x.a,{icon:w.h,color:"#ff0000"})," por Gustavo Leste"),r.a.createElement(Wn,null,r.a.createElement("a",{href:"https://github.com/gustavoleste",target:"_blank",rel:"external noopener noreferrer"},r.a.createElement(x.a,{icon:_n.a,color:"#000",size:"lg"}))," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/gustavoleste/",target:"_blank",rel:"external noopener noreferrer"},r.a.createElement(x.a,{icon:_n.b,color:"#006699",size:"lg"})))))},Gn=m.b.footer(Ln()),Un=m.b.div(Hn()),Wn=m.b.div(Dn()),Mn=function(){return r.a.createElement(c.a,null,r.a.createElement(a.Fragment,null,r.a.createElement(f,null),r.a.createElement(R,null),r.a.createElement(l.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:V}),r.a.createElement(s.a,{path:"/vagas/:id(frontendbr|react-brasil|backend-br)",component:Jn}),r.a.createElement(s.a,{component:V})),r.a.createElement(In,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Mn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},59:function(n,e,t){n.exports=t(168)}},[[59,2,1]]]);
//# sourceMappingURL=main.234199cc.chunk.js.map