"use strict";
(self["webpackChunkngrx_counter"] = self["webpackChunkngrx_counter"] || []).push([["src_app_posts_posts_module_ts"],{

/***/ 3254:
/*!******************************************************!*\
  !*** ./src/app/posts/add-book/add-book.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPostComponent": () => (/* binding */ AddPostComponent)
/* harmony export */ });
/* harmony import */ var _state_posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/posts.actions */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);






function AddPostComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPostComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Title should be minimum 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPostComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPostComponent_div_10_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddPostComponent_div_10_div_2_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.postForm.get("title").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.postForm.get("title").errors.minlength);
} }
class AddPostComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6),
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(10),
            ]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(10),
            ]),
        });
    }
    showDescriptionErrors() {
        const descriptionForm = this.postForm.get('description');
        if (descriptionForm.touched && !descriptionForm.valid) {
            if (descriptionForm.errors.required) {
                return 'Description is required';
            }
            if (descriptionForm.errors.minlength) {
                return 'Description should be of minimum 10 characters length';
            }
        }
    }
    onAddPost() {
        if (!this.postForm.valid) {
            return;
        }
        const post = {
            title: this.postForm.value.title,
            description: this.postForm.value.description,
            image: this.postForm.value.image
        };
        this.store.dispatch((0,_state_posts_actions__WEBPACK_IMPORTED_MODULE_0__.addPost)({ post }));
    }
}
AddPostComponent.ɵfac = function AddPostComponent_Factory(t) { return new (t || AddPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
AddPostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddPostComponent, selectors: [["app-add-book"]], decls: 26, vars: 5, consts: [[1, "row", "my-4"], [1, "col-md-12"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["type", "text", "formControlName", "title", 1, "form-control"], [4, "ngIf"], ["formControlName", "description", 1, "form-control"], ["formControlName", "image", 1, "form-control"], [1, "my-3"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function AddPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddPostComponent_Template_form_ngSubmit_5_listener() { return ctx.onAddPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AddPostComponent_div_10_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "image url");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Add Post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.postForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.postForm.get("title").touched && !ctx.postForm.get("title").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showDescriptionErrors());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showDescriptionErrors());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.postForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYm9vay5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3203:
/*!********************************************************!*\
  !*** ./src/app/posts/edit-post/edit-post.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPostComponent": () => (/* binding */ EditPostComponent)
/* harmony export */ });
/* harmony import */ var _state_posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../state/posts.actions */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _state_posts_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../state/posts.selector */ 3655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);








function EditPostComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditPostComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Title should be minimum 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditPostComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditPostComponent_div_10_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditPostComponent_div_10_div_2_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.postForm.get("title").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.postForm.get("title").errors.minlength);
} }
function EditPostComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditPostComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Description should be minimum 10 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditPostComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditPostComponent_div_15_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditPostComponent_div_15_div_2_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.postForm.get("description").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.postForm.get("description").errors.minlength);
} }
function EditPostComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditPostComponent_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Description should be minimum 10 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditPostComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditPostComponent_div_20_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditPostComponent_div_20_div_2_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.postForm.get("image").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.postForm.get("image").errors.minlength);
} }
class EditPostComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        this.createForm();
        this.store.select(_state_posts_selector__WEBPACK_IMPORTED_MODULE_1__.getPostById).subscribe((post) => {
            if (post) {
                this.post = post;
                this.postForm.patchValue({
                    title: post.title,
                    description: post.description,
                    image: post.image
                });
            }
        });
    }
    createForm() {
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6),
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10),
            ]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10),
            ]),
        });
    }
    onSubmit() {
        if (!this.postForm.valid) {
            return;
        }
        const title = this.postForm.value.title;
        const image = this.postForm.value.image;
        const description = this.postForm.value.description;
        const post = {
            id: this.post.id,
            title,
            description,
            image
        };
        //dispatch the action
        this.store.dispatch((0,_state_posts_actions__WEBPACK_IMPORTED_MODULE_0__.updatePost)({ post }));
        this.router.navigate(['posts']);
    }
    ngOnDestroy() {
        if (this.postSubscription) {
            this.postSubscription.unsubscribe();
        }
    }
}
EditPostComponent.ɵfac = function EditPostComponent_Factory(t) { return new (t || EditPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
EditPostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditPostComponent, selectors: [["app-edit-post"]], decls: 24, vars: 4, consts: [[1, "row"], [1, "col-md-12"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["type", "text", "formControlName", "title", 1, "form-control"], [4, "ngIf"], ["formControlName", "description", 1, "form-control"], ["formControlName", "image", 1, "form-control"], [1, "my-3"], ["type", "submit", 1, "btn", "btn-primary"]], template: function EditPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Update Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditPostComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EditPostComponent_div_10_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, EditPostComponent_div_15_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, EditPostComponent_div_20_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Update Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.postForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.postForm.get("title").touched && !ctx.postForm.get("title").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.postForm.get("description").touched && !ctx.postForm.get("description").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.postForm.get("image").touched && !ctx.postForm.get("image").valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBvc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3687:
/*!**********************************************************!*\
  !*** ./src/app/posts/posts-list/posts-list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsListComponent": () => (/* binding */ PostsListComponent)
/* harmony export */ });
/* harmony import */ var _state_posts_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../state/posts.selector */ 3655);
/* harmony import */ var _state_posts_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/posts.actions */ 1109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);






