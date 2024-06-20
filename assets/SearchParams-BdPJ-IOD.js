import{j as e,c as p,d as b,r as h,e as f,f as v,g as A,h as S,A as N,s as m}from"./index-D5Y8FJPM.js";const D=a=>e.jsxs(p,{to:`/Details/${a.id}`,className:"pet",children:[e.jsx("div",{className:"image-container",children:e.jsx("img",{src:a.images[0],alt:"Animal"})}),e.jsxs("div",{className:"info",children:[e.jsx("h1",{children:a.name}),e.jsx("h2",{children:`${a.animal} — ${a.breed} — ${a.location}`})]})]}),E=({pets:a})=>e.jsxs("div",{className:"search",children:[!a.length&&e.jsx("div",{style:{textAlign:"center"},children:e.jsx(b,{})}),a&&a.map(t=>e.jsx(D,{name:t.name,animal:t.animal,breed:t.breed,images:t.images,location:t.city,id:t.id},t.id))]});class P extends h.Component{constructor(t){super(t),this.state={...this.state,hasError:!1}}render(){return this.state.hasError?e.jsx("h2",{children:"Something went wrong."}):this.props.children}}const L=f,y=v,C=["bird","cat","dog","rabbit","reptile"],V=()=>{var o,d;const a=L(s=>s.searchSlice.value),t=A(a.animal,{skip:!a.animal}),l=y(),c=((o=t==null?void 0:t.data)==null?void 0:o.breeds)||[],n=S(a),u=(d=n==null?void 0:n.data)==null?void 0:d.pets,[r]=h.useContext(N);return e.jsxs("div",{children:[e.jsx("div",{className:"search-params",children:e.jsxs("form",{onSubmit:s=>{s.preventDefault();const i=new FormData(s.currentTarget),x=i.get("location"),j=i.get("animal"),g=i.get("breed");l(m({animal:j,location:x,breed:g}))},children:[r&&e.jsx("div",{className:"pet image-container",children:e.jsx("img",{src:r.images[0],alt:r.name})}),e.jsxs("label",{htmlFor:"location",children:["Location:",e.jsx("input",{type:"text",name:"location",id:"location",placeholder:"Location",defaultValue:a.location,onChange:()=>{}})]}),e.jsxs("label",{htmlFor:"animal",children:["Animal:",e.jsx("select",{name:"animal",id:"animal",defaultValue:a.animal,onChange:s=>{l(m({...a,animal:s.target.value}))},children:C.map(s=>e.jsx("option",{value:s,children:s},s))})]}),e.jsxs("label",{htmlFor:"breed",children:["Breed:",e.jsx("select",{name:"breed",id:"breed",disabled:!c.length,defaultValue:a.breed,children:c.map(s=>e.jsx("option",{value:s,children:s},s))})]}),e.jsx("button",{children:"Search"})]})}),n.isError&&e.jsx("span",{children:n.error.message}),n.data&&e.jsx(P,{children:e.jsx(E,{pets:u})})]})};export{V as default};