(()=>{var e={332:(e,t,n)=>{const a=n(323);e.exports={createMenu:function(){a.clearContent();let e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("baker-container"),e.appendChild(t);let n=document.createElement("div");n.classList.add("bakers"),t.appendChild(n);let d=document.createElement("div");d.id="baker-title",d.innerText="The Bakers",n.appendChild(d);let i=document.createElement("div");i.classList.add("baker-bios"),n.appendChild(i);let r=document.createElement("div");r.classList.add("baker1"),i.appendChild(r);let l=document.createElement("img");l.id="baker1-img",l.setAttribute("src","images/baker1.png");let c=document.createElement("div");c.classList.add("baker-info"),r.appendChild(l),r.appendChild(c);let o=document.createElement("div");o.id="baker1-name",o.innerText="Sally Sue";let m=document.createElement("div");m.id="baker1-bio",m.innerText="Sally Sue has been a baker for 45 years. She specialized in macaroons at a young age and it has been her life goal to create new interesting macaroon flavors!",c.appendChild(o),c.appendChild(m);let s=document.createElement("div");s.classList.add("baker2"),i.appendChild(s);let p=document.createElement("img");p.id="baker2-img",p.setAttribute("src","images/baker2.png");let u=document.createElement("div");u.classList.add("baker-info2"),s.appendChild(p),s.appendChild(u);let h=document.createElement("div");h.id="baker2-name",h.innerText="Vincent";let C=document.createElement("div");C.id="baker2-bio",C.innerText="Vincent is new to Macaron Maven. He has ten years professional baking experience and is a welcome addition to the team!",u.appendChild(h),u.appendChild(C);let v=document.createElement("div");v.classList.add("contact-info"),e.appendChild(v);let E=document.createElement("div");E.id="contact-title",E.innerText="Contact Us!";let y=document.createElement("div");y.id="phone",y.innerText="Phone: (888) 888-8888";let f=document.createElement("div");f.id="email",f.innerText="Email: macarons@bakery.com";let T=document.createElement("div");T.id="social-media",T.innerText="Find us on Facebook!",v.appendChild(E),v.appendChild(y),v.appendChild(f),v.appendChild(T)}}},726:(e,t,n)=>{const a=n(323);e.exports={createHome:function(){a.clearContent();let e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("title-space");let n=document.createElement("div");n.id="title",n.innerText="Macaron Maven",t.appendChild(n),e.appendChild(t);let d=document.createElement("div");d.classList.add("home-paragraphs");let i=document.createElement("div");i.id="home-info-paragraph1",i.innerText="Macaron Maven has a wide selection of delectable treats for every palette. At Macaron Maven, only the finest imported ingredients are used in our products. We offer an international small cafe feel in rural America.",d.appendChild(i),e.appendChild(d);let r=document.createElement("div");r.id="home-info-paragraph2",r.innerText="Come in and see us today or order online! In addition to the world renowned macarons, you will also find a wide variety of seasonally themed coffee, tea, and hot cocoa.",d.appendChild(r),e.appendChild(d);let l=document.createElement("div");l.classList.add("hours-location"),e.appendChild(l);let c=document.createElement("div");c.classList.add("week-hours"),l.appendChild(c);let o=document.createElement("div");o.classList.add("location"),l.appendChild(o);let m=document.createElement("div");m.id="hour-title",m.innerText="Hours";let s=document.createElement("div");s.id="Monday",s.innerText="Monday 7am-6pm";let p=document.createElement("div");p.id="Tuesday",p.innerText="Tuesday 7am-6pm";let u=document.createElement("div");u.id="Wednesday",u.innerText="Wednesday 7am-8pm";let h=document.createElement("div");h.id="Thursday",h.innerText="Thursday 7am-6pm";let C=document.createElement("div");C.id="Friday",C.innerText="Friday 7am-10pm";let v=document.createElement("div");v.id="Saturday",v.innerText="Saturday 7am-10pm";let E=document.createElement("div");E.id="Sunday",E.innerText="Sunday Closed",c.appendChild(m),c.appendChild(s),c.appendChild(p),c.appendChild(u),c.appendChild(h),c.appendChild(C),c.appendChild(v),c.appendChild(E);let y=document.createElement("div");y.id="location-title",y.innerText="Location",o.appendChild(y);let f=document.createElement("div");f.classList.add("address"),o.appendChild(f);let T=document.createElement("div");T.id="street",T.innerText="555 Macaron Dr.";let k=document.createElement("div");k.id="town-state",k.innerText="Macaron City, MC";let b=document.createElement("img");b.id="location-image",b.setAttribute("src","images/location.png"),f.appendChild(T),f.appendChild(k),f.appendChild(b)}}},344:(e,t,n)=>{const a=n(323);function d(e,t,n){let a=document.createElement("div");a.classList.add("macaron-cards");let d=document.createElement("img");d.classList.add("card-image"),d.setAttribute("src",e);let i=document.createElement("div");i.classList.add("title-info"),a.appendChild(d),a.appendChild(i);let r=document.createElement("div");r.classList.add("card-name"),r.innerText=t;let l=document.createElement("div");return l.classList.add("card-info"),l.innerText=n,i.appendChild(r),i.appendChild(l),a}e.exports={createMenu:function(){a.clearContent();let e=document.querySelector("#content"),t=document.createElement("div");t.id="menu-title",t.innerText="Seasonal Summer Menu",e.appendChild(t);let n=document.createElement("div");n.classList.add("macaron-container"),e.appendChild(n);let i=document.createElement("div");i.id="macaron-flavors-title",i.innerText="Macaron Flavors";let r=document.createElement("div");r.id="macaron-allergy-info",r.innerText="All macarons are gluten and dairy free!";let l=document.createElement("div");l.classList.add("macaron-menu"),n.appendChild(i),n.appendChild(r),n.appendChild(l);let c=document.createElement("div");c.classList.add("macaron-row"),l.appendChild(c),c.appendChild(d("images/lemon.png","Lemon Sunshine","This lemon flavored macaron is sure to be a hit in the summer months!")),c.appendChild(d("images/blackberry.png","Blackberry Field","This blackberry flavored macaron is as flavorful as a blackberry from the field!")),c.appendChild(d("images/weddingcake.png","Wedding Cake","This very vanilla flavored macaron would fit in perfectly a summer wedding!"));let o=document.createElement("div");o.classList.add("macaron-row"),l.appendChild(o),o.appendChild(d("images/whitechoc.png","White Chocolate Caramel","This white chocolate caramel macaron is a crowd favorite!")),o.appendChild(d("images/milkchoc.png","Chocolate Espresso","This chocolate macaron has an espresso cream center.")),o.appendChild(d("images/darkchoc.png","Dark Chocolate","Our Belgian dark chocolate macaroon speaks for itself!"));let m=document.createElement("div");m.classList.add("macaron-row3"),l.appendChild(m),m.appendChild(d("images/strawberry.png","Strawberry Rain","Our strawberry macaron reminds us of a crisp strawberry after a summer rain.")),m.appendChild(d("images/elderberry.png","Elderberry Vine","Like an elderberry from the vine, only sweeter!")),m.appendChild(d("images/raspberry.png","Ripe Raspberry","The ripe raspberry macaron is a tart summertime favorite."));let s=document.createElement("div");s.classList.add("drink-menu-container"),e.appendChild(s);let p=document.createElement("div");p.id="drink-menu-title",p.innerText="Specialty Drink Menu";let u=document.createElement("div");u.id="drink-menu-info",u.innerText="Milk Options: Dairy, Almond, Soy, Coconut, and Oat";let h=document.createElement("div");h.classList.add("drink-lists"),s.appendChild(p),s.appendChild(u),s.appendChild(h);let C=document.createElement("div");C.classList.add("drink-list-title"),h.appendChild(C);let v=document.createElement("div");v.classList.add("drink-list-title"),h.appendChild(v);let E=document.createElement("div");E.classList.add("drink-list-title"),h.appendChild(E);let y=document.createElement("div");y.id="drink-type",y.innerText="Coffee Concoctions",C.appendChild(y);let f=["Maple Iced Coffee","Iced Pistachio Rose Latte","Irish Cream Cold Brew","Green Tea Frappuccino"],T=document.createElement("ul");for(let e of f){let t=document.createElement("li");t.innerText=e,T.appendChild(t)}C.appendChild(T);let k=document.createElement("div");k.id="drink-type",k.innerText="It's Tea Time",v.appendChild(k);let b=["Pineapple Iced Tea","Thai Iced Tea","Iced Brown Sugar Milk Tea","Strawberry Mint Iced Tea"],g=document.createElement("ul");for(let e of b){let t=document.createElement("li");t.innerText=e,g.appendChild(t)}v.appendChild(g);let x=document.createElement("div");x.id="drink-type",x.innerText="Fruit Elixers",E.appendChild(x);let L=["Watermelon Punch","Nectarine Infused Sparkling Water","Strawberry Melon Fizz","Apricot Lemonade"],w=document.createElement("ul");for(let e of L){let t=document.createElement("li");t.innerText=e,w.appendChild(t)}E.appendChild(w)}}},323:e=>{e.exports={clearContent:function(){document.querySelector("#content").innerHTML=""}}}},t={};function n(a){var d=t[a];if(void 0!==d)return d.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}(()=>{const e=n(726);e.createHome();const t=n(344),a=n(332);document.querySelector("#home").addEventListener("click",e.createHome),document.querySelector("#menu").addEventListener("click",t.createMenu),document.querySelector("#contact").addEventListener("click",a.createMenu)})()})();