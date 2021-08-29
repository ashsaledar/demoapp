"use strict";(self.webpackChunkngrx_project=self.webpackChunkngrx_project||[]).push([[988],{9988:(ht,P,c)=>{c.r(P),c.d(P,{PostsModule:()=>gt});var l=c(1797),T=c(7057),x=c(9773),g=c(8002),v=c(3190),I=c(5435),r=c(4220);const A=(0,r.PH)("[posts page] add post",(0,r.Ky)()),C=(0,r.PH)("[posts page] add post success",(0,r.Ky)()),b=(0,r.PH)("[posts page] update post",(0,r.Ky)()),O=(0,r.PH)("[posts page] update post success",(0,r.Ky)()),q=(0,r.PH)("[posts page] delete post",(0,r.Ky)()),y=(0,r.PH)("[posts page] delete post success",(0,r.Ky)()),F=(0,r.PH)("[posts page] load posts"),_=(0,r.PH)("[posts page] load posts success",(0,r.Ky)());var d=c(5887),Q=c(9667),S=c(5917),U=c(2253),t=c(7716),j=c(1841);let $=(()=>{class o{constructor(e){this.http=e}getPosts(){return this.http.get("http://localhost:3000/products")}addPost(e){return this.http.post("http://localhost:3000/products",e)}updatePost(e){return this.http.patch(`http://localhost:3000/products/${e.id}`,{title:e.title,description:e.description})}deletePost(e){return this.http.delete(`http://localhost:3000/products/${e}`)}getPostById(e){return this.http.get(`http://localhost:3000/products/${e}`)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(j.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),k=(()=>{class o{constructor(e,n,h){this.actions$=e,this.postsService=n,this.store=h,this.loadPosts$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(F),(0,T.M)(this.store.select(l.Jq)),(0,x.zg)(([p,a])=>a.length&&1!==a.length?(0,S.of)((0,U.Lk)()):this.postsService.getPosts().pipe((0,g.U)(u=>_({posts:u})))))),this.addPost$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(A),(0,x.zg)(p=>this.postsService.addPost(p.post).pipe((0,g.U)(a=>{const u=Object.assign(Object.assign({},p.post),{id:a.name});return C({post:u})}))))),this.updatePost$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(b),(0,v.w)(p=>this.postsService.updatePost(p.post).pipe((0,g.U)(a=>{const u={id:p.post.id,changes:Object.assign({},p.post)};return O({post:u})}))))),this.deletePost$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(q),(0,v.w)(p=>this.postsService.deletePost(p.id).pipe((0,g.U)(a=>y({id:p.id})))))),this.getSinglePost$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(Q.tE),(0,I.h)(p=>p.payload.routerState.url.startsWith("/posts/details")),(0,g.U)(p=>p.payload.routerState.params.id),(0,T.M)(this.store.select(l.Jq)),(0,v.w)(([p,a])=>a.length?(0,S.of)((0,U.Lk)()):this.postsService.getPostById(p).pipe((0,g.U)(u=>{const mt=[Object.assign(Object.assign({},u),{id:p})];return _({posts:mt})})))))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(d.eX),t.LFG($),t.LFG(r.yh))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();var i=c(665),Z=c(3735),m=c(8583);function G(o,s){1&o&&(t.TgZ(0,"div"),t._uU(1," Title is required "),t.qZA())}function H(o,s){1&o&&(t.TgZ(0,"div"),t._uU(1," Title should be minimum 6 characters "),t.qZA())}function K(o,s){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,G,2,0,"div",5),t.YNc(2,H,2,0,"div",5),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.postForm.get("title").errors.required),t.xp6(1),t.Q6J("ngIf",e.postForm.get("title").errors.minlength)}}function z(o,s){1&o&&(t.TgZ(0,"div"),t._uU(1," Description is required "),t.qZA())}function B(o,s){1&o&&(t.TgZ(0,"div"),t._uU(1," Description should be minimum 10 characters "),t.qZA())}function W(o,s){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,z,2,0,"div",5),t.YNc(2,B,2,0,"div",5),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.postForm.get("description").errors.required),t.xp6(1),t.Q6J("ngIf",e.postForm.get("description").errors.minlength)}}function X(o,s){1&o&&(t.TgZ(0,"div"),t._uU(1," Description is required "),t.qZA())}function R(o,s){1&o&&(t.TgZ(0,"div"),t._uU(1," Description should be minimum 10 characters "),t.qZA())}function V(o,s){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,X,2,0,"div",5),t.YNc(2,R,2,0,"div",5),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.postForm.get("image").errors.required),t.xp6(1),t.Q6J("ngIf",e.postForm.get("image").errors.minlength)}}let tt=(()=>{class o{constructor(e,n){this.store=e,this.router=n}ngOnInit(){this.createForm(),this.store.select(l.u_).subscribe(e=>{e&&(this.post=e,this.postForm.patchValue({title:e.title,description:e.description,image:e.image}))})}createForm(){this.postForm=new i.cw({title:new i.NI(null,[i.kI.required,i.kI.minLength(6)]),description:new i.NI(null,[i.kI.required,i.kI.minLength(10)]),image:new i.NI(null,[i.kI.required,i.kI.minLength(10)])})}onSubmit(){this.postForm.valid&&(this.store.dispatch(b({post:{id:this.post.id,title:this.postForm.value.title,description:this.postForm.value.description,image:this.postForm.value.image}})),this.router.navigate(["posts"]))}ngOnDestroy(){this.postSubscription&&this.postSubscription.unsubscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.yh),t.Y36(Z.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-post"]],decls:24,vars:4,consts:[[1,"row"],[1,"col-md-12"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["type","text","formControlName","title",1,"form-control"],[4,"ngIf"],["formControlName","description",1,"form-control"],["formControlName","image",1,"form-control"],[1,"my-3"],["type","submit",1,"btn","btn-primary"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h3"),t._uU(3,"Update Post"),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"form",2),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(6,"div",3),t.TgZ(7,"label"),t._uU(8,"Title"),t.qZA(),t._UZ(9,"input",4),t.YNc(10,K,3,2,"div",5),t.qZA(),t.TgZ(11,"div",3),t.TgZ(12,"label"),t._uU(13,"Description"),t.qZA(),t._UZ(14,"textarea",6),t.YNc(15,W,3,2,"div",5),t.qZA(),t.TgZ(16,"div",3),t.TgZ(17,"label"),t._uU(18,"Description"),t.qZA(),t._UZ(19,"textarea",7),t.YNc(20,V,3,2,"div",5),t.qZA(),t.TgZ(21,"div",8),t.TgZ(22,"button",9),t._uU(23,"Update Post"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("formGroup",n.postForm),t.xp6(5),t.Q6J("ngIf",n.postForm.get("title").touched&&!n.postForm.get("title").valid),t.xp6(5),t.Q6J("ngIf",n.postForm.get("description").touched&&!n.postForm.get("description").valid),t.xp6(5),t.Q6J("ngIf",n.postForm.get("image").touched&&!n.postForm.get("image").valid))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,m.O5],styles:[""]}),o})();function ot(o,s){1&o&&(t.TgZ(0,"div"),t._uU(1," Title is required "),t.qZA())}function et(o,s){1&o&&(t.TgZ(0,"div"),t._uU(1," Title should be minimum 6 characters "),t.qZA())}function st(o,s){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,ot,2,0,"div",5),t.YNc(2,et,2,0,"div",5),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.postForm.get("title").errors.required),t.xp6(1),t.Q6J("ngIf",e.postForm.get("title").errors.minlength)}}let it=(()=>{class o{constructor(e){this.store=e}ngOnInit(){this.postForm=new i.cw({title:new i.NI(null,[i.kI.required,i.kI.minLength(6)]),description:new i.NI(null,[i.kI.required,i.kI.minLength(10)]),image:new i.NI(null,[i.kI.required,i.kI.minLength(10)])})}showDescriptionErrors(){const e=this.postForm.get("description");if(e.touched&&!e.valid){if(e.errors.required)return"Description is required";if(e.errors.minlength)return"Description should be of minimum 10 characters length"}}onAddPost(){this.postForm.valid&&this.store.dispatch(A({post:{title:this.postForm.value.title,description:this.postForm.value.description,image:this.postForm.value.image}}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-book"]],decls:26,vars:5,consts:[[1,"row","my-4"],[1,"col-md-12"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["type","text","formControlName","title",1,"form-control"],[4,"ngIf"],["formControlName","description",1,"form-control"],["formControlName","image",1,"form-control"],[1,"my-3"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h3"),t._uU(3,"Add Post"),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"form",2),t.NdJ("ngSubmit",function(){return n.onAddPost()}),t.TgZ(6,"div",3),t.TgZ(7,"label"),t._uU(8,"Title"),t.qZA(),t._UZ(9,"input",4),t.YNc(10,st,3,2,"div",5),t.qZA(),t.TgZ(11,"div",3),t.TgZ(12,"label"),t._uU(13,"Description"),t.qZA(),t._UZ(14,"textarea",6),t.TgZ(15,"div"),t._uU(16),t.qZA(),t.qZA(),t.TgZ(17,"div",3),t.TgZ(18,"label"),t._uU(19,"image url"),t.qZA(),t._UZ(20,"textarea",7),t.TgZ(21,"div"),t._uU(22),t.qZA(),t.qZA(),t.TgZ(23,"div",8),t.TgZ(24,"button",9),t._uU(25," Add Post "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("formGroup",n.postForm),t.xp6(5),t.Q6J("ngIf",n.postForm.get("title").touched&&!n.postForm.get("title").valid),t.xp6(6),t.Oqu(n.showDescriptionErrors()),t.xp6(6),t.Oqu(n.showDescriptionErrors()),t.xp6(2),t.Q6J("disabled",!n.postForm.valid))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,m.O5],styles:[""]}),o})();const nt=function(o){return["edit",o]};function rt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",5),t.TgZ(1,"div",6),t._UZ(2,"img",7),t.qZA(),t.TgZ(3,"div",8),t.TgZ(4,"p",9),t._uU(5),t.qZA(),t.TgZ(6,"p",10),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",11),t.TgZ(9,"button",12),t._uU(10,"Update "),t.qZA(),t.TgZ(11,"button",13),t.NdJ("click",function(){const p=t.CHM(e).$implicit;return t.oxw(2).onDeletePost(p.id)}),t._uU(12," Delete"),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=s.$implicit;t.xp6(2),t.Q6J("src",e.image,t.LSH)("alt",e.image),t.xp6(3),t.Oqu(e.title),t.xp6(2),t.hij("$",e.description,""),t.xp6(2),t.Q6J("routerLink",t.VKq(5,nt,e.id))}}function pt(o,s){if(1&o&&(t.TgZ(0,"div"),t.TgZ(1,"div",3),t.YNc(2,rt,13,7,"div",4),t.qZA(),t.qZA()),2&o){const e=s.ngIf;t.xp6(2),t.Q6J("ngForOf",e)}}const ct=function(){return["/posts/add"]};let dt=(()=>{class o{constructor(e){this.store=e}ngOnInit(){this.posts=this.store.select(l.Jq),console.log(this.posts),this.count=this.store.select(l.sA),this.store.dispatch(F())}onDeletePost(e){confirm("Are you sure you want to delete")&&this.store.dispatch(q({id:e}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-posts-list"]],decls:5,vars:5,consts:[[1,"container1"],[1,"button-add",3,"routerLink"],[4,"ngIf"],[1,"product-list"],["class","product",4,"ngFor","ngForOf"],[1,"product"],[1,"product-image-holder"],[1,"product-image",3,"src","alt"],[1,"product-details"],[1,"product-details__name"],[1,"product-details__price"],[1,"product-actions"],[1,"product-actions__edit",3,"routerLink"],[1,"product-actions__delete",2,"background-color","red","border-radius","10%",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"button",1),t._uU(2,"Add Post\n"),t.qZA(),t.YNc(3,pt,3,1,"div",2),t.ALo(4,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.DdM(4,ct)),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,2,n.posts)))},directives:[Z.rH,m.O5,m.sg],pipes:[m.Ov],styles:[".product-list[_ngcontent-%COMP%]{padding:10px 0;margin-top:30px;display:flex;flex-wrap:wrap}.container1[_ngcontent-%COMP%]{margin-left:10%}.button-add[_ngcontent-%COMP%]{display:flex;margin-top:20px;border-radius:10%;background-color:#60b2e6}.product-actions__edit[_ngcontent-%COMP%]{border-radius:10%;display:flex;justify-content:center;align-items:center;height:32px;cursor:pointer}.product-actions__edit[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.product-actions__edit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px;height:16px}.product[_ngcontent-%COMP%]{box-shadow:0 1px 1px #0003;border-radius:5px;margin:0 15px 30px 0;width:286px;max-height:400px;background-color:#fff;height:320px}.product[_ngcontent-%COMP%]:hover{transform:scale(1.05);border:1px solid #35BADB}.product-image[_ngcontent-%COMP%]{max-width:100%;width:300px;border-top-right-radius:5px;border-top-left-radius:5px;height:180px;object-fit:cover}.product-details[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:8px 15px}.product-details__price[_ngcontent-%COMP%]{font-weight:500;opacity:.7;letter-spacing:1px;margin:0}.product-details__name[_ngcontent-%COMP%]{opacity:.8;font-weight:500;margin:0}.product-description[_ngcontent-%COMP%]{padding:10px 15px}.product-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:.6;margin:0}.product-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:46px 15px;border-radius:10%}.product-actions__edit[_ngcontent-%COMP%]{margin-right:10px;background-color:#60b2e6}.product-action_delete[_ngcontent-%COMP%]{background-color:red}"]}),o})();var f=c(5517);const at=(0,r.Lq)(f.E3,(0,r.on)(C,(o,s)=>f.Nb.addOne(s.post,Object.assign(Object.assign({},o),{count:o.count+1}))),(0,r.on)(O,(o,s)=>f.Nb.updateOne(s.post,o)),(0,r.on)(y,(o,{id:s})=>f.Nb.removeOne(s,o)),(0,r.on)(_,(o,s)=>f.Nb.setAll(s.posts,Object.assign(Object.assign({},o),{count:o.count+1}))));function ut(o,s){return at(o,s)}const lt=[{path:"",component:dt},{path:"add",component:it},{path:"edit/:id",component:tt}];let gt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,i.UX,Z.Bz.forChild(lt),r.Aw.forFeature(l.Ow,ut),d.sQ.forFeature([k])]]}),o})()}}]);