const _c0 = function (a1) { return ["edit", a1]; };
function PostsListComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PostsListComponent_div_3_div_2_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const post_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r4.onDeletePost(post_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", post_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", post_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](post_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", post_r3.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, post_r3.id));
} }
function PostsListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PostsListComponent_div_3_div_2_Template, 13, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const postsData_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", postsData_r1);
} }
const _c1 = function () { return ["/posts/add"]; };
class PostsListComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.posts = this.store.select(_state_posts_selector__WEBPACK_IMPORTED_MODULE_0__.getPosts);
        console.log(this.posts);
        this.count = this.store.select(_state_posts_selector__WEBPACK_IMPORTED_MODULE_0__.getCount);
        this.store.dispatch((0,_state_posts_actions__WEBPACK_IMPORTED_MODULE_1__.loadPosts)());
    }
    onDeletePost(id) {
        if (confirm('Are you sure you want to delete')) {
            this.store.dispatch((0,_state_posts_actions__WEBPACK_IMPORTED_MODULE_1__.deletePost)({ id }));
        }
    }
}
PostsListComponent.ɵfac = function PostsListComponent_Factory(t) { return new (t || PostsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
PostsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PostsListComponent, selectors: [["app-posts-list"]], decls: 5, vars: 5, consts: [[1, "container1"], [1, "button-add", 3, "routerLink"], [4, "ngIf"], [1, "product-list"], ["class", "product", 4, "ngFor", "ngForOf"], [1, "product"], [1, "product-image-holder"], [1, "product-image", 3, "src", "alt"], [1, "product-details"], [1, "product-details__name"], [1, "product-details__price"], [1, "product-actions"], [1, "product-actions__edit", 3, "routerLink"], [1, "product-actions__delete", 2, "background-color", "red", "border-radius", "10%", 3, "click"]], template: function PostsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Post\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PostsListComponent_div_3_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, ctx.posts));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: [".product-list[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  margin-top: 30px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.container1[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n\n.button-add[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n  border-radius: 10%;\n  background-color: #60b2e6;\n}\n\n.product-actions__edit[_ngcontent-%COMP%] {\n  border-radius: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 32px;\n  cursor: pointer;\n}\n\n.product-actions__edit[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.product-actions__edit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.product[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  margin: 0 15px 30px 0;\n  width: 286px;\n  max-height: 400px;\n  background-color: white;\n  height: 320px;\n}\n\n.product[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  border: 1px solid #35BADB;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 300px;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  height: 180px;\n  object-fit: cover;\n}\n\n.product-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 15px;\n}\n\n.product-details__price[_ngcontent-%COMP%] {\n  font-weight: 500;\n  opacity: 0.7;\n  letter-spacing: 1px;\n  margin: 0;\n}\n\n.product-details__name[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  font-weight: 500;\n  margin: 0;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n\n.product-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  margin: 0;\n}\n\n.product-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 46px 15px;\n  border-radius: 10%;\n}\n\n.product-actions__edit[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  background-color: #60b2e6;\n}\n\n.product-action_delete[_ngcontent-%COMP%] {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBRTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtBQUNKOztBQUNJO0VBQ0UscUJBQUE7QUFDTjs7QUFFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQU47O0FBSUU7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFESjs7QUFHSTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7QUFETjs7QUFLSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUhOOztBQUtJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFITjs7QUFLTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUhSOztBQU1NO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUpSOztBQVFJO0VBQ0Usa0JBQUE7QUFOTjs7QUFRTTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FBTlI7O0FBVUk7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUk47O0FBVU07RUFFRSxrQkFBQTtFQUNBLHlCQUFBO0FBVFI7O0FBa0JFO0VBQ0UscUJBQUE7QUFmSiIsImZpbGUiOiJwb3N0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcjEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB9XHJcbiAgLmJ1dHRvbi1hZGR7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2MGIyZTY7XHJcbiAgLy8gIGZsb2F0OiByaWdodDtcclxufVxyXG4gICVidXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIH1cclxuICBcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0IHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCAxNXB4IDMwcHggMDtcclxuICAgIHdpZHRoOiAyODZweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNUJBREI7XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAmLWltYWdlIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgICAmLWRldGFpbHMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gIFxyXG4gICAgICAmX19wcmljZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgJl9fbmFtZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmLWRlc2NyaXB0aW9uIHtcclxuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIFxyXG4gICAgICBwIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmLWFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBwYWRkaW5nOiA0NnB4IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgICBcclxuICAgICAgJl9fZWRpdCB7XHJcbiAgICAgICAgQGV4dGVuZCAlYnV0dG9uO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBiMmU2O1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1hY3Rpb25fZGVsZXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkIDtcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 3067:
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsModule": () => (/* binding */ PostsModule)
/* harmony export */ });
/* harmony import */ var _state_posts_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state/posts.effects */ 5336);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ 275);
/* harmony import */ var _state_posts_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/posts.selector */ 3655);
/* harmony import */ var _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-post/edit-post.component */ 3203);
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-book/add-book.component */ 3254);
/* harmony import */ var _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts-list/posts-list.component */ 3687);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _state_posts_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/posts.reducer */ 2531);
/* harmony import */ var _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-post/single-post.component */ 2018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
















