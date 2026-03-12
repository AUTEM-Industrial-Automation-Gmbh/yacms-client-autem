import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{o as l,s as o,e as h,a as y,u as b}from"./zod-extensions.CY5udWUM.js";import{r as p}from"./index.Bvk5EX3f.js";import{c as a}from"./createLucideIcon.tPayVk61.js";import{A as f}from"./arrow-right.DUQqwedH.js";/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],v=a("award",g);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],x=a("chart-no-axes-column",k);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],j=a("shield",N);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],_=a("target",w);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],M=a("users",A);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],E=a("zap",T),$=l({icon:h(["bar-chart","users","shield","zap","target","award"]).default("bar-chart").meta({label:"Icône"}),text:o().meta({label:"Texte",role:"preview",placeholder:"Approche ROIste"})}),z=l({text:o().meta({label:"Texte du bouton",placeholder:"Prendre RDV"}),link:o().meta({role:"route",label:"Lien",placeholder:"/contact"})});l({title:o().meta({label:"Titre",placeholder:"Prêt à libérer votre potentiel de croissance ?"}),benefits:y($).min(1).max(6).meta({label:"Avantages"}),cta:z.meta({label:"Bouton d'action"})});const C={"bar-chart":x,users:M,shield:j,zap:E,target:_,award:v};function H({data:s}){const n=b(s),i=p.useRef(null);return p.useEffect(()=>{const t=i.current;if(!t)return;const r=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting&&(t.querySelectorAll("[data-benefit]").forEach((m,u)=>{setTimeout(()=>{m.style.opacity="1",m.style.transform="translateY(0)"},u*150)}),r.unobserve(d.target))})},{threshold:.3});return r.observe(t),()=>r.disconnect()},[]),e.jsx("div",{className:"max-w-300 mx-auto px-5 my-32",children:e.jsx("section",{className:"bg-secondary text-secondary-foreground rounded-2xl my-4 md:my-6 py-12 md:py-16",children:e.jsxs("div",{className:"max-w-250 mx-auto px-6 sm:px-8 text-center",children:[e.jsx(n.H2,{path:"title",className:"text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8 md:mb-10"}),e.jsx("div",{ref:i,className:"grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-250 mx-auto mb-8 md:mb-10",children:s.benefits.map((t,r)=>{const c=C[t.icon]??x;return e.jsxs("div",{"data-benefit":!0,className:"flex items-center gap-4 rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 backdrop-blur-sm px-5 py-4 transition-all duration-300 hover:bg-secondary-foreground/8 hover:border-secondary-foreground/20",style:{opacity:0,transform:"translateY(20px)"},children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0",children:e.jsx(c,{className:"w-5 h-5 text-primary"})}),e.jsx(n.Span,{path:"benefits.text",index:r,className:"text-sm md:text-base font-medium text-secondary-foreground/90 text-left leading-snug"})]},`benefit-${t.text}-${r}`)})}),e.jsxs(n.A,{path:"cta.link",className:"inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg text-base font-bold hover:bg-primary/90 transition-all duration-200 no-underline group",children:[s.cta.text,e.jsx(f,{className:"w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"})]})]})})})}export{H as default};
