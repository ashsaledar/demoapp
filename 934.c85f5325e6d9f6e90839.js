"use strict";(self.webpackChunkngrx_project=self.webpackChunkngrx_project||[]).push([[934],{3934:(C,g,s)=>{s.r(g),s.d(g,{AuthModule:()=>F});var l=s(5887),p=s(9638),a=s(2253),n=s(665),o=s(7716),d=s(4220),m=s(8583);function u(i,r){1&i&&(o.TgZ(0,"div"),o._uU(1," Email is required "),o.qZA())}function c(i,r){1&i&&(o.TgZ(0,"div"),o._uU(1,"Invalid Email"),o.qZA())}function Z(i,r){if(1&i&&(o.TgZ(0,"div"),o.YNc(1,u,2,0,"div",5),o.YNc(2,c,2,0,"div",5),o.qZA()),2&i){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.loginForm.get("email").errors.required),o.xp6(1),o.Q6J("ngIf",t.loginForm.get("email").errors.email)}}function f(i,r){1&i&&(o.TgZ(0,"div"),o.TgZ(1,"div"),o._uU(2,"Password is required"),o.qZA(),o.qZA())}let v=(()=>{class i{constructor(t){this.store=t}ngOnInit(){this.loginForm=new n.cw({email:new n.NI("",[n.kI.required,n.kI.email]),password:new n.NI("",[n.kI.required])})}onLoginSubmit(){const t=this.loginForm.value.email,e=this.loginForm.value.password;this.store.dispatch((0,p.Tc)({status:!0})),this.store.dispatch((0,a.h8)({email:t,password:e}))}}return i.\u0275fac=function(t){return new(t||i)(o.Y36(d.yh))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-login"]],decls:19,vars:4,consts:[[1,"row"],[1,"col-md-6","offset-md-3"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["type","text","formControlName","email",1,"form-control"],[4,"ngIf"],["type","password","formControlName","password",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"h3"),o._uU(3,"Login"),o.qZA(),o._UZ(4,"hr"),o.TgZ(5,"form",2),o.NdJ("ngSubmit",function(){return e.onLoginSubmit()}),o.TgZ(6,"div",3),o.TgZ(7,"label"),o._uU(8,"Email"),o.qZA(),o._UZ(9,"input",4),o.YNc(10,Z,3,2,"div",5),o.qZA(),o.TgZ(11,"div",3),o.TgZ(12,"label"),o._uU(13,"Password"),o.qZA(),o._UZ(14,"input",6),o.YNc(15,f,3,0,"div",5),o.qZA(),o.TgZ(16,"div",3),o.TgZ(17,"button",7),o._uU(18," Login "),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(5),o.Q6J("formGroup",e.loginForm),o.xp6(5),o.Q6J("ngIf",e.loginForm.get("email").touched&&!e.loginForm.get("email").valid),o.xp6(5),o.Q6J("ngIf",e.loginForm.get("password").touched&&!e.loginForm.get("password").valid),o.xp6(2),o.Q6J("disabled",!e.loginForm.valid))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,m.O5],styles:[""]}),i})();var T=s(3735);function h(i,r){1&i&&(o.TgZ(0,"div"),o._uU(1," Email is required "),o.qZA())}function U(i,r){1&i&&(o.TgZ(0,"div"),o._uU(1," Invalid Email "),o.qZA())}function A(i,r){if(1&i&&(o.TgZ(0,"div"),o.YNc(1,h,2,0,"div",6),o.YNc(2,U,2,0,"div",6),o.qZA()),2&i){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.signUpForm.get("email").errors.required),o.xp6(1),o.Q6J("ngIf",t.signUpForm.get("email").errors.email)}}function q(i,r){1&i&&(o.TgZ(0,"div"),o.TgZ(1,"div"),o._uU(2,"Password is required"),o.qZA(),o.qZA())}const _=[{path:"",children:[{path:"",redirectTo:"login"},{path:"login",component:v},{path:"signup",component:(()=>{class i{constructor(t){this.store=t}ngOnInit(){this.signUpForm=new n.cw({email:new n.NI("",[n.kI.required,n.kI.email]),password:new n.NI("",[n.kI.required])})}onSignUpSubmit(){if(!this.signUpForm.valid)return;const t=this.signUpForm.value.email,e=this.signUpForm.value.password;this.store.dispatch((0,p.Tc)({status:!0})),this.store.dispatch((0,a.UT)({email:t,password:e}))}}return i.\u0275fac=function(t){return new(t||i)(o.Y36(d.yh))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-signup"]],decls:20,vars:4,consts:[[1,"container"],[1,"row"],[1,"col-md-6","offset-md-3"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["type","email","formControlName","email",1,"form-control"],[4,"ngIf"],["type","password","formControlName","password",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"h3"),o._uU(4,"SignUp"),o.qZA(),o._UZ(5,"hr"),o.TgZ(6,"form",3),o.NdJ("ngSubmit",function(){return e.onSignUpSubmit()}),o.TgZ(7,"div",4),o.TgZ(8,"label"),o._uU(9,"Email"),o.qZA(),o._UZ(10,"input",5),o.YNc(11,A,3,2,"div",6),o.qZA(),o.TgZ(12,"div",4),o.TgZ(13,"label"),o._uU(14,"Password"),o.qZA(),o._UZ(15,"input",7),o.YNc(16,q,3,0,"div",6),o.qZA(),o.TgZ(17,"div",4),o.TgZ(18,"button",8),o._uU(19," SignUp "),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(6),o.Q6J("formGroup",e.signUpForm),o.xp6(5),o.Q6J("ngIf",e.signUpForm.get("email").touched&&!e.signUpForm.get("email").valid),o.xp6(5),o.Q6J("ngIf",e.signUpForm.get("password").touched&&!e.signUpForm.get("password").valid),o.xp6(2),o.Q6J("disabled",!e.signUpForm.valid))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,m.O5],styles:[""]}),i})()}]}];let F=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[[m.ez,n.UX,l.sQ.forFeature(),T.Bz.forChild(_)]]}),i})()}}]);