const routes = [
    {
        path: '',
        component: _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_4__.PostsListComponent,
    },
    { path: 'add', component: _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_3__.AddPostComponent },
    {
        path: 'edit/:id',
        component: _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_2__.EditPostComponent,
    },
];
class PostsModule {
}
PostsModule.ɵfac = function PostsModule_Factory(t) { return new (t || PostsModule)(); };
PostsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PostsModule });
PostsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.StoreModule.forFeature(_state_posts_selector__WEBPACK_IMPORTED_MODULE_1__.POST_STATE_NAME, _state_posts_reducer__WEBPACK_IMPORTED_MODULE_5__.postsReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.EffectsModule.forFeature([_state_posts_effects__WEBPACK_IMPORTED_MODULE_0__.PostsEffects]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PostsModule, { declarations: [_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_4__.PostsListComponent, _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_3__.AddPostComponent, _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_2__.EditPostComponent, _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_6__.SinglePostComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 1109:
/*!**********************************************!*\
  !*** ./src/app/posts/state/posts.actions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_POST_ACTION": () => (/* binding */ ADD_POST_ACTION),
/* harmony export */   "ADD_POST_SUCCESS": () => (/* binding */ ADD_POST_SUCCESS),
/* harmony export */   "UPDATE_POST_ACTION": () => (/* binding */ UPDATE_POST_ACTION),
/* harmony export */   "UPDATE_POST_SUCCESS": () => (/* binding */ UPDATE_POST_SUCCESS),
/* harmony export */   "DELETE_POST_ACTION": () => (/* binding */ DELETE_POST_ACTION),
/* harmony export */   "DELETE_POST_SUCCESS": () => (/* binding */ DELETE_POST_SUCCESS),
/* harmony export */   "LOAD_POSTS": () => (/* binding */ LOAD_POSTS),
/* harmony export */   "LOAD_POSTS_SUCCESS": () => (/* binding */ LOAD_POSTS_SUCCESS),
/* harmony export */   "addPost": () => (/* binding */ addPost),
/* harmony export */   "addPostSuccess": () => (/* binding */ addPostSuccess),
/* harmony export */   "updatePost": () => (/* binding */ updatePost),
/* harmony export */   "updatePostSuccess": () => (/* binding */ updatePostSuccess),
/* harmony export */   "deletePost": () => (/* binding */ deletePost),
/* harmony export */   "deletePostSuccess": () => (/* binding */ deletePostSuccess),
/* harmony export */   "loadPosts": () => (/* binding */ loadPosts),
/* harmony export */   "loadPostsSuccess": () => (/* binding */ loadPostsSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 7562);

const ADD_POST_ACTION = '[posts page] add post';
const ADD_POST_SUCCESS = '[posts page] add post success';
const UPDATE_POST_ACTION = '[posts page] update post';
const UPDATE_POST_SUCCESS = '[posts page] update post success';
const DELETE_POST_ACTION = '[posts page] delete post';
const DELETE_POST_SUCCESS = '[posts page] delete post success';
const LOAD_POSTS = '[posts page] load posts';
const LOAD_POSTS_SUCCESS = '[posts page] load posts success';
const addPost = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ADD_POST_ACTION, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addPostSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(ADD_POST_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePost = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(UPDATE_POST_ACTION, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePostSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(UPDATE_POST_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deletePost = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(DELETE_POST_ACTION, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deletePostSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(DELETE_POST_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadPosts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(LOAD_POSTS);
const loadPostsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(LOAD_POSTS_SUCCESS, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 5336:
/*!**********************************************!*\
  !*** ./src/app/posts/state/posts.effects.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsEffects": () => (/* binding */ PostsEffects)
/* harmony export */ });
/* harmony import */ var _posts_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.selector */ 3655);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7163);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _posts_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.actions */ 1109);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 275);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/router-store */ 8258);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var src_app_auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/state/auth.actions */ 2253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/posts.service */ 752);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 7562);











class PostsEffects {
    constructor(actions$, postsService, store) {
        this.actions$ = actions$;
        this.postsService = postsService;
        this.store = store;
        this.loadPosts$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_posts_actions__WEBPACK_IMPORTED_MODULE_1__.loadPosts), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.store.select(_posts_selector__WEBPACK_IMPORTED_MODULE_0__.getPosts)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(([action, posts]) => {
                if (!posts.length || posts.length === 1) {
                    return this.postsService.getPosts().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((posts) => {
                        return (0,_posts_actions__WEBPACK_IMPORTED_MODULE_1__.loadPostsSuccess)({ posts });
                    }));
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)((0,src_app_auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_2__.dummyAction)());
            }));
        });
        this.addPost$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_posts_actions__WEBPACK_IMPORTED_MODULE_1__.addPost), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)((action) => {
                return this.postsService.addPost(action.post).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((data) => {
                    const post = Object.assign(Object.assign({}, action.post), { id: data.name });
                    return (0,_posts_actions__WEBPACK_IMPORTED_MODULE_1__.addPostSuccess)({ post });
                }));
            }));
        });
        this.updatePost$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_posts_actions__WEBPACK_IMPORTED_MODULE_1__.updatePost), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((action) => {
                return this.postsService.updatePost(action.post).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((data) => {
                    const updatedPost = {
                        id: action.post.id,
                        changes: Object.assign({}, action.post),
                    };
                    return (0,_posts_actions__WEBPACK_IMPORTED_MODULE_1__.updatePostSuccess)({ post: updatedPost });
                }));
            }));
        });
        this.deletePost$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_posts_actions__WEBPACK_IMPORTED_MODULE_1__.deletePost), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((action) => {
                return this.postsService.deletePost(action.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((data) => {
                    return (0,_posts_actions__WEBPACK_IMPORTED_MODULE_1__.deletePostSuccess)({ id: action.id });
                }));
            }));
        });
        this.getSinglePost$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__.ROUTER_NAVIGATION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)((r) => {
                return r.payload.routerState.url.startsWith('/posts/details');
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((r) => {
                return r.payload.routerState['params']['id'];
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.store.select(_posts_selector__WEBPACK_IMPORTED_MODULE_0__.getPosts)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([id, posts]) => {
                if (!posts.length) {
                    return this.postsService.getPostById(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((post) => {
                        const postData = [Object.assign(Object.assign({}, post), { id })];
                        return (0,_posts_actions__WEBPACK_IMPORTED_MODULE_1__.loadPostsSuccess)({ posts: postData });
                    }));
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)((0,src_app_auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_2__.dummyAction)());
            }));
        });
    }
}
PostsEffects.ɵfac = function PostsEffects_Factory(t) { return new (t || PostsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_3__.PostsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store)); };
PostsEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: PostsEffects, factory: PostsEffects.ɵfac });


/***/ }),

/***/ 2531:
/*!**********************************************!*\
  !*** ./src/app/posts/state/posts.reducer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postsReducer": () => (/* binding */ postsReducer)
/* harmony export */ });
/* harmony import */ var _posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.actions */ 1109);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _posts_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.state */ 2039);



const _postsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_posts_state__WEBPACK_IMPORTED_MODULE_1__.initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_posts_actions__WEBPACK_IMPORTED_MODULE_0__.addPostSuccess, (state, action) => {
    return _posts_state__WEBPACK_IMPORTED_MODULE_1__.postsAdapter.addOne(action.post, Object.assign(Object.assign({}, state), { count: state.count + 1 }));
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_posts_actions__WEBPACK_IMPORTED_MODULE_0__.updatePostSuccess, (state, action) => {
    return _posts_state__WEBPACK_IMPORTED_MODULE_1__.postsAdapter.updateOne(action.post, state);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_posts_actions__WEBPACK_IMPORTED_MODULE_0__.deletePostSuccess, (state, { id }) => {
    return _posts_state__WEBPACK_IMPORTED_MODULE_1__.postsAdapter.removeOne(id, state);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_posts_actions__WEBPACK_IMPORTED_MODULE_0__.loadPostsSuccess, (state, action) => {
    return _posts_state__WEBPACK_IMPORTED_MODULE_1__.postsAdapter.setAll(action.posts, Object.assign(Object.assign({}, state), { count: state.count + 1 }));
}));
function postsReducer(state, action) {
    return _postsReducer(state, action);
}


/***/ }),

/***/ 752:
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsService": () => (/* binding */ PostsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);


class PostsService {
    constructor(http) {
        this.http = http;
    }
    getPosts() {
        return this.http
            .get(`http://localhost:3000/products`);
    }
    addPost(post) {
        return this.http.post(`http://localhost:3000/products`, post);
    }
    updatePost(post) {
        const postData = { title: post.title, description: post.description };
        return this.http.patch(`http://localhost:3000/products/${post.id}`, postData);
    }
    deletePost(id) {
        return this.http.delete(`http://localhost:3000/products/${id}`);
    }
    getPostById(id) {
        return this.http.get(`http://localhost:3000/products/${id}`);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
PostsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_posts_posts_module_ts.js